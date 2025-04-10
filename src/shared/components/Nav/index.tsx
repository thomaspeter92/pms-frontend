import { HomeLink, Inner, Item, ItemText, NavBar } from "./Styles";
import { Icons } from "../Icons";
import Avatar from "../Avatar";
import Logo from "../../../assets/images/Logo.png";
import Modal from "../Modal";
import { useState } from "react";
import NewProject from "../../../features/Project/NewProject";
import { useAuthStore } from "../../../auth/authStore";

function Nav() {
  const { logout } = useAuthStore();

  const [modalOpen, setModalOpen] = useState(false);

  const PlusIcon = Icons["plus"];
  const SearchIcon = Icons["search"];
  const LogoutIcon = Icons["logout"];

  return (
    <>
      <NavBar>
        <Inner>
          <HomeLink to={"/"}>
            <img src={Logo} />
          </HomeLink>
          <Item to={"#"}>
            <SearchIcon />
            <ItemText>Search Issues</ItemText>
          </Item>
          <Item to="#" onClick={() => setModalOpen(true)}>
            <PlusIcon />
            <ItemText>New Project</ItemText>
          </Item>
          <Item to="#">
            <Avatar size="md" imgUrl="/robot.jpg" />
            <ItemText>My Account</ItemText>
          </Item>
          <Item onClick={logout} to="#">
            <LogoutIcon />
            <ItemText>Logout</ItemText>
          </Item>
        </Inner>
      </NavBar>
      <Modal onClose={() => setModalOpen(false)} isOpen={modalOpen}>
        <NewProject closeForm={() => setModalOpen(false)} />
      </Modal>
    </>
  );
}

export default Nav;
