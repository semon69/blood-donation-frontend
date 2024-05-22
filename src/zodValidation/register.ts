import { z } from 'zod';

export const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  userName: z.string(),
  password: z.string(),
  confirmPassword: z.string(),
  image: z.string().url(),
  contactNo: z.string().regex(/^(\d{9}|\d{11})$/, "Contact number should be 9 or 11 digits"),
  bloodType: z.enum(['A_POSITIVE', 'A_NEGATIVE', 'B_POSITIVE', 'B_NEGATIVE', 'AB_POSITIVE', 'AB_NEGATIVE', 'O_POSITIVE', 'O_NEGATIVE']),
  availability: z.string(),
  location: z.string(),
  lastDonationDate: z.string().refine(date => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'], // Path of the error
});