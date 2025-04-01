import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import { Content } from "./Styles";

// type Props = {};

const Project = () => {
  return (
    <>
      <Sidebar />
      <Content>
        <Outlet />
      </Content>
    </>
  );
};

export default Project;
