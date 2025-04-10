import React, { useCallback, useState, useEffect } from "react";
import Flex from "../../../shared/components/Flex";
import Text from "../../../shared/components/Text";
import SearchBar from "./SearchBar";
import { MemberCard, RemoveButton } from "./Styles";
import Avatar from "../../../shared/components/Avatar";
import { Icons } from "../../../shared/components/Icons";
import { color } from "../../../shared/util/styles";
import debounce from "lodash.debounce";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../../api/users";

const members = [
  { name: "Tomas Peter", imgUrl: "/robot.jpg" },
  { name: "Hannah Smith", imgUrl: "/robot.jpg" },
  { name: "Helios Chen", imgUrl: "/robot.jpg" },
  { name: "David Smith", imgUrl: "/robot.jpg" },
  { name: "Becky Jones", imgUrl: "/robot.jpg" },
  { name: "Jason Hannover", imgUrl: "/robot.jpg" },
];

const ManageMembers = () => {
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

  console.log(data);

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
          {members.map((d) => (
            <MemberCard>
              <Avatar imgUrl={d.imgUrl} size="md" />
              <Text weight={500} variant="sm">
                {d.name}
              </Text>
              <RemoveButton>
                <CloseIcon size={20} color={color.grayDark} />
              </RemoveButton>
            </MemberCard>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ManageMembers;
