import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;
      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });
      if (!user || user.password !== password) {
        return res.json({ error: "Email/passoword is incorrect", status: 401 });
      }
      return res.json({
        user,
      });
    } catch (err) {
      return err;
    }
  }
}
