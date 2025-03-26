import { Icons } from "../../../shared/components/Icons";
import Text from "../../../shared/components/Text";
import { color } from "../../../shared/util/styles";
import { Header, Item, StyledSidebar, Subheader } from "./Styles";

type Props = {};

const Sidebar = (props: Props) => {
  const SettingsIcon = Icons["settings"];
  const UsersIcon = Icons["users"];
  const DashboardIcon = Icons["dashboard"];
  const ProjectIcon = Icons["folder"];

  return (
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
        Dashboard project
      </Header>
      <Item to={"#"}>
        <SettingsIcon size={20} />
        Project Settings
      </Item>
      <Item to={"#"}>
        <UsersIcon size={20} />
        Project Members
      </Item>
      <hr style={{ marginBottom: "1rem" }} />
      <Subheader>ALL PROJECTS</Subheader>
      <Item to={"#"}>
        <ProjectIcon size={20} />
        Mock Up Project
      </Item>
      <Item to={"#"}>
        <ProjectIcon size={20} />
        Project Members
      </Item>
    </StyledSidebar>
  );
};

export default Sidebar;
