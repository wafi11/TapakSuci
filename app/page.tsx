import { Banner } from "@/components/Banner/Index";
import Prestasi from "@/components/Prestasi";
import History from "@/components/history";
import { Footer } from "@/components/navbar/Footer";
import React from "react";

export default async function Home() {
  // const data = Testing();
  // console.log(data);
  return (
    <>
      <Banner />
      <History />
      <Prestasi />
      <Footer />
    </>
  );
}
