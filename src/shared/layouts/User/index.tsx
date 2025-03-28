import { Outlet } from "react-router";
import Nav from "../../components/Nav";
import { Container } from "./Styles";

type Props = {};

const UserLayout = (props: Props) => {
  return (
    <>
      <Nav />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default UserLayout;
