import axios from "axios";
import prisma from "../lib/prisma";
import { IRegister } from "../types/registerUser.type";
import { Credentials } from "./../types/Login.type";

export const Register = async (user: IRegister) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/register",
      user
    );
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
    const response = await axios.post("http://localhost:3000/api/login", data);
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
    const response = await axios.get("http://localhost:3000/api/user", {
      headers: {
        user_id: user_id,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
