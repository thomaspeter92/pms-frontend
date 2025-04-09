import { DateTime } from "luxon";
import { Comment as CommentType } from "../../../../../api/projects";
import Avatar from "../../../../../shared/components/Avatar";
import Flex from "../../../../../shared/components/Flex";
import Text from "../../../../../shared/components/Text";
import { CommentContainer } from "./Styles";
import { color } from "../../../../../shared/util/styles";

const Comment = ({ data }: { data: CommentType }) => {
  return (
    <CommentContainer>
      <Avatar imgUrl="/robot.jpg" size="md" />
      <Flex direction="column" gap={".2rem"}>
        <Flex gap={".5rem"}>
          <Text variant="sm" color="primary" weight={700}>
            {data.comment_author}
          </Text>
          <Text variant="sm" color={"grayDark"}>
            {DateTime.fromISO(data.created_at).toFormat(
              "MMMM d, yyyy 'at' h:mm a"
            )}
          </Text>
        </Flex>
        <Text variant="sm">{data.comment}</Text>
      </Flex>
    </CommentContainer>
  );
};

export default Comment;
