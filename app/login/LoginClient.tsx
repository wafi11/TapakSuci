"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { cn } from "@/utils/cn";
import { IconBrandGoogle } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "@/components/ui/use-toast";
import { BottomGradient, LabelInputContainer } from "@/utils";

const LoginClient = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    console.log(data);
    signIn("credentials", {
      ...data,
      redirect: false,
      callbackUrl: "/profile",
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        router.push("/profile");
      }

      if (!callback?.error) {
        console.log("eror");
      }
    });
  };
  return (
    <div className="pt-24">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4  px-8   bg-gray-700">
        <h2 className="font-bold text-xl text-neutral-200">Login Form</h2>
        <form className="mt-8 mb-2" onSubmit={handleSubmit(onSubmit)}>
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
              className="bg-gray-900 text-white"
              {...register("password")}
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
          <button
            className=" relative group/btn flex space-x-2 items-center 
            justify-start p-4 w-full text-black rounded-md h-10 font-medium  bg-black "
            onClick={() => signIn("google")}
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

export default LoginClient;
