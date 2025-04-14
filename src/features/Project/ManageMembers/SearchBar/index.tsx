import { Container, Input, SearchResults } from "./Styles";
import { Icons } from "../../../../shared/components/Icons";
import { StyledSearchResult } from "./Styles";
import Text from "../../../../shared/components/Text";
import { User } from "../../../../api/users";
import { useParams } from "react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProjectMember } from "../../../../api/projects";
import TextAvatar from "../../../../shared/components/TextAvatar";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

const SearchResult = ({ d }: { d: User }) => {
  const { id } = useParams();
  const queryClient = useQueryClient();

  const { mutate: handleAddMember } = useMutation({
    mutationFn: addProjectMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project-members", id] });
    },
    onError: (error: AxiosError) => {
      toast(error.response?.data?.message!!);
    },
  });

  return (
    <StyledSearchResult
      onClick={() => handleAddMember({ project_id: id!!, user_id: d.user_id })}
    >
      <TextAvatar initials={d.full_name.substring(0, 2)} />
      <Text variant="sm" weight={600} color="grayDark">
        {d.full_name}
      </Text>
    </StyledSearchResult>
  );
};

const SearchBar = ({
  onChange,
  results,
}: {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  results: User[];
}) => {
  const Icon = Icons["search"];

  return (
    <Container>
      <Input onChange={onChange} />
      <Icon size={20} />
      {results?.length > 0 ? (
        <SearchResults>
          {results.map((d) => (
            <SearchResult key={d.user_id} d={d} />
          ))}
        </SearchResults>
      ) : null}
    </Container>
  );
};

export default SearchBar;
