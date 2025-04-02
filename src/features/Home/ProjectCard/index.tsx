import { StyledCard } from "./Styles";
import Text from "../../../shared/components/Text";
import Flex from "../../../shared/components/Flex";
import { DateTime } from "luxon";

type Props = {
  id: string;
  title: string;
  description: string;
  // users: string[];
  start: string;
  end: string;
};

const ProjectCard = ({ id, title, description, start, end }: Props) => {
  return (
    <StyledCard to={"/project/" + id}>
      <Text variant="md" weight={600} color={"primary"}>
        {title}
      </Text>
      <Text variant="sm">{description}</Text>
      <Flex direction="column" gap={".2rem"}>
        <Text variant="sm" weight={700}>
          Members (0)
        </Text>
        {/* <Flex>
          <Avatar size="md" imgUrl="robot.jpg" />
          <Avatar size="md" imgUrl="robot.jpg" />
          <Avatar size="md" imgUrl="robot.jpg" />
          <Avatar size="md" imgUrl="robot.jpg" />
          <Avatar size="md" imgUrl="robot.jpg" />
        </Flex> */}
      </Flex>
      <Flex gap={"1rem"}>
        <Flex direction="column">
          <Text variant="sm" weight={600}>
            Start Date
          </Text>
          <Text color="success" variant="sm">
            {DateTime.fromISO(start).toFormat("yyyy-MM-dd")}
          </Text>
        </Flex>
        <Flex direction="column">
          <Text variant="sm" weight={600}>
            End Date
          </Text>
          <Text color="danger" variant="sm">
            {DateTime.fromISO(end).toFormat("yyyy-MM-dd")}
          </Text>
        </Flex>
      </Flex>
    </StyledCard>
  );
};

export default ProjectCard;
