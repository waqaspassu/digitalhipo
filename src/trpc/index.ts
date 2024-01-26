import { z } from "zod";
import { PublicProcedure, router } from "./trpc";

export const appRouter = router({
  greeting: PublicProcedure.query(() => "hello world"),
});

export type AppRouter = typeof appRouter;
