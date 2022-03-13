import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { IRegister } from "../../types/registerUser.type";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { user_id } = req.headers;
      console.log(user_id);
      const user = await prisma.user.findUnique({
        where: {
          user_id: user_id.toString(),
        },
      });
      delete user.password;
      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json(null);
    }
  }
}
