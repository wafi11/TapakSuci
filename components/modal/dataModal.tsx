// import getKejuaraan, { KejuaraanProps } from "@/app/actions/getKejuaraan";
// import { Calender } from "@/utils";
// import React from "react";

import getKejuaraan from "@/app/actions/getKejuaraan";
import { SafeKejuaraan, SafeUser } from "../types/next-auth";
import React from "react";

// interface Iparams {
//   disabled : boolean,
//   disabledDate : Date[],
//   onChangeDate : (value : Range) => void
//   onSubmit : () => void
//   dateRange : Range
// }

//  const DataModal : React.FC<Iparams> =  ({
//   dateRange,
//     disabled,
//     disabledDate,
//     onChangeDate,
//     onSubmit
// }) => {
//   return(
//     <Calender
//     value={dateRange}
//     disabledDates={disabledDate}
//     onChange={(value) => onChangeDate(value.selection)}
// />
//   )
// };

// export default DataModal

interface dataModalProps {
  userId: string;
}
export const DataModal = async ({ userId }: { userId: dataModalProps }) => {
  const getKejuaraans = await getKejuaraan(userId);
  console.log(getKejuaraans);
  return <div></div>;
};
