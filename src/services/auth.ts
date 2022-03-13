import axios from "axios";
import { IRegister } from "../types/registerUser.type";
import { Credentials } from "./../types/Login.type";

export const Register = async (user: IRegister) => {
  try {
    const response = await axios.post("/api/register", user);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (err) {
    console.log(err);
  }
};

export const LoginService = async (data: Credentials) => {
  try {
    const response = await axios.post("/api/login", data);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (err) {
    console.log(err);
  }
};

export const RecoverUser = async (user_id: string) => {
  try {
    const response = await axios.get("/api/user", {
      headers: {
        user_id: user_id,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
