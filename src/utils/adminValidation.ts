import { z } from "zod";

export const schema = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .min(5, "Email need to be at least 5 characters")
    .max(100, "Email need to be under 100 characters"),
  password: z
  .string()
  .min(6, "Password must be at least 6 characters long")
  .max(90, "Password must be under 90 characters long")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[\W_]/, "Password must contain at least one special character"),
});

export type IFormInput = z.infer<typeof schema>;
