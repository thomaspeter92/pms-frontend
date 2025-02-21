import { HomeLink, Inner, Item, ItemText, NavBar } from "./Styles";
import { Icons } from "../Icons";
import Avatar from "../Avatar";

type Props = {};

function Nav({}: Props) {
  const HomeIcon = Icons["home"];
  const PlusIcon = Icons["plus"];
  const SearchIcon = Icons["search"];

  return (
    <NavBar>
      <Inner>
        <HomeLink to={"/"}>
          <HomeIcon size={35} color="white" />
        </HomeLink>
        <Item to={"#"}>
          <SearchIcon />
          <ItemText>Search Issues</ItemText>
        </Item>
        <Item to="#">
          <PlusIcon />
          <ItemText>Create Issue</ItemText>
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
