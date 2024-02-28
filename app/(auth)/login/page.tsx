"use client";
import * as React from 'react';
import { Icons } from "@/components/Icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  AuthCredentialValidator,
  TAuthCredentialValidator,
} from "@/lib/validators/account-validators";
import { trpc } from "@/trpc/client";
import { toast } from "sonner";
import { ZodError } from "zod";
import { useRouter, useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const isSeller = searchParams.get("as") === "seller";

  const origin = searchParams.get("origin");

  const continueAsSeller = () => {
    router.push("?as=seller");
  };

  const continueAsBuyer = () => {
    router.replace("/login", undefined);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TAuthCredentialValidator>({
    resolver: zodResolver(AuthCredentialValidator),
  });
  const { mutate: signIn, isLoading } = trpc.auth.signIn.useMutation({
    onError: (error) => {
      if (error.data?.code === "UNAUTHORIZED") {
        toast.error("Invalid password or email");
      }
    },
    onSuccess: (success) => {
      toast.success("Sign In successfully");
      router.refresh();
      if (origin) {
        router.push(origin);
        return;
      }
      if (isSeller) {
        router.push("/sell");
        return;
      }
      router.push("/");
    },
  });

  const onSubmit = (data: TAuthCredentialValidator) => {
    const { password, email } = data;
    signIn({
      email,
      password,
    });
  };

  return (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm-w-[300px] lg:max-w-[500px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.logo className="h-20 w-20" />
            <h1 className="text-2xl font-bold">Sign in to your {isSeller ? "Seller":"Buyer"} account</h1>
            <Link
              className={buttonVariants({
                variant: "link",
                className: "gap-1.5",
              })}
              href="signup"
            >
              Don&apos;t have an  account? Sign-up
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-2">
                <div className="grid grid-gap-1 py-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    className={cn({
                      "focus-visible:ring-red-500": errors.email,
                    })}
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="your@example.com"
                  />
                  {errors?.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="grid grid-gap-1 py-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    className={cn({
                      "focus-visible:ring-red-500": errors.password,
                    })}
                    {...register("password")}
                    id="password"
                    placeholder="Password"
                    type="password"
                  />
                  {errors?.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <Button type="submit">Sign in</Button>
              </div>
            </form>
            <div className="relative">
              <div
                aria-hidden={true}
                className="absolute inset-0 flex items-center"
              >
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-ts uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  or
                </span>
              </div>
            </div>
            {isSeller ? (
              <Button onClick={continueAsBuyer} variant="secondary" disabled={isLoading}>Continue as Customer</Button>
            ) : (
              <Button onClick={continueAsSeller} variant="ghost" disabled={isLoading}>Contiune as Seller</Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
