
export enum UserType{
  ADMIN = "admin",
  USER = "user",
}

export interface IRegister {
  name: string;
  type: UserType;
  email: string;
  password: string;
  street: string;
  street_number: string;
  complement: string;
  district: string;
  updated_at?: Date;
  created_at?: Date;
}
