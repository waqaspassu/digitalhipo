import Image from "next/image";
import VerifyEmailC from "@/components/VerifyEmail";

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}
const VerifyEmail = ({ searchParams }: PageProps) => {
  const token = searchParams?.token;
  const toEmail = searchParams?.to;

  console.log({searchParams})

  return (
    <div className="container relative flex pt-20 flex-col item-center justify-center px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px">
        {token && typeof token === "string" ? (
          <div className="grid gap-6 ">
            <VerifyEmailC token={token}/>
            <div className="flex h-full flex-col items-center justify-center space-y-1">
              <div className="relative mb-4 h-60 w-60 text-muted-foreground">
                <Image src="/hippo-email-sent.png" alt="verify email" fill />
              </div>
              <h3 className="font-semi-bold text-2xl"> Check your email</h3>
              {toEmail && typeof toEmail === "string" ? (
                <p className="text-center text-muted-foreground">
                  We &apos;ve sent a verification email{" "}
                  <span className="font-semibold">{toEmail}</span>
                </p>
              ) : (
                <p className="text-muted-foreground text-center">
                  We &apos;ve sent a Verification link to your email
                </p>
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
export default VerifyEmail;
