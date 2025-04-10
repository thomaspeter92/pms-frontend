import { useQuery } from "@tanstack/react-query";
import { Icons } from "../../../shared/components/Icons";
import { useGetQueryData } from "../../../shared/hooks/useGetQueryData";
// import Text from "../../../shared/components/Text";
import { color } from "../../../shared/util/styles";
import { Header, Item, StyledSidebar, Subheader } from "./Styles";
import { getAllProjects, Project } from "../../../api/projects";
import { useState } from "react";
import Modal from "../../../shared/components/Modal";
import ManageMembers from "../ManageMembers";

// type Props = {};

const Sidebar = ({ currentProject }: { currentProject: Project }) => {
  const SettingsIcon = Icons["settings"];
  const UsersIcon = Icons["users"];
  const DashboardIcon = Icons["dashboard"];
  const ProjectIcon = Icons["folder"];

  const [membersModalOpen, setMembersModalOpen] = useState(false);

  const { data: projectsData } = useQuery({
    queryKey: ["all-projects"],
    queryFn: getAllProjects,
  });

  console.log(currentProject);

  return (
    <>
      <StyledSidebar>
        <Header>
          <DashboardIcon
            size={50}
            style={{
              background: color.grayLight,
              padding: 10,
              borderRadius: 5,
              strokeWidth: 1.5,
              flexShrink: 0,
            }}
          />
          {currentProject?.name}
        </Header>
        <Item to={"#"}>
          <SettingsIcon size={20} />
          Project Settings
        </Item>
        <Item to={"#"} onClick={() => setMembersModalOpen(true)}>
          <UsersIcon size={20} />
          Project Members
        </Item>
        <hr style={{ marginBottom: "1rem" }} />
        <Subheader>ALL PROJECTS</Subheader>
        {projectsData?.data?.map((d) => (
          <Item to={"/project/" + d.project_id}>
            <ProjectIcon size={20} />
            {d.name}
          </Item>
        ))}
      </StyledSidebar>
      <Modal
        onClose={() => setMembersModalOpen(false)}
        isOpen={membersModalOpen}
      >
        <ManageMembers />
      </Modal>
    </>
  );
};

export default Sidebar;
