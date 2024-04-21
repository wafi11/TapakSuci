import { User, Kejuaraan } from "@prisma/client";

import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      role: string | undefined | null;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/adapters" {
  interface AdapterUser {
    role?: string | undefined | null;
  }
}

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};

export type SafeKejuaraan = Omit<
  Kejuaraan,
  "createdAt" | "starteDate" | "endDate"
> & {
  createdAT: string;
  startDate: string;
  endDate: string;
};
