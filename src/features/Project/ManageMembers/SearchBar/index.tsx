import { Container, Input, SearchResults } from "./Styles";
import { Icons } from "../../../../shared/components/Icons";
import { StyledSearchResult } from "./Styles";
import Avatar from "../../../../shared/components/Avatar";
import Text from "../../../../shared/components/Text";
import { User } from "../../../../api/users";

const SearchResult = ({ d }: { d: User }) => (
  <StyledSearchResult>
    {/* <Avatar imgUrl={d.imgUrl} size="md" /> */}
    <Text variant="sm" weight={600} color="grayDark">
      {d.full_name}
    </Text>
  </StyledSearchResult>
);

const SearchBar = ({
  onChange,
  results,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  results: any[];
}) => {
  const Icon = Icons["search"];
  return (
    <Container>
      <Input onChange={onChange} />
      <Icon size={20} />
      {results?.length > 0 ? (
        <SearchResults>
          {results.map((d) => (
            <SearchResult d={d} />
          ))}
        </SearchResults>
      ) : null}
    </Container>
  );
};

export default SearchBar;
