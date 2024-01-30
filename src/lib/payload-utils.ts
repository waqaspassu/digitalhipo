import { User } from "../payload-types";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { NextRequest } from "next/server";

export const getServerSideUser = async (
  cookies: NextRequest["cookies"] | ReadonlyRequestCookies
) => {
  const token = cookies.get("payload-token")?.value;

  const meRes = await fetch(
    `${process.env.Next_PUBLIC_SERVER_URL}/api/users/me`,
    {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },  
    }
  );

  const { user } = (await meRes.json()) as { user: User | null };
  return { user };
};
