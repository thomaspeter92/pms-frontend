import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import { persist } from "zustand/middleware";

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
      logout: () => set({ token: "", userId: "", refreshToken: "" }),
    }),
    {
      name: "auth",
    }
  )
);
