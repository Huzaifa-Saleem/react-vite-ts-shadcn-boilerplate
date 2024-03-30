import * as z from "zod";

// ---LOGIN_DATA_SCHEMA-----------------------------
export const LoginDataSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type LoginData = z.infer<typeof LoginDataSchema>;

// ---REGISTER_DATA_SCHEMA-----------------------------
export const RegisterDataSchema = z.object({
  firstName: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

export type RegisterData = z.infer<typeof RegisterDataSchema>;
