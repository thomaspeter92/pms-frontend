import { Form } from "./Styles";
import { SubmitHandler, useForm } from "react-hook-form";
import ForwardedTextInput from "../../../../shared/components/TextInput";
import Text from "../../../../shared/components/Text";
import Flex from "../../../../shared/components/Flex";
import Button from "../../../../shared/components/Button";
import { useAuthStore } from "../../../../auth/authStore";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addNewIssue } from "../../../../api/projects";
import Select from "../../../../shared/components/Select";

type FormInputs = {
  project_id: string;
  name: string;
  description: string;
  estimated_start_time: string;
  estimated_end_time: string;
  user_id: string;
  priority: "Low" | "Medium" | "High";
  task_type: "Task" | "Story";
};

const NewIssue = ({
  project_id,
  closeForm,
}: {
  project_id: string;
  closeForm: () => void;
}) => {
  const { userId } = useAuthStore();

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addNewIssue,
  });

  const { register, handleSubmit } = useForm<FormInputs>({
    defaultValues: {
      project_id: project_id,
      user_id: userId,
      name: "",
      description: "",
      estimated_start_time: "",
      estimated_end_time: "",
      priority: "Low",
      task_type: "Task",
    },
  });

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    data.estimated_start_time += " 00:00:00";
    data.estimated_end_time += " 00:00:00";
    console.log(data);
    mutate(data, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["project-issues", project_id],
        });
        closeForm();
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Text weight={700}>Create Issue</Text>
      <ForwardedTextInput label="Name" {...register("name")} />
      <ForwardedTextInput label="Description" {...register("description")} />
      <Flex gap={"1rem"}>
        <Flex flex={1} gap={".3rem"} direction="column">
          <Text variant="sm" weight={600}>
            Priority
          </Text>
          <Select
            {...register("priority")}
            options={["Low", "Medium", "High"]}
          ></Select>
        </Flex>
        <Flex flex={1} gap={".3rem"} direction="column">
          <Text variant="sm" weight={600}>
            Type
          </Text>
          <Select
            {...register("task_type")}
            options={["Task", "Story"]}
          ></Select>
        </Flex>
      </Flex>
      <Flex justify="space-between" gap={"1rem"}>
        <ForwardedTextInput
          type="date"
          label="Start Date"
          {...register("estimated_start_time")}
        />
        <ForwardedTextInput
          type="date"
          label="End Date"
          {...register("estimated_end_time")}
        />
      </Flex>
      <Flex gap={"1rem"} justify="end">
        <Button onClick={closeForm} type="button" variant="gray">
          Cancel
        </Button>
        <Button variant="primary">Create</Button>
      </Flex>
    </Form>
  );
};

export default NewIssue;
