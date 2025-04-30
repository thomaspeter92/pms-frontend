import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import { Content } from "./Styles";
import { useQuery } from "@tanstack/react-query";
import { getProjectById } from "../../api/projects";
import { useParams } from "react-router";
import Text from "../../shared/components/Text";
import { Header } from "./Styles";
import { InfoSection } from "./Styles";
import { AvatarList } from "./Styles";
import Avatar from "../../shared/components/Avatar";
import SearchBar from "./ManageMembers/SearchBar";
import Button from "../../shared/components/Button";
import Modal from "../../shared/components/Modal";
import NewIssue from "./Board/NewIssue";
import { useState } from "react";
import { getProjectMembers } from "../../api/projects";
import TextAvatar from "../../shared/components/TextAvatar";

const Project = () => {
  let { id } = useParams();

  const [modalOpen, setModalOpen] = useState(false);

  const { data, isFetching } = useQuery({
    queryKey: ["project", id],
    queryFn: ({ queryKey }) => getProjectById(queryKey[1] as string),
    enabled: id ? true : false,
  });

  const { data: members } = useQuery({
    queryKey: ["project-members", id],
    queryFn: ({ queryKey }) => getProjectMembers(queryKey[1] as string),
  });

  if (isFetching) return null;

  if (!data?.data) return null;

  return (
    <>
      <Sidebar currentProject={data?.data} members={members?.data!!} />
      <Content>
        <Header>
          <Text variant="sm">Projects / {data.data.name}</Text>
          <Text variant="lg" weight={700}>
            {data.data.name}
          </Text>
          <InfoSection>
            <AvatarList>
              {Array.isArray(members?.data) && members.data.length > 0 ? (
                members.data.map((d) => (
                  <TextAvatar
                    key={d.id}
                    initials={d.user?.full_name.substring(0, 1)!!}
                  />
                ))
              ) : (
                <Text variant="sm">This project currently has no members.</Text>
              )}
            </AvatarList>
            <Button onClick={() => setModalOpen(true)} variant="primary">
              New Task +
            </Button>
          </InfoSection>
        </Header>
        <Outlet />
      </Content>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <NewIssue
          closeForm={() => setModalOpen(false)}
          project_id={data.data.project_id!!}
        />
      </Modal>
    </>
  );
};

export default Project;
