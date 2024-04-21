"use client";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";
import { motion } from "framer-motion";
import image3 from "@/public/TAPAK SUCI.png";
import Link from "next/link";

export const Banner = () => {
  const images = [
    "https://news.ums.ac.id/id/wp-content/uploads/sites/2/2023/10/Tapak-Suci-UMS-Kantongi-3-Perak-dan-1-Perunggu-di-Kejurnas-Semar-V-1536x864.jpg",
    "https://www.umm.ac.id/files/image/Kejurnas.jpg",
    "https://www.ngopibareng.id/images/imagecache/20190704072437tapak-suci-md.jpeg",
  ];
  return (
    <ImagesSlider className="h-[38rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="z-50 flex flex-col justify-center items-center gap-4 mt-10">
        <motion.div
          className="font-bold text-xl md:text-3xl text-center bg-clip-text 
        text-transparent bg-gradient-to-t from-yellow-500 to-red-500 mt-5">
          <motion.p className="font-bold text-xl md:text-2xl text-center pt-5">
            Tapak Suci Putra Muhammdiyah
          </motion.p>
          <span className="font-bold text-xl md:text-2xl text-center text-gray-200">
            Dengan Iman Dan Akhlak Kami Menjadi kuat
            <br />
          </span>
          Tanpa Iman Dan Akhlak Kami Menjadi Lemah
        </motion.div>
        <button
          className="px-4 py-2 backdrop-blur-sm border bg-red-300/10 border-red-500/20
         text-white hover:text-red-500 mx-auto text-center rounded-full relative mt-4">
          <Link href="/register">Register →</Link>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-red-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
};
