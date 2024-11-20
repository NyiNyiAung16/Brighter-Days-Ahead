import { z } from "zod";

const registerSchema = z.object({
  username: z.string().trim().nonempty({ message: "Username is required." }),
  email: z.string().trim().email({ message: "Email is required." }),
  password: z
    .string()
    .trim()
    .min(7, { message: "Password must be at least 7 characters." }),
  role: z.string().trim().nonempty({ message: "Role is required." }),
});

const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty({ message: "Email is required." })
    .email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .trim()
    .nonempty({ message: "Password is required." })
    .min(7, { message: "Password must be at least 7 characters." }),
});

const feelingSchema = z.object({
  text: z.string().trim().nonempty({ message: "Text is required." }),
});

const goalSchema = z.object({
  body: z.string().trim().nonempty({ message: "Body is required." }),
  completed: z.boolean(),
});

const relaxationSchema = z.object({
  message: z
    .string()
    .trim()
    .nonempty({ message: "Message is required." })
    .max(200, { message: "Message must be less than 200 characters." }),
  videoUrl: z.string().trim().nonempty({ message: "Video url is required." }),
});

const commentSchema = z.object({
  body: z.string().trim().nonempty({ message: "Body is required." }),
});

export {
  registerSchema,
  loginSchema,
  feelingSchema,
  goalSchema,
  relaxationSchema,
  commentSchema,
};
