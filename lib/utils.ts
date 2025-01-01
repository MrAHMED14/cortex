import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

import ky from "ky"

// ================================================
// =============* Schema Validations *=============
// ================================================

const requiredString = z.string().trim().min(1, "Required")

export const signUpSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

export const loginSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

export const orderFormSchema = z.object({
  street: requiredString,
  cardName: requiredString,
  cvv: z.string().length(3, "Must be 3 digits"),
  expiryDate: requiredString.refine((value) => {
    const [month, year] = value.split("/").map(Number)
    return (
      value.split("/").length === 2 && month >= 1 && month <= 12 && year > 24
    )
  }, "Invalid date format"),
  cardNumber: requiredString,
  wilaya: requiredString,
  commune: requiredString,
  firstName: requiredString,
  lastName: requiredString,
  phoneNumber: z
    .string()
    .length(10, "Must be 10 digits")
    .refine(
      (value) => /^(05|06|07)/.test(value),
      "Must start with 05, 06, or 07"
    ),
})

export type OrderFormValues = z.infer<typeof orderFormSchema>
export type SignUpValues = z.infer<typeof signUpSchema>
export type LoginValues = z.infer<typeof loginSchema>

// ================================================

// ================================================
// ===============* Utils Functions *==============
// ================================================

export function slugify(input: string): string {
  // handle '+', '-' and other symbols cases.
  return input
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, "")
}

export function capitalize2(str: string) {
  return str
    .split("-") // Split the string by hyphens
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" ") // Join words with a space
}

export function capitalize(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function formatFloatNumber(num: number) {
  // Ensure num is a number
  if (typeof num !== "number" || isNaN(num)) {
    throw new Error("Input must be a valid number")
  }

  // Round to two decimal places and convert back to number
  return parseFloat(num.toFixed(2))
}

export function formatUSD(number: number) {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  }).format(number)
  // .replace(/,/g, " ")

  return formattedNumber
}

export function formatDZD(number: number) {
  const formattedNumber = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "DZD",
    minimumFractionDigits: 0,
  })
    .format(number)
    .replace(/,/g, " ")

  const formattedDZD = formattedNumber.replace("DZD", "") + " DA"

  return formattedDZD
}

export function formatteDate(date: Date) {
  if (!date) throw new Error("Date not found.")

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  return formattedDate
}

// ================================================

// ================================================
// ===============* Other Stuff *==============
// ================================================

const kyInstance = ky.create({
  parseJson: (text) =>
    JSON.parse(text, (key, value) => {
      if (key.endsWith("At")) return new Date(value)
      return value
    }),
})

export default kyInstance

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ================================================
