import { HomeLink, Inner, Item, ItemText, NavBar } from "./Styles";
import { Icons } from "../Icons";
import Avatar from "../Avatar";
import Logo from "../../../assets/images/Logo.png";
import Modal from "../Modal";
import { useState } from "react";
import NewProject from "../../../features/Project/NewProject";
import { useAuthStore } from "../../../auth/authStore";
import { useNavigate } from "react-router";

function Nav() {
  const navigate = useNavigate();
  const { logout } = useAuthStore();

  const [modalOpen, setModalOpen] = useState(false);

  const PlusIcon = Icons["plus"];
  const SearchIcon = Icons["search"];
  const LogoutIcon = Icons["logout"];

  const handleLogout = () => {
    navigate("/");
    logout();
  };

  return (
    <>
      <NavBar>
        <Inner>
          <HomeLink to={"/"}>
            <img src={Logo} />
          </HomeLink>
          <Item $disabled to={"#"}>
            <SearchIcon />
            <ItemText>Search Issues</ItemText>
          </Item>
          <Item to="#" onClick={() => setModalOpen(true)}>
            <PlusIcon />
            <ItemText>New Project</ItemText>
          </Item>
          <Item $disabled to="#">
            <Avatar size="md" imgUrl="/robot.jpg" />
            <ItemText>My Account</ItemText>
          </Item>
          <Item as={"button"} to={""} onClick={handleLogout}>
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
