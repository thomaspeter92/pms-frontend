import api from "./api";

type Project = {
  project_id: string;
  name: string;
  description: string;
  user_ids: string[];
  start_time: string;
  end_time: string;
};

export const getAllProjects = () => {
  return api.get<Project[]>("/projects");
};
