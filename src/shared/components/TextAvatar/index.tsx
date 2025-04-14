import { Container } from "./Styles";
import Text from "../Text";

const TextAvatar = ({ initials }: { initials: string }) => {
  return (
    <Container>
      <Text variant="sm" weight={700}>
        {initials}
      </Text>
    </Container>
  );
};

export default TextAvatar;
