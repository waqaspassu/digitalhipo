import { z } from "zod";
import { privateProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { getPayloadClient } from "../get-payload";

export const PaymentRouter = router({
  createSession: privateProcedure
    .input(z.object({ productIds: z.array(z.string()) }))
    .mutation(async ({ ctx, input }) => {
      const { user } = ctx;
      const { productIds } = input;
      const payload = await getPayloadClient();
      const {docs:product} = await payload.find({
        collection: "products",
        where: {
          id: {
            in: productIds,
          },
        },
      });
    }),
});
