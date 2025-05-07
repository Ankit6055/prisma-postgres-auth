import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const registerUser = async (req, res) => {
  const {name, email, password} = req.body;

  if (!name || !email || !password) {
    console.log("Data is missing");
    return res.status(400).json({
      success: false,
      message: "All fields are required"
    })
  }


}