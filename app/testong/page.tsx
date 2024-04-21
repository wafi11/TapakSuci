import Modal from "@/components/modal";
// import { DataModal } from "@/components/modal/dataModal";
import React from "react";
import getKejuaraan from "../actions/getKejuaraan";
import getCurrentUser from "../actions/getCurrenUser";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import getKejuaraanId from "../actions/getKejuaraanById";
import { DataModal } from "@/components/modal/dataModal";
import { SafeKejuaraan } from "@/components/types/next-auth";

interface Iparams {
  userId?: string;
}
// { params }: { params: Iparams }
const Testing = async ({ params }: { params: Iparams }) => {
  const kejuaraans = await getCurrentUser();
  // const currentUser = await getCurrentUser();
  // console.log(kejuaraans);
  return (
    <>
      <Modal />
      {/* <DataModal userId={params}/> */}
      {/* <DataModal /> */}
    </>
  );
};

export default Testing;

// export async function getServerSideProps(context: any) {
//   const params: Iparams = context.params;
//   const kejuaraans = await getKejuaraan(params);
//   const currentUser = await getCurrentUser();

//   return {
//     props: {
//       kejuaraans,
//       currentUser,
//     },
//   };
// }
