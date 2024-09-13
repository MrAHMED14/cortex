import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

import ky from "ky"

// ================================================
// =============* Schema Validations *=============
// ================================================

const requiredString = z.string().trim().min(1, "Required")

export const signUpSchema = z.object({
  email: requiredString.email("Invalid email address"),
  username: requiredString.regex(
    /^[a-zA-Z0-9_-]+$/,
    "Only letters, numbers, - and _ allowed"
  ),
  password: requiredString.min(8, "Must be at least 8 characters"),
})

export const loginSchema = z.object({
  username: requiredString,
  password: requiredString,
})

export const orderFormSchema = z.object({
  street: requiredString,
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
