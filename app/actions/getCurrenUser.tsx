import { getServerSession } from "next-auth";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismDb";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }
    // if (!session.user.role) {
    //   return null;
    // }

    // if (session.user.role === "WASIT") {
    //   return console.log("anda wasit ");
    // }
    // if (session.user.role === "USER") {
    //   return console.log("anda user ");
    // }
    // if (session.user.role === "KETUA") {
    //   return console.log("anda ketua ");
    // }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      emailVerified: currentUser.emailVerified?.toISOString() || null,
    };
  } catch (error) {
    console.log("Erorrr", error);
    return null;
  }
}
