import { ICategory } from "./ICategory";
import IUser from "./IUser";
import IComment from "./IComment";

export interface IAd {
  id: string;
  title: string;
  description: null | string;
  price: null | string;
  subcategoryId: number;
  userId: number;
  subcategory: {
    id: number;
    name: string;
    categoryId: number;
    category: ICategory;
  };
  user: IUser;
  comments: IComment[];
}
