import api from "./api";

const URLS = {
  login: "/login",
};

export type LoginData = {
  accessToken: string;
  refreshToken: string;
};
export const login = (body: { email: string; password: string }) => {
  return api.post<LoginData>(URLS.login, body);
};
