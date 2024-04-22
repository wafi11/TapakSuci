"use client";
import axios from "axios";
import { LayoutGrid } from "lucide-react";
import { useEffect } from "react";
import { ParallaxScrollSecond } from "../ui/parallax-scroll-2";
import Link from "next/link";

export const TestApi = () => {
  useEffect(() => {
    axios
      .get("https://spotify23.p.rapidapi.com/albums/", {
        params: {
          ids: "3IBcauSj5M2A6lTeffJzdv",
        },
        headers: {
          "X-RapidAPI-key":
            "a7da05f2b1mshd749f16c75ab70ep1560d4jsn46a07a2b9907",
          "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
        },
      })
      .then((res) => res.data)
      .then((res) => console.log(res));
  }, []);
  return <div></div>;
};

export function LayoutGridDemo() {
  return (
    <div className="h-screen py-20 w-full">
      <ParallaxScrollSecond cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <Link
        href={
          "https://www.umko.ac.id/2021/10/25/tak-banyak-diberitakan-alhamdulillah-tapak-suci-juara-umum-pencak-silat-pon-xx/"
        }
        className="uppercase text-xl text-white">
        JUARA UMUM PON XX di Papua
      </Link>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Pekan Olahraga Nasional (PON) XX di Papua berakhir Jumat 15 Oktober
        2021. Perjuangan para atlet Tapak Suci luar biasa, sehingga final
        perolehan medali untuk cabang olah raga pencak silat, atlet Tapak Suci
        berhasil memboyong 4 emas, 3 perak, dan 12 perunggu.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <Link
        href={
          "https://www.umko.ac.id/2021/10/25/tak-banyak-diberitakan-alhamdulillah-tapak-suci-juara-umum-pencak-silat-pon-xx/"
        }
        className="uppercase text-xl text-white">
        JUARA UMUM The 19th World Pencak Silat Championship 2022
      </Link>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Pada The 19th World Pencak Silat Championship 2022 di Malaysia yang
        berlangsung 25-31 Juli 2022, sumbangan medali yang diberikan oleh Atlet
        TSPM membawa Indonesia menjadi juara umum.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <Link
        href={
          "https://www.umko.ac.id/2021/10/25/tak-banyak-diberitakan-alhamdulillah-tapak-suci-juara-umum-pencak-silat-pon-xx/"
        }
        className="uppercase text-xl text-white">
        TAPAK SUCI SUKSES MENJADI PENYUMBANG EMAS TERBANYAK TIMANS PENCAK SILAT
        INDONESIA
      </Link>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Perhelatan Sea Games 2023 telah berakhir,Indonesia behasil finish di
        tempat ketiga pada Sea Games yang digelar di kamboja ini.Menurut
        informasi yang TIM PWMJATENG kontingen tapak suci,terdapat 4 atlet dan 3
        official,dengan perolehan 2 emas,2 perak.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-blue-900">Rivers are serene</p>
      <p className="font-normal text-base text-blue-900"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        A house by the river is a place of peace and tranquility. It&apos;s the
        perfect place to relax, unwind, and enjoy life.
      </p>
    </div>
  );
};

export const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "",
    thumbnail:
      "https://media.suara.com/pictures/653x366/2021/10/12/49363-iqbal-candra.webp",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "",
    thumbnail: "https://zonanews.id/wp-content/uploads/2022/08/IPSI-Kudus.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "",
    thumbnail:
      "https://akcdn.detik.net.id/visual/2023/05/10/iqbal-raih-emas-pencak-silat-nomor-tanding-class-f-2_169.jpeg?w=650",
  },
  {
    id: 4,
    content: <SkeletonTwo />,
    className: "",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    content: <SkeletonThree />,
    className: "",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 6,
    content: <SkeletonOne />,
    className: "",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    content: <SkeletonThree />,
    className: "",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    content: <SkeletonOne />,
    className: "",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 9,
    content: <SkeletonTwo />,
    className: "",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
