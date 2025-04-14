import React, { useCallback, useState, useEffect } from "react";
import Flex from "../../../shared/components/Flex";
import Text from "../../../shared/components/Text";
import SearchBar from "./SearchBar";
import { MemberCard, RemoveButton } from "./Styles";
import Avatar from "../../../shared/components/Avatar";
import { Icons } from "../../../shared/components/Icons";
import { color } from "../../../shared/util/styles";
import debounce from "lodash.debounce";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllUsers } from "../../../api/users";
import { ProjectMember, removeProjectMember } from "../../../api/projects";
import { useParams } from "react-router";

const ManageMembers = ({
  currentMembers,
}: {
  currentMembers: ProjectMember[];
}) => {
  const queryClient = useQueryClient();

  const { id } = useParams();

  const CloseIcon = Icons["close"];
  const [query, setQuery] = useState("");
  const { data, refetch } = useQuery({
    queryKey: ["search-users", query],
    queryFn: ({ queryKey }) => getAllUsers(queryKey[1]),
    enabled: false,
  });

  const handleSearch = useCallback(
    debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      const searchTerm = e.target.value;
      if (searchTerm.length < 3) {
        setQuery("");
        return;
      }
      setQuery(searchTerm);
    }, 500),
    [refetch]
  );

  useEffect(() => {
    if (query.length > 3) {
      refetch();
    }
  }, [query]);

  const { mutate: handleRemoveMember } = useMutation({
    mutationFn: removeProjectMember,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["project-members", id] });
    },
  });

  return (
    <Flex direction="column" gap={"1rem"}>
      <Text weight={600}>Manage Members</Text>

      <Flex direction="column" gap={".3rem"}>
        <Text weight={600} variant="sm">
          Add Members
        </Text>
        <SearchBar onChange={handleSearch} results={data?.data || []} />
      </Flex>

      <Flex direction="column" gap={".3rem"} width={"100%"}>
        <Text weight={600} variant="sm">
          Current Members
        </Text>
        <Flex direction="column" gap={".5rem"} width={"100%"}>
          {currentMembers?.map((d) => (
            <MemberCard key={d.id}>
              <Avatar imgUrl={"/robot.jpg"} size="md" />
              <Text weight={500} variant="sm">
                {d.user?.full_name}
              </Text>
              <RemoveButton onClick={() => handleRemoveMember(d.id)}>
                <CloseIcon size={20} color={color.grayDark} />
              </RemoveButton>
            </MemberCard>
          ))}
          {currentMembers?.length < 1 ? (
            <Text variant="xs">There are no members on this project.</Text>
          ) : null}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ManageMembers;
