import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string;
  userId: string;
  refreshToken: string;
  setToken: (token: string) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      userId: "",
      token: "",
      refreshToken: "",
      setToken: (tkn) => {
        const decoded: { user_id: string } = jwtDecode(tkn);

        set({ token: tkn, userId: decoded.user_id });
      },
    }),
    {
      name: "auth",
    }
  )
);
