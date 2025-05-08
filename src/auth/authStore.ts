import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { redirect } from "react-router";

interface AuthState {
  token: string;
  userId: string;
  refreshToken: string;
  user: any;
  setToken: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      userId: "",
      token: "",
      user: {},
      refreshToken: "",
      setToken: (tkn) => {
        const decoded = jwtDecode(tkn);
        set({ token: tkn, user: { ...decoded } });
      },
      logout: () => {
        redirect("/");
        set({ token: "", userId: "", refreshToken: "" });
      },
    }),
    {
      name: "auth",
    }
  )
);
