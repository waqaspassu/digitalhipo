import { AuthCredentialValidator } from "../lib/validators/account-validators";
import { PublicProcedure, router } from "./trpc";
import { getPayloadClient } from "../get-payload";
import { TRPCError } from "@trpc/server";

export const authRouter = router({
  createPayloadUser: PublicProcedure.input(AuthCredentialValidator).mutation(
    async ({ input }) => {
      const { email, password } = input;
      const payload = await getPayloadClient();

      // check if user is already exists

      const { docs: users } = await payload.find({
        collection: "users",
        where: {
          email: {
            equals: email,
          },
        },
      });

      if (users.length !== 0) {
        throw new TRPCError({
          code: "CONFLICT",
        });
      }
      await payload.create({
        collection:"users",
        data:{

        }
      })
    }
  ),
});
