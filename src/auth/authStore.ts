import { create } from "zustand";

interface AuthState {
  token: string;
  refreshToken: string;
  setToken: (token: string) => void;
}

export const useAuthStore = create<AuthState>()((set) => ({
  token: "",
  refreshToken: "",
  setToken: (tkn) => set({ token: tkn }),
}));
