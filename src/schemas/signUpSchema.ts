import { z } from "zod";

// Username validation
export const usernameValidation = z
  .string()
  .min(5, "Username must be at least 5 characters")
  .max(20, "Username must be no more than 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores");

// SignUp schema
export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password must be less than 100 characters")
});
