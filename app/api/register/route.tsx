import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "../../libs/prismDb";
import { User } from "@prisma/client";
import { getSession } from "next-auth/react";

// async function isAdmin(userId: string): Promise<boolean> {
//   const user = await prisma.user.findUnique({
//     where: {
//       id: userId,
//     },
//   });
//   return user?.role === "ketuaPertandingan";
// }

// async function getUsers(userId: string): Promise<User[]> {
//   if (await isAdmin(userId)) {
//     // Admin can access all users
//     return prisma.user.findMany();
//   } else {
//     // Non-admin users can only access their own data
//     return prisma.user.findMany({
//       where: {
//         id: userId,
//       },
//     });
//   }
// }

export async function POST(request: Request, response: Response) {
  try {
    const body = await request.json();
    const { email, name, password, role } = body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
        role,
      },
    });
    return new Response(JSON.stringify(user), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error registering user:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
