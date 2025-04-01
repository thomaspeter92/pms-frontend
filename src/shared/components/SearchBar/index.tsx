import { Container, Input } from "./Styles";
import { Icons } from "../Icons";

// type Props = {};

const SearchBar = () => {
  const Icon = Icons["search"];
  return (
    <Container>
      <Input />
      <Icon size={20} />
    </Container>
  );
};

export default SearchBar;
