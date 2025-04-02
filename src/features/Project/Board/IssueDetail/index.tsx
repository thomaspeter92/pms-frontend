import Flex from "../../../../shared/components/Flex";
import Text from "../../../../shared/components/Text";
import StoryIcon from "../../../../shared/components/StoryIcon";
import Avatar from "../../../../shared/components/Avatar";
import TextInput from "../../../../shared/components/TextInput";
import { StyledForm, Container } from "./Styles";
import { Issue } from "../../../../api/projects";
import { DateTime } from "luxon";

const IssueDetail = ({ issue }: { issue: Issue }) => {
  console.log(issue);
  return (
    <Container>
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
      <Flex justify="space-between" gap={"1rem"} width={"100%"}>
        <Text weight={700}>{issue.name}</Text>
        <Flex align="center" gap=".3rem">
          <Text variant="sm" color={"primary"}>
            Edit
          </Text>
          <Text variant="sm" color={"primary"}>
            •
          </Text>
          <Text variant="sm" color="primary">
            Delete
          </Text>
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
        <Text variant="sm">|</Text>
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
        <StyledForm>
          <Avatar size="md" imgUrl="/robot.jpg" />
          <TextInput />
          <button></button>
        </StyledForm>
      </Flex>
    </Container>
  );
};

export default IssueDetail;
