export default interface IUser {
  id: number;
  name: string;
  email: string | null;
  phone: string;
  description: string | null;
  rating: number | null;
  photo: Blob | null;
}
