import React from "react";
import { ButtonsCard } from "../ui/ButtonsCard";
import Link from "next/link";
import Image from "next/image";

const History = () => {
  return (
    <div className=" py-10 mt-10 w-full min-h-[400px]">
      <div className="container flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
          <div className="flex flex-col gap-8 justify-center items-center relative">
            <h1
              className={`text-4xl lg:text-6xl font-bold text-red-500 tracking-widest text-center`}>
              History
            </h1>
            <p className="text-md text-left px-2 text-gray-200">
              Moh. Barie lrsjad akhirnya mengeluarkan gagasan agar semua aliran
              Banjaran yang sudah berkembang dan terpecah-pecah dalam berbagai
              perguruan, disatukan kembali ke wadah tunggal. Pendekar Besar M.
              Wahib merestui berdirinya satu Perguruan yang menyatukan seluruh
              perguruan di Kauman. Restu diberikan dengan pengertian Perguruan
              nanti adalah kelanjutan dari Perguruan Kauman yang didirikan pada
              tahun 1925 yang berkedudukan di Kauman. Pendekar M. Wahib mengutus
              3 orang muridnya. dan M. Syamsuddin mengirim 2 orang muridnya
              untuk bergabung.
            </p>
            <button
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border
             border-red-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
             bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none
              focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <Link
                href={"https://tapaksuci.umm.ac.id/id/pages/sejarah.html"}
                className="p-2  items-center justify-center text-center ">
                Read More
              </Link>
            </button>
          </div>
          <Image
            src="https://tapaksuci.or.id/upload/IMG_8252.JPG"
            alt="../"
            width={1000}
            height={1000}
            className="min-h-64 w-[80vw] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default History;
