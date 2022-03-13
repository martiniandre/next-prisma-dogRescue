import { IDogs } from "./dogs.type";

export interface IUser {
  id: string
  name: string;
  type: string;
  street: string;
  street_number: string;
  complement: string;
  district: string;
  favorite_dogs: IDogs[];
  created_at: Date;
  updated_at: Date;
}
