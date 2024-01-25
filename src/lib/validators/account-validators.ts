import {z} from "zod"

const AuthCredentialValidator = z.object({
    email: z.string().email(),
    password: z.string().min(8,{message:"Passwod must be at least 8 characters"}),
  })

  export type TAuthCredentialValidator = z.infer<typeof AuthCredentialValidator>

  export  {AuthCredentialValidator}
