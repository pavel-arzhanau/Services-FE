import IUser from "./IUser";
import { AuthResponse } from "./responses";
import { ICategory, ISubcategory } from "./ICategory";

type supportedLanguages = "ru" | "by";

export type {
  IUser,
  supportedLanguages,
  AuthResponse,
  ISubcategory,
  ICategory,
};
