"use client";
import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { useRouter } from "next/navigation";

interface inputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  category: string;
  role?: string;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldValues;
  onSubmit: () => void;
}

export const Form: React.FC<inputProps> = ({
  id,
  label,
  category,
  disabled,
  type,
  role,
  onSubmit,
  register,
  required,
  errors,
}) => {
  const router = useRouter();
  const handleSubmit = () => {
    if (disabled) {
      return;
    }
    if (category === "register") {
      router.push("login");
    } else {
      router.push("/Home");
    }
    onSubmit();
  };
  return (
    <div className="pt-24">
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4  px-8  shadow-input bg-neutral-950">
        <h2 className="font-bold text-xl text-neutral-200">
          Welcome to Aceternity
        </h2>
        <p className=" text-sm max-w-sm mt-2 text-neutral-300">
          Login to aceternity if you can because we don&apos;t have a login flow
          yet
        </p>
        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label
              htmlFor={type}
              className={`  ${
                errors[id] ? "text-black-500" : "text-zinc-400"
              }`}>
              {label}
            </Label>
            <Input
              id={id}
              placeholder=""
              type={type}
              disabled={disabled}
              {...register(id, { required })}
            />
          </LabelInputContainer>
          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit">
            Submit &rarr;
            <BottomGradient />
          </button>
          <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent my-8 h-[1px] w-full" />
          <button
            className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-black "
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
