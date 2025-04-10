import api from "./api";

export type LoginResponseData = {
  accessToken: string;
  refreshToken: string;
};

export type User = {
  email: string;
  username: string;
  full_name: string;
  created_at: string;
};

export const login = (body: { email: string; password: string }) => {
  return api.post<LoginResponseData>("/login", body);
};

export const getAllUsers = (query: string) => {
  return api.get<User[]>(`/users?full_name=${query}`);
};
