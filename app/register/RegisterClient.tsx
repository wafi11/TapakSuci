"use client";
import { Form } from "@/components/Form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/utils/cn";
import { IconBrandGoogle } from "@tabler/icons-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

const RegisterClient = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
    axios
      .post("api/register", data)
      .then(() => {
        router.push("/login");
      })
      .catch((erorr) => {
        console.log("something went wrong");
        console.log(erorr);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className="pt-24">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4  px-8   bg-gray-700">
        <h2 className="font-bold text-xl text-neutral-200 text-center">
          Register form
        </h2>
        <form className="py-4" onSubmit={handleSubmit(onSubmit)}>
          <LabelInputContainer className="mb-4">
            <Label
              htmlFor="username"
              className={`  ${
                errors["Username"] ? "text-black-500" : "text-zinc-400"
              }`}>
              Username
            </Label>
            <Input
              id="name"
              placeholder="username"
              type="text"
              className="bg-gray-900 text-gray-200 text-gray-200"
              {...register("name")}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4 ">
            <Label
              htmlFor="email"
              className={`  ${
                errors["email"] ? "text-black-500" : "text-zinc-400"
              }`}>
              Email Address
            </Label>
            <Input
              id="email"
              placeholder="email"
              type="email"
              className="bg-gray-900 text-gray-200"
              {...register("email")}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label
              htmlFor="role"
              className={`  ${
                errors["role"] ? "text-black-500" : "text-zinc-400"
              }`}>
              Role
            </Label>
            <Input
              id="role"
              placeholder="role"
              type="text"
              className="bg-gray-900 text-gray-200"
              {...register("role")}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label
              htmlFor="text"
              className={`  ${
                errors["password"] ? "text-black-500" : "text-zinc-400"
              }`}>
              Password
            </Label>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              className="bg-gray-900 text-gray-200"
              {...register("password")}
            />
          </LabelInputContainer>
          <button
            className="bg-gradient-to-br relative group/btn  from-red-500
            to-red-700 block bg-zinc-800 w-full text-white 
            rounded-md h-10 font-medium 
            "
            //  shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--red-800)_inset]
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
          <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-4  h-[1px] w-full" />
          <button
            className=" relative group/btn flex space-x-2 items-center 
            justify-start p-4 w-full text-black rounded-md h-10 font-medium  bg-black "
            type="submit">
            <IconBrandGoogle className="h-4 w-4 text-neutral-300" />
            <span className="text-neutral-300 text-sm">Google</span>
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterClient;
