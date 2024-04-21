import getCurrentUser from "@/app/actions/getCurrenUser";
import { SafeKejuaraan, SafeUser } from "@/components/types/next-auth";
import React from "react";
import profile from "@/public/placeholder.jpg";
import Image from "next/image";
import { FaUserAlt } from "react-icons/fa";
import { MailIcon } from "lucide-react";

interface KetuaProps {
  currentUser?: SafeUser | null;
  kejuaraan?: SafeKejuaraan;
}

const Ketua: React.FC<KetuaProps> = ({ currentUser, kejuaraan }) => {
  console.log(currentUser);
  console.log({ kejuaraan });
  return (
    <div className="justify-center items-center ">
      <Image
        src="https://images.unsplash.com/photo-1472791108553-c9405341e398?q=80&w=1537&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="../"
        className="w-full object-cover h-[400px]"
        width={1000}
        height={1000}
      />
      <div className="absolute z-10 h-[100px] top-[350px] w-full bg-black">
        <div className="container ">
          <Image
            src={profile || currentUser?.image}
            alt="..."
            width={100}
            height={100}
            className="rounded-full min-h-30 w-[200px] fixed top-[200px] "
          />
          {/* <div className="flex justify-between items-center"> */}
          <div className="w-full h-full pt-10 flex flex-row group max-w-7xl mx-auto gap-4 relative">
            <div
              className=" text-yellow-500  
                 rounded-2xl h-[200px]
            justify-center items-center flex flex-col">
              <h1 className="text-left flex gap-3">
                <FaUserAlt />
                {currentUser?.name}
              </h1>
              <h1 className="text-center flex gap-3 px-2">
                <MailIcon />
                {currentUser?.email}
              </h1>
            </div>
            <div
              className=" text-yellow-500   w-[300px] rounded-2xl h-[200px]
            justify-center items-center flex flex-col">
              <button className="bg-red-700 p-3 rounded-2xl text-gray-200">
                Add Compentions
              </button>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Ketua;

{
  /* <div className="py-20 max-w-[1240px] flex justify-center items-center">
<div className="flex  bg-gray-800">
  <div className="container text-white ">
    <h1 className="text-4xl font-bold text-center tracking-wider">
      Profile
    </h1>
    <div className="container flex justify-center gap-10 place-content-center items-center p-5">
      <Image
        src={profile || currentUser?.image}
        alt="..."
        width={100}
        height={100}
        className="rounded-full min-h-30 w-[200px]"
      />
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl">Username : {currentUser?.name}</h1>
        <h1 className="text-2xl">Email: {currentUser?.email}</h1>
        <button></button>
        <button></button>
      </div>
    </div>
  </div>
</div>
</div> */
}
