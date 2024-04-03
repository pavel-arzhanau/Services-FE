import { create } from "zustand";
import { IUser } from "@/types";

interface UserState {
  user: Partial<IUser>;
  isAuth: boolean;
  setUser: (user: IUser) => void;
  setIsAuth: (bool: boolean) => void;
}

export const useUserStore = create<UserState>()((set, get) => ({
  // state
  user: {},
  isAuth: false,

  // setters
  setUser: (user: IUser) => set({ user }),
  setIsAuth: (isAuth: boolean) => set({ isAuth }),
}));
