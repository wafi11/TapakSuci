import React from "react";
import profile from "@/public/TAPAK SUCI.png";
import Image from "next/image";
import getCurrentUser from "../actions/getCurrenUser";
import Ketua from "./ketua/Ketua";

const Profile = async () => {
  const currentUser = await getCurrentUser();

  if (currentUser?.role === "WASIT") {
    console.log("anda adalah wasit");
    return <div className="text-4xl font-bold text-gray-200">anda Wasit</div>;
  }
  if (currentUser?.role === "KETUA") {
    console.log("anda adalah ketua");
    return <Ketua currentUser={currentUser} />;
  }
  if (currentUser?.role === "USER") {
    console.log("anda adlaah user");
    return <div className="text-4xl font-bold text-gray-200">anda user</div>;
  }
};

export default Profile;
