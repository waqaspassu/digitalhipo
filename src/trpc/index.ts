import { z } from "zod";
import { PublicProcedure, router } from "./trpc";
import { authRouter } from "./auth-route";
import { QueryValidator } from "../lib/validators/query-validator";
import { getPayloadClient } from "../get-payload";

export const appRouter = router({
  auth: authRouter,
  getInfiniteProducts: PublicProcedure.input(
    z.object({
      limit: z.number().min(1).max(100),
      cursor: z.number().nullish(),
      query: QueryValidator,
    })
  ).query(async ({ input }) => {
    const { query, cursor } = input;
    const { sort, limit, ...queryOptions } = query;
    const payload = await getPayloadClient();
    const parsedQueryOpts: Record<string, any> = {};
    Object.entries(queryOptions).forEach(([key, value]) => {
      parsedQueryOpts[key] = {
        equals: value,
      };
    });
    const page = cursor || 1;
    const { docs:items , hasNextPage, nextPage } = await payload.find({
      collection: "products",
      where: {
        approvedForSale: {
          equals: "approved",
        },
        ...parsedQueryOpts,
      },
      sort,
      depth: 1,
      limit,
      page,
    });
    return{
      items,
      nextPage: hasNextPage ? nextPage : null
    }
  }),
  
});

export type AppRouter = typeof appRouter;
