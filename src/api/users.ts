import api from "./api";

const URLS = {
  login: "/login",
};

export type LoginResponseData = {
  accessToken: string;
  refreshToken: string;
};
export const login = (body: { email: string; password: string }) => {
  return api.post<LoginResponseData>(URLS.login, body);
};
