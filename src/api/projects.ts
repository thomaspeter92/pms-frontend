import api from "./api";

export type Project = {
  project_id?: string;
  name: string;
  description: string;
  user_ids: string[];
  start_time: string;
  end_time: string;
  created_at?: string;
  updated_at?: string;
};

export type Issue = {
  task_id?: string;
  project_id: string;
  user_id: string;
  name: string;
  description: string;
  estimated_start_time: string;
  estimated_end_time: string;
  projectDetails?: {
    name: string;
  };
  priority?: "Low" | "Medium" | "High";
  status?: "Backlog" | "In-Progress" | "Done";
  userDetails?: {};
  task_type: "Story" | "Task";
  comment_count?: number;
};

export type Comment = {
  comment_id: string;
  comment: string;
  supported_files: string[];
  created_at: string;
  updated_at: string;
  comment_author: String;
};

export const getAllProjects = () => {
  return api.get<Project[]>("/projects");
};

export const addNewProject = (body: Project) => {
  return api.post<Project>("/projects", body);
};

export const getProjectById = (id: string) => {
  return api.get<Project>("/projects/" + id);
};

export const addNewIssue = (body: Issue) => {
  return api.post<Issue>("/tasks", body);
};

export const getAllProjectIssues = (projectId: string) => {
  return api.get<Issue[]>("/tasks?projectId=" + projectId);
};

export const updateIssue = (body: Issue) => {
  return api.put<Issue>(`/tasks/${body.task_id}`, body);
};

export const getCommentsByTaskId = (taskId: string) => {
  return api.get<Comment[]>("/comments?task_id=" + taskId);
};

export const addComment = (body: { comment: string; task_id: string }) => {
  return api.post<Comment>("/comments", body);
};
