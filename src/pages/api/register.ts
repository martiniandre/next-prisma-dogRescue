import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { IRegister } from "../../types/registerUser.type";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const user: IRegister = req.body;
      await prisma.user.create({
        data: user,
      });
      return res.status(200).json({
        message: "Sucess",
      });
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        message: "Failed to create user",
      });
    }
  }
}
