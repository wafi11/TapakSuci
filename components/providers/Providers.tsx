// "use client";
// import { authOptions } from "@/pages/api/auth/[...nextauth]";
// import { getSession } from "next-auth/react";
// export const Testing = () => {
//   const data = async () => {
//     const session = await getSession({});
//     console.log(session?.user);

//     if (!session || !session.user || !session.user.role) {
//       return Response.json({ message: "Unauthorized" });
//     }

//     const user = session.user;

//     if (user.role === "ADMIN") {
//       // Authorized logic
//       Response.json({ message: "Authorized" });
//     } else {
//       // Unauthorized logic
//       Response.json({ message: "Forbidden" });
//     }
//   };
//   return data;
// };
