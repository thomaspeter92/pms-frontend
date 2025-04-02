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
import SearchBar from "../../shared/components/SearchBar";
import Button from "../../shared/components/Button";
import Modal from "../../shared/components/Modal";
import NewIssue from "./Board/NewIssue";
import { useState } from "react";

const Project = () => {
  let { id } = useParams();

  const [modalOpen, setModalOpen] = useState(false);

  const { data, isFetching } = useQuery({
    queryKey: ["project"],
    queryFn: () => getProjectById(id!!),
    enabled: id ? true : false,
  });

  if (data?.data && !isFetching)
    return (
      <>
        <Sidebar />
        <Content>
          <Header>
            <Text variant="sm">Projects / {data.data.name}</Text>
            <Text variant="lg" weight={700}>
              {data.data.name}
            </Text>
            <InfoSection>
              <SearchBar />
              <AvatarList>
                <Avatar size="md" imgUrl="/robot.jpg" />
                <Avatar size="md" imgUrl="/robot.jpg" />
                <Avatar size="md" imgUrl="/robot.jpg" />
                <Avatar size="md" imgUrl="/robot.jpg" />
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
