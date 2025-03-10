import { z } from "zod";
export const paymentSchema = z.object({
  email: z.string().email({ message: "Please enter valid email address" }),
  firstName: z
    .string()
    .min(3, { message: "First name must be 3 character long" })
    .regex(/^[A-Za-z\s]+$/, {
      message: "First name must only contain alphabets and spaces",
    }),
  lastName: z
    .string()
    .min(3, { message: "Last name must be 3 character long" })
    .regex(/^[A-Za-z\s]+$/, {
      message: "Last name must only contain alphabets and spaces",
    }),
  company: z.string().optional(),
  address: z.string().min(2, { message: "Please enter your address" }),
  appartment: z.string().optional(),
  city: z.string().min(2, { message: "Please enter your city " }),
  postalCode: z.string().min(2, { message: "Please enter your postal code " }),
  cardNumber: z
    .string()
    .length(16, { message: "Card number must be exactly 16 digits" })
    .regex(/^\d{16}$/, { message: "Card number must contain only digits" }),
  nameOnCard: z
    .string()
    .min(3, { message: "Card name must be 3 character long" })
    .regex(/^[A-Za-z\s]+$/, {
      message: "Card name must only contain alphabets and spaces",
    }),

  expiryDate: z.string().min(2, {
    message: "Expiration date must be in MM/YY format",
  }),

  amountPaid: z.string().min(1, {
    message: "amount must be required",
  }),
  securityCode: z
    .string()
    .length(3, { message: "Security code must be exactly 3 digits" })
    .regex(/^\d{3}$/, { message: "Security code must contain only digits" }),
});
export type PaymentSchema = z.infer<typeof paymentSchema>;
