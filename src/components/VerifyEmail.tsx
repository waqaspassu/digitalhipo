"use client";
import * as React from "react";
import { trpc } from "@/trpc/client";
import { Loader2, XCircle } from "lucide-react";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Link from "next/link";

interface VerifyEmailProps {
  token: string;
}
const VerifyEmail = ({ token }: VerifyEmailProps) => {
  const { data, isLoading, isError } = trpc.auth.VerifyEmail.useQuery({
    token,
  });

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-2">
        <XCircle className="h-8 w-8 text-red-600" />
        <h3 className="font font-semibold text-xl">There was a problem</h3>
        <p className="text-muted-foreground text-sm">
          The token is not valid or might be expired. please try again
        </p>
      </div>
    );
  }
  if (data?.success) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative mb-4 h-60 w-60 text-muted-foreground">
          <Image src="/hippo-email-sent.png" alt="verify email" fill />
        </div>
        <h3 className="font-semibold text-2xl ">You&apos;re all set!</h3>
        <p className="text-muted-foreground text-center mt-1">Thank you for verifying your Email</p>
        <Link className={buttonVariants({className:"mt-4"})} href="/sign-in">Sign In</Link>
      </div>
    );
  }
  if(isLoading){
    <div className="flex flex-col items-center gap-2">
    <Loader2 className="h-8 w-8 text-zinc-300" />
    <h3 className="font font-semibold text-xl">Verifying....</h3>
    <p className="text-muted-foreground text-sm">
      this won&npos;nt take long
    </p>
  </div>
  }
};

export default VerifyEmail;
