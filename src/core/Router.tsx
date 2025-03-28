import { Route, Routes } from "react-router";
import Project from "../features/Project";
import Board from "../features/Project/Board";
import UserLayout from "../shared/layouts/User";
import Login from "../features/Login";
import Settings from "../features/Project/Settings";
import Home from "../features/Home";

import { useAuthStore } from "../auth/authStore";

const Router = () => {
  const { token } = useAuthStore();

  return (
    <Routes>
      {!token ? (
        <Route index element={<Login />} />
      ) : (
        <Route element={<UserLayout />}>
          <Route path="project/:id" element={<Project />}>
            <Route index element={<Board />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route index element={<Home />} />
        </Route>
      )}
    </Routes>
  );
};

export default Router;
