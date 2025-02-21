import { Icons } from "../../../shared/components/Icons";
import Text from "../../../shared/components/Text";
import { Header, HeaderImg, Item, StyledSidebar, Title } from "./Styles";

type Props = {};

const Sidebar = (props: Props) => {
  const SettingsIcon = Icons["settings"];
  const UsersIcon = Icons["users"];
  const DashboardIcon = Icons["dashboard"];

  return (
    <StyledSidebar>
      <Header>
        <HeaderImg>
          <DashboardIcon size={40} />
          <Text as="h5">Project Name</Text>
        </HeaderImg>
      </Header>
      <Item to={"#"}>
        <SettingsIcon />
        Project Settings
      </Item>
      <Item to={"#"}>
        <UsersIcon />
        Project Members
      </Item>
    </StyledSidebar>
  );
};

export default Sidebar;
