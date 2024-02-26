import { router } from "./trpc";

export const PaymentRouter = router({
    createSession: privateProcedure
})