import { create } from "zustand";
import { IUser } from "@/types";
import AuthService from "../services/AuthService";

interface UserState {
  user: Partial<IUser>;
  isAuth: boolean;
  setUser: (user: IUser) => void;
  setIsAuth: (bool: boolean) => void;
  login: (phone: string, password: string) => void;
  registration: (phone: string, password: string, name: string) => void;
  logout: () => void;
}

export const useUserStore = create<UserState>()((set, get) => ({
  // state
  user: {},
  isAuth: false,

  // setters
  setUser: (user: IUser) => set({ user }),
  setIsAuth: (isAuth: boolean) => set({ isAuth }),

  // actions
  login: async (phone: string, password: string) => {
    try {
      const response = await AuthService.login(phone, password);
      localStorage.setItem("token", response.data.accessToken);
      set({ user: response.data.user, isAuth: true });
    } catch (error) {
      console.log(error);
    }
  },

  registration: async (phone: string, password: string, name: string) => {
    try {
      const response = await AuthService.registration(phone, password, name);
      localStorage.setItem("token", response.data.accessToken);
      set({ user: response.data.user, isAuth: true });
    } catch (error) {
      console.log(error);
    }
  },

  logout: async () => {
    try {
      await AuthService.logout();
      localStorage.removeItem("token");
      set({ user: {}, isAuth: false });
    } catch (error) {
      console.log(error);
    }
  },
}));
