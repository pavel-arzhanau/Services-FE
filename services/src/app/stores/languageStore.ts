import { create } from "zustand";

interface LanguageState {
  language: string;
  setLanguage: (language: string) => void;
}

export const useLanguageStore = create<LanguageState>()((set, get) => ({
  language: "ru",
  setLanguage: (language: string) => set({ language }),
}));
