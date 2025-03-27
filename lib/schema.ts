import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(2, {
    message: "Required",
  }),
  email: z.string().min(2, {
    message: "Required",
  }),
  subject: z.string().min(2, {
    message: "Required",
  }),
  message: z.string().min(16, {
    message: "Required",
  }),
});

export type FormSchema = z.infer<typeof formSchema>;
