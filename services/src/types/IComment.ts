import IUser from "./IUser";

export default interface IComment {
  id: number;
  userId: number;
  adId: number;
  content: string;
  likes: null | number;
  createdAt: string;
  updatedAt: string;

  user: IUser;
}
