"use client"

import { useState, useTransition } from "react"
import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FcGoogle as Google } from "react-icons/fc"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { AuthLayout } from "@/components/auth/auth-layout"
import { loginSchema } from "@/lib/utils"
import { login } from "@/lib/actions/auth/login/action"

export default function LoginPage() {
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof loginSchema>) {
    startTransition(async () => {
      const { error } = await login(values)

      if (error) {
        setError("Invalid email or password. Please try again.")
      } else {
        setError(null)
      }
    })
  }

  return (
    <AuthLayout
      title="Welcome back"
      description="Enter your details to access your account"
      footerContent={
        <p className="text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-primary hover:underline"
          >
            Sign up
          </Link>
        </p>
      }
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle className="font-semibold">Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="cortex@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isPending} type="submit" className="w-full">
            {isPending ? "Signing in..." : "Sign in"}
          </Button>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <a
            href="/login/google"
            className={buttonVariants({
              variant: "outline",
              className:
                "w-full border-gray-300 text-gray-700 hover:bg-gray-50",
            })}
          >
            <Google className="mr-2 h-4 w-4" /> Google
          </a>

          <span className="text-xs text-gray-600">
            By signing in, you agree to our{" "}
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>{" "}
            and{" "}
            <Link href="/terms-of-service" className="hover:underline">
              Terms of Service
            </Link>
            .
          </span>
        </form>
      </Form>
    </AuthLayout>
  )
}
