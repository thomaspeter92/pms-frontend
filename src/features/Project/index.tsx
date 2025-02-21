import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import { Content } from "./Styles";

type Props = {};

const Project = (props: Props) => {
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
