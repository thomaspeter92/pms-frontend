import { Outlet } from "react-router";
import Nav from "../../components/Nav";

type Props = {};

const UserLayout = (props: Props) => {
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};

export default UserLayout;
