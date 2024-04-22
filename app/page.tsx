import { Banner } from "@/components/Banner/Index";
import Prestasi from "@/components/Prestasi";
import images from "@/data/dataimage.json";
import {
  SkeletonFour,
  SkeletonOne,
  SkeletonThree,
  SkeletonTwo,
} from "@/components/data";
import History from "@/components/history";
import { Footer } from "@/components/navbar/Footer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll-2";
import dataImages from "@/data/dataimage.json";
import { LayoutGridDemo, cards } from "@/components/route/Api";

export default async function Home() {
  console.log(dataImages);
  // const data = Testing();
  // console.log(data);

  return (
    <main className="no-scrollbar ">
      <section
        id="section"
        className="h-screen py-6 sm:py-24 max-h-[1120px] sm:max-h-screen relative w-full justify-center flex items-center">
        <div id="container" className="w-full h-full sm:px-24 px-6">
          <Image
            src="https://news.ums.ac.id/id/wp-content/uploads/sites/2/2023/10/Tapak-Suci-UMS-Kantongi-3-Perak-dan-1-Perunggu-di-Kejurnas-Semar-V-1536x864.jpg"
            alt="Hero Background"
            fill
            className="w-full h-full object-cover absolute brightness-50"
          />
          <div className="flex sm:flex-row flex-col-reverse items-start sm:items-end gap-3 xl:gap-0 sm:justify-between w-full relative bottom-0 h-full">
            <button className="pt-1 w-[100px] px-2  border-2 font-bebas  text-white hover:bg-white hover:text-black text-lg duration-300 border-white">
              Explore
            </button>
            <div className="flex flex-col ">
              <h2 className="font-bold text-3xl leading-none font-bebas text-red-600 ">
                Tapak Suci Putra Muhammadiyah
              </h2>
              <h4 className="text-white text-md  text-start  md:w-full lg:text-end uppercase">
                perguruan pencaksilat indonesia tapak suci putra Muhammadiyah
              </h4>
            </div>
          </div>
        </div>
      </section>
      <section
        id="section"
        className="py-24 h-f sm:h-[50vh] sm:max-h-screen relative w-full justify-center flex items-center">
        <div id="container" className="px-6 sm:px-24 w-full h-full">
          <div className="flex lg:flex-row gap-4 lg:gap-64 flex-col h-full justify-center lg:items-center">
            <div className="flex flex-col h-full sm:justify-center  lg:gap-12 lg:text-center">
              <h1 className="uppercase text-2xl font-bold sm:text-center">
                History
              </h1>
            </div>
            <div className="flex flex-col items-start space-y-8 lg:w-3/4">
              <p className="text-base text-black ">
                Moh. Barie lrsjad akhirnya mengeluarkan gagasan agar semua
                aliran Banjaran yang sudah berkembang dan terpecah-pecah dalam
                berbagai perguruan, disatukan kembali ke wadah tunggal. Pendekar
                Besar M. Wahib merestui berdirinya satu Perguruan yang
                menyatukan seluruh perguruan di Kauman. Restu diberikan dengan
                pengertian Perguruan nanti adalah kelanjutan dari Perguruan
                Kauman yang didirikan pada tahun 1925 yang berkedudukan di
                Kauman. Pendekar M. Wahib mengutus 3 orang muridnya. dan M.
                Syamsuddin mengirim 2 orang muridnya untuk bergabung.
              </p>
              <Link href={"https://tapaksuci.umm.ac.id/id/pages/sejarah.html"}>
                <button className="border-2 hover:bg-black hover:text-white duration-300 font-bebas pt-1 border-black px-6 font-bold py-1">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="section"
        className="overflow-hidden h-fit relative w-full justify-center flex items-center">
        <div id="container" className="px-6 sm:px-24 w-full h-fit">
          <h3 className="uppercase text-[100vh] leading-none font-bebas tracking-tighter">
            tapaksuci
          </h3>
          <div className="absolute top-[25%] aspect-square w-[88vw] sm:w-[30vw] left-0">
            <Image
              src="https://www.umm.ac.id/files/image/Kejurnas.jpg"
              alt="../"
              width={1000}
              height={1000}
              className="h-full object-cover w-full"
            />
          </div>
        </div>
      </section>

      <section
        id="section"
        className=" h-fit sm:h-screen py-6 sm:py-24 relative w-full justify-center flex items-center">
        <div id="container" className="w-full relative h-full px-6 sm:px-24">
          <div className="w-full relative mb-6 sm:mb-0">
            <button
              className="sm:absolute z-10 top-0 left-0 border-2 border-black  
            px-3 py-1 hover:bg-black hover:text-white 
            duration-300 font-bebas">
              See More
            </button>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <Marquee className="w-full h-full">
              <Image
                src="https://news.ums.ac.id/id/wp-content/uploads/sites/2/2023/10/Tapak-Suci-UMS-Kantongi-3-Perak-dan-1-Perunggu-di-Kejurnas-Semar-V-1536x864.jpg"
                alt="../"
                width={320}
                height={320}
                className="h-3/4 w-full sm:w-1/4 sm:right-[33%] top-0 sm:absolute object-cover"
              />
              <Image
                src="https://news.ums.ac.id/id/wp-content/uploads/sites/2/2023/10/Tapak-Suci-UMS-Kantongi-3-Perak-dan-1-Perunggu-di-Kejurnas-Semar-V-1536x864.jpg"
                alt="../"
                width={320}
                height={320}
                className="h-3/4 w-full sm:w-1/4 sm:left-0  bottom-0 sm:absolute object-cover"
              />
              <Image
                src="https://news.ums.ac.id/id/wp-content/uploads/sites/2/2023/10/Tapak-Suci-UMS-Kantongi-3-Perak-dan-1-Perunggu-di-Kejurnas-Semar-V-1536x864.jpg"
                alt="../"
                width={320}
                height={320}
                className="h-3/4 w-full sm:w-1/4 sm:right-0 bottom-0  sm:absolute object-cover"
              />
            </Marquee>
          </div>
        </div>
      </section>
      <section
        id="section"
        className="h-screen py-6 sm:py-24  w-full  justify-center flex items-center">
        <div id="container" className="px-6 sm:px-24 w-full h-full ">
          <div className="flex  justify-center items-center">
            <h3 className="text-5xl font-bold font-bebas ">Prestasi</h3>
          </div>
          <div className="h-screen py-20 w-full relative">
            <ParallaxScrollSecond cards={cards} />
          </div>
        </div>
      </section>
    </main>
  );
}
