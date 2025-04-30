import { useQuery } from "@tanstack/react-query";
import { Icons } from "../../../shared/components/Icons";
import { color } from "../../../shared/util/styles";
import {
  CollapseButton,
  Header,
  Item,
  SidebarBackdrop,
  StyledSidebar,
  Subheader,
} from "./Styles";
import { getAllProjects, Project, ProjectMember } from "../../../api/projects";
import { useState } from "react";
import Modal from "../../../shared/components/Modal";
import ManageMembers from "../ManageMembers";
import { set } from "react-hook-form";

const Sidebar = ({
  currentProject,
  members,
}: {
  currentProject: Project;
  members: ProjectMember[];
}) => {
  const CollapseIcon = Icons["chevronsRight"];
  const SettingsIcon = Icons["settings"];
  const UsersIcon = Icons["users"];
  const DashboardIcon = Icons["dashboard"];
  const ProjectIcon = Icons["folder"];

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [membersModalOpen, setMembersModalOpen] = useState(false);

  const { data: projectsData } = useQuery({
    queryKey: ["all-projects"],
    queryFn: getAllProjects,
  });

  const toggleOpen = () => {
    setMobileSidebarOpen((open) => !open);
  };

  return (
    <>
      {mobileSidebarOpen && <SidebarBackdrop />}
      <StyledSidebar $isOpen={mobileSidebarOpen}>
        <CollapseButton onClick={toggleOpen}>
          <CollapseIcon
            style={{
              color: color.grayDark,
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
            }}
            size={15}
          />
        </CollapseButton>
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
        <Item to={"#"} $disabled>
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
          <Item key={d.project_id} to={"/project/" + d.project_id}>
            <ProjectIcon size={20} />
            {d.name}
          </Item>
        ))}
      </StyledSidebar>
      <Modal
        onClose={() => setMembersModalOpen(false)}
        isOpen={membersModalOpen}
      >
        <ManageMembers currentMembers={members!!} />
      </Modal>
    </>
  );
};

export default Sidebar;
