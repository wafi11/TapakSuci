"use client";
// import React, { useState } from "react";
// import profile from "@/public/TAPAK SUCI.png";
// import Image from "next/image";
// import { usePathname, useRouter } from "next/navigation";
// import Link from "next/link";
// import { cn } from "@/utils/cn";
// import { SafeUser } from "../types/next-auth";
// import { signOut } from "next-auth/react";
// import { motion } from "framer-motion";

// interface NavbarProps {
//   user?: SafeUser | null;
// }

// const dataMenu = [
//   {
//     id: 1,
//     tiitle: "Home",
//     path: "/",
//   },
//   {
//     id: 2,
//     tiitle: "Profile",
//     path: "/profile",
//   },
//   {
//     id: 3,
//     tiitle: "Contact",
//     path: "/contact ",
//   },
// ];

// const Navbar: React.FC<NavbarProps> = ({ user }) => {
//   const [color, setColor] = useState(false);

//   const changeColor = () => {
//     if (window.scrollY >= 90) {
//       setColor(true);
//     } else {
//       setColor(false);
//     }
//   };

//   window.addEventListener("scroll", changeColor);
//   const path = usePathname();
//   const router = useRouter();

//   return (
//     <div
//       className={`${color ? "bg-black" : ""}
//     flex items-center justify-between text-color-primary fixed z-10 w-full `}>
//       <div className="container flex justify-between items-center">
//         <div className="flex justify-center items-center p-2 lg:p-4">
//           <Image
//             src={profile}
//             alt="../"
//             width={50}
//             height={50}
//             className="object-cover w-30 h-30"
//           />
//           <h1
//             className="text-red-500 font-bold text-xl
//           md:text-2xl  px-2 lg:px-4 cursor-pointer"
//             onClick={() => router.push("/")}>
//             Tapak Suci
//             <br />
//             Putra Muhammadiyah
//           </h1>
//         </div>
//         {user ? (
//           <ul className="text-white gap-8 px-10 cursor-pointer hidden md:flex">
//             {dataMenu.map((item) => {
//               return (
//                 <Link
//                   key={item.id}
//                   className={`
//                   ${
//                     path === item.path
//                       ? "bg-red-700 text-white"
//                       : "text-red-700"
//                   } hover:translate-y-4 duration-200 p-3 rounded-md`}
//                   href={item.path}>
//                   <span className="text-sm font-medium rounded-md">
//                     {item.tiitle}
//                   </span>
//                 </Link>
//               );
//             })}
//             <button
//               onClick={() => signOut()}
//               className="bg-red-700 px-4 py-3 text-white">
//               Logout
//             </button>
//           </ul>
//         ) : null}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import Headerdata from "@/data/navbar.json";
import profile from "@/public/TAPAK SUCI.png";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";

const Navbar = () => {
  const [showeMenu, setShoweMenu] = useState(false);
  const handleMenu = useCallback(() => {
    setShoweMenu((prev) => !prev);
  }, []);
  return (
    <header className="flex justify-between items-center px-6 fixed z-10 w-full ">
      <div className="flex justify-between w-full items-center  py-3 ">
        <Link href="/" className="font-bebas text-white text-xl tracking-wide">
          Tapak Suci
          {/* <span>putra Muhammadiyah</span> */}
        </Link>
        <ul
          className={`flex flex-col duration-300 sm:flex-row absolute right-0
          bg-black w-screen h-screen sm:h-fit sm:w-fit sm:top-0 sm:relative
          sm:bg-transparent gap-6 justify-center items-center ${
            showeMenu ? "top-0" : "-top-[100vh]"
          }`}>
          {Headerdata.header.map((head, I) => (
            <React.Fragment key={I}>
              <li className="text-white text-sm uppercase">
                <Link href={head.href} className="text-white">
                  {head.label}
                </Link>
              </li>
            </React.Fragment>
          ))}
        </ul>
        <div>
          <button
            className="text-white sm:hidden z-20 relative"
            onClick={() => handleMenu()}>
            {showeMenu ? "Close" : "Menu"}
          </button>
          <button
            className="sm:block text-md tracking-widest font-bebas pt-1 hidden border-2 border-white 
            px-4 text-white hover:bg-white hover:text-black">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
