import { z } from "zod";

export const FormData = z.object({
  username: z.string().min(3).nonempty("name is required"),
  email: z.string().email("invalid email"),
  phone: z
    .string()
    .min(7, { message: "enter at least 7 digits" })
    .max(9, { message: "enter a maximum 9 digits" })
    .refine(
      (val) => {
        const reg = /^[0-9]+$/;
        return reg.test(val);
      },
      { message: "invalid phone" }
    ),
  address: z.string().min(3).nonempty("address is required"),
  city: z.string().min(3).nonempty("city is required"),
  state: z.string().min(3).nonempty("state is required"),
  zip: z.string().min(3).nonempty("zip is required"),
});
export type TFormData = z.infer<typeof FormData>;
export type FirstForm = Pick<TFormData, "username" | "email" | "phone">;
export type SecondForm = Pick<TFormData, "address" | "city" | "state" | "zip">;
