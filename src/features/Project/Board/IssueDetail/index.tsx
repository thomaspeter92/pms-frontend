import Flex from "../../../../shared/components/Flex";
import Text from "../../../../shared/components/Text";
import StoryIcon from "../../../../shared/components/StoryIcon";
import Avatar from "../../../../shared/components/Avatar";
import TextInput from "../../../../shared/components/TextInput";
import { StyledForm, Container, CommentArea } from "./Styles";
import {
  addComment,
  deleteIssue,
  getCommentsByTaskId,
  Issue,
} from "../../../../api/projects";
import { DateTime } from "luxon";
import Button from "../../../../shared/components/Button";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Comment from "./Comment";
import { SubmitHandler, useForm } from "react-hook-form";
import { useParams } from "react-router";
import { Icons } from "../../../../shared/components/Icons";
import { color } from "../../../../shared/util/styles";
import TextAvatar from "../../../../shared/components/TextAvatar";
import { useAuthStore } from "../../../../auth/authStore";

type CommentFormInput = {
  task_id: string;
  comment: string;
};

const IssueDetail = ({
  issue,
  closeForm,
}: {
  issue: Issue;
  closeForm: () => void;
}) => {
  const CloseIcon = Icons["close"];
  const { user } = useAuthStore();
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { data, isFetching } = useQuery({
    queryKey: ["comments", issue.task_id],
    queryFn: () => getCommentsByTaskId(issue.task_id!!),
  });

  const { register, handleSubmit, reset } = useForm<CommentFormInput>({
    defaultValues: {
      task_id: issue.task_id,
      comment: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: addComment,
  });

  const { mutate: deleteIssueMutate } = useMutation({
    mutationFn: deleteIssue,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["project-issues", id] }),
  });

  const onSubmit: SubmitHandler<CommentFormInput> = (data) => {
    mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["comments", issue.task_id],
        });
        reset();
      },
    });
  };

  const handleDelete = () => {
    deleteIssueMutate(issue?.task_id!!);
  };

  return (
    <Container>
      <Flex>
        <Flex align="center" justify="start" direction="row" gap={".5rem"}>
          <Text variant="sm" weight={700}>
            {issue?.projectDetails?.name}
          </Text>
          <Text variant="sm" weight={700}>
            /
          </Text>
          <StoryIcon />
          <Text weight={400} variant="sm">
            LUC-101
          </Text>
        </Flex>
        <button onClick={closeForm}>
          <CloseIcon size={20} style={{ color: color.grayDark }} />
        </button>
      </Flex>
      <Flex justify="space-between" gap={"1rem"} width={"100%"}>
        <Text weight={700}>{issue.name}</Text>
        <Flex align="center" gap=".3rem" justify="end">
          <button disabled>
            <Text variant="sm" color={"grayLight"}>
              Edit
            </Text>
          </button>
          <Text variant="sm" color={"primary"}>
            •
          </Text>
          <button onClick={handleDelete}>
            <Text variant="sm" color="primary">
              Delete
            </Text>
          </button>
        </Flex>
      </Flex>
      <Flex direction="column" align="flex-start" gap={".3rem"}>
        <Text weight={600} variant="sm">
          Description
        </Text>
        <Text variant="sm">{issue.description}</Text>
      </Flex>
      <Flex gap={".5rem"}>
        <Flex gap={".5rem"}>
          <Text variant="sm" weight={600}>
            Start Date:
          </Text>
          <Text weight={400} variant="sm">
            {DateTime.fromISO(issue.estimated_start_time).toFormat(
              "yyyy-MM-dd"
            )}
          </Text>
        </Flex>

        <Flex gap={".5rem"}>
          <Text variant="sm" weight={600}>
            Deadline:
          </Text>
          <Text weight={400} variant="sm">
            {DateTime.fromISO(issue.estimated_end_time).toFormat("yyyy-MM-dd")}
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column" gap={".3rem"} width={"100%"}>
        <Text variant="sm" weight={600}>
          Comments
        </Text>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <TextAvatar
            initials={user.name.split(" ")[0][0] + user.name.split(" ")[1][0]}
          />
          <TextInput required {...register("comment")} />
          <Button variant="primary">Post</Button>
        </StyledForm>
        {!isFetching && data?.data ? (
          <CommentArea>
            {data.data.map((d) => (
              <Comment key={d.comment_id} data={d} />
            ))}
          </CommentArea>
        ) : null}
      </Flex>
    </Container>
  );
};

export default IssueDetail;
