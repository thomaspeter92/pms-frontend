import Flex from "../../../../shared/components/Flex";
import Text from "../../../../shared/components/Text";
import StoryIcon from "../../../../shared/components/StoryIcon";
import Avatar from "../../../../shared/components/Avatar";
import TextInput from "../../../../shared/components/TextInput";
import { StyledForm } from "./Styles";

type Props = {};

const IssueDetail = ({}: Props) => {
  return (
    <Flex direction="column" align="flex-start" gap={".7rem"}>
      <Flex align="center" justify="start" direction="row" gap={".5rem"}>
        <Text variant="sm" weight={700}>
          Dashboard Projet
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
        <Text weight={700}>Connect Sign Up Endpoints</Text>
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
        <Text variant="sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          vel porro, quia maxime aspernatur fuga atque excepturi ratione. Ipsam
          et quod impedit quia totam illo sed perferendis dignissimos dolorem
          beatae.
        </Text>
      </Flex>
      <Flex gap={".5rem"}>
        <Flex gap={".5rem"}>
          <Text variant="sm" weight={600}>
            Start Date:
          </Text>
          <Text weight={400} variant="sm">
            2025-03-10
          </Text>
        </Flex>
        <Text variant="sm">|</Text>
        <Flex gap={".5rem"}>
          <Text variant="sm" weight={600}>
            Deadline:
          </Text>
          <Text weight={400} variant="sm">
            2025-03-10
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
    </Flex>
  );
};

export default IssueDetail;
