"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { BottomGradient, Calender, LabelInputContainer } from "@/utils";
import { SafeKejuaraan, SafeUser } from "../types/next-auth";
import { eachDayOfInterval, isWeekend } from "date-fns";
import { DateRange, RangeKeyDict } from "react-date-range";
import ClientOnly from "@/utils/ClientOnly";
import getKejuaraan from "@/app/actions/getKejuaraan";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

interface ModalProps {
  // userId: SafeUser;
  onChangeDate: (value: Range) => void;
  // currentUser?: SafeUser | null;
}
// : React.FC<ModalProps>
const Modal = () => {
  const [steps, setSteps] = useState<number>(0);
  const [iseLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const disabledDates = useMemo(() => {
    let dates: Date[] = [];
    if (initialDateRange.startDate && initialDateRange.endDate) {
      const { startDate, endDate } = state[0];
      console.log({ startDate });
      const range = eachDayOfInterval({
        start: new Date(startDate),
        end: new Date(endDate),
      });

      // Filter out weekends
      dates = [...dates, ...range];
    }

    return dates;
  }, [state]);
  // const disabledDates = useMemo(() => {
  //   let dates: Date[] = [];

  //   reservations.forEach((reservation: any) => {
  //     const range = eachDayOfInterval({
  //       start: new Date(reservation.startDate),
  //       end: new Date(reservation.endDate)
  //     });

  //     dates = [...dates, ...range];
  //   });

  //   return dates;
  // }, [reservations]);
  const [dateRange, setDateRange] = useState(initialDateRange);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      nama: "",
      lokasi: "",
      category: "",
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    },
  });

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldDirty: true,
      shouldTouch: true,
      shouldValidate: true,
    });
    console.log(value);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("api/kejuaraan", data)
      .then(() => {
        console.log("Kejuaraan Success!");
        router.refresh();
        setDateRange(initialDateRange);
        reset();
      })
      .catch(() => {
        console.log("Something went wrong!");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // useEffect(() => {
  //   if(dateRange.startDate && dateRange.endDate){
  //     return dateRange.startDate
  //   }
  // },[])

  const handle = (value: any) => {
    setDateRange(value);
  };
  return (
    <div className="pt-24">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4  px-8   bg-gray-700">
        <h2 className="font-bold text-xl text-neutral-200">Kejuaraan form</h2>
        <form className="mt-8 mb-2" onSubmit={handleSubmit(onSubmit)}>
          <LabelInputContainer className="mb-4 ">
            <Label
              htmlFor="name"
              className={`  ${
                errors.name ? "text-black-500" : "text-zinc-400"
              }`}>
              Nama Kejuaraan
            </Label>
            <Input
              id="nama"
              placeholder="Nama kejuaraan"
              type="nama"
              className="bg-gray-900 text-gray-200"
              {...register("nama")}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label
              htmlFor="text"
              className={`  ${
                errors["password"] ? "text-black-500" : "text-zinc-400"
              }`}>
              Lokasi Kejuaraan
            </Label>
            <Input
              id="lokasi"
              placeholder="Lokasi Kejuaraan"
              type="text"
              className="bg-gray-900 text-white"
              {...register("lokasi")}
            />
          </LabelInputContainer>
          {/* <LabelInputContainer className="mb-4">
            <Label
              htmlFor="text"
              className={`  ${
                errors["waktu"] ? "text-black-500" : "text-zinc-400"
              }`}>
              Agenda Dimulai
            </Label>
            <Input
              id="startDate"
              // name="startDate"
              placeholder="Agenda Dimulai"
              type="date"
              className="bg-gray-900 text-white"
              {...register("startDate")}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label
              htmlFor="text"
              className={`  ${
                errors["waktu"] ? "text-black-500" : "text-zinc-400"
              }`}>
              Agenda Kejuaraan
            </Label>
            <Input
              id="endDate"
              placeholder="Agenda Diakhiri"
              type="date"
              className="bg-gray-900 text-white"
              {...register("endDate")}
            />
          </LabelInputContainer> */}
          <ClientOnly>
            <Calender
              value={dateRange}
              disabledDates={disabledDates}
              onChange={(value) => handle(value)}
            />
          </ClientOnly>

          {/* <DateRange
            date={new Date()}
            showDateDisplay={false}
            ranges={state}
            rangeColors={["#ffff"]}
            onChange={(item) => setState([!item.selection] as any)}
            minDate={new Date()}
            direction="vertical"
          /> */}
          <LabelInputContainer className="mb-4">
            <Label
              htmlFor="category"
              className={`  ${
                errors["password"] ? "text-black-500" : "text-zinc-400"
              }`}>
              Category Kejuaraan
            </Label>
            <Input
              id="category"
              placeholder="Category Kejuaraan"
              type="text"
              className="bg-gray-900 text-white"
              {...register("category")}
            />
          </LabelInputContainer>
          <button
            className="bg-gradient-to-br relative group/btn  from-red-500
            to-red-700 block bg-zinc-800 w-full text-white 
            rounded-md h-10 font-medium"
            type="submit"
            onClick={() => {
              toast({
                title: "Register Succes",
                description: "Register success",
              });
            }}>
            Submit &rarr;
            <BottomGradient />
          </button>
          <div className="bg-gradient-to-r from-transparent via-neutral-900 to-transparent my-4  h-[1px] w-full" />
        </form>
      </div>
    </div>
  );
};

export default Modal;
