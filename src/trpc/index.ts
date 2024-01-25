import { PublicProcedure, router } from "./trpc";

export const appRouter = router({
    anyAPIRoute: PublicProcedure.query(()=>{
        return 'hello'
    })
})

export type AppRouter = typeof appRouter