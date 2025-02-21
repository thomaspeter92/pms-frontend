import { Route, Routes } from "react-router";
import Project from "../features/Project";
import Board from "../features/Project/Board";
import UserLayout from "../shared/layouts/User";
import Login from "../features/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<UserLayout />}>
        <Route path="project" element={<Project />}>
          <Route path=":id" element={<Board />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
