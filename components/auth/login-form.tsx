"use client"

import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import { loginSchema, LoginValues } from "@/lib/utils"
import { login } from "@/lib/actions/auth/login/action"
import LoadingButton from "../ui/loading-button"
import { useTransition } from "react"

interface LoginFormProps {}

export default function LoginForm({}: LoginFormProps) {
  const [isPending, startTransition] = useTransition()

  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  })
  async function onSubmit(values: LoginValues) {
    startTransition(async () => {
      const { error } = await login(values)

      if (error) {
        toast.error(error)
        return
      }
      toast.success("Welcome back!")
      form.reset()
    })
  }
  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  username <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Your username" {...field} />
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
                <FormLabel>
                  password <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="example: 123"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <LoadingButton
            loading={isPending}
            type="submit"
            className="w-full font-semibold"
          >
            Login
          </LoadingButton>
        </form>
      </Form>
    </div>
  )
}
