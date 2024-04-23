import IUser from "./IUser";
import { AuthResponse } from "./responses";
import { ICategory, ISubcategory } from "./ICategory";
import { IAd } from "./IAd";
import IComment from "./IComment";

type supportedLanguages = "ru" | "by";

export type {
  IUser,
  supportedLanguages,
  AuthResponse,
  ISubcategory,
  ICategory,
  IAd,
  IComment,
};
