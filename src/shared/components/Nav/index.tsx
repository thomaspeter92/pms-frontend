import { HomeLink, Inner, Item, ItemText, NavBar } from "./Styles";
import { Icons } from "../Icons";
import Avatar from "../Avatar";
import Logo from "../../../assets/images/Logo.png";

type Props = {};

function Nav({}: Props) {
  const PlusIcon = Icons["plus"];
  const SearchIcon = Icons["search"];

  return (
    <NavBar>
      <Inner>
        <HomeLink to={"/"}>
          <img src={Logo} />
        </HomeLink>
        <Item to={"#"}>
          <SearchIcon />
          <ItemText>Search Issues</ItemText>
        </Item>
        <Item to="#">
          <PlusIcon />
          <ItemText>New Project</ItemText>
        </Item>
        <Item to="#">
          <Avatar size="md" imgUrl="/robot.jpg" />
          <ItemText>My Account</ItemText>
        </Item>
      </Inner>
    </NavBar>
  );
}

export default Nav;
