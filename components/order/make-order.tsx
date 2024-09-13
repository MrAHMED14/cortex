"use client"

import { ShoppingCart } from "@/lib/types/cart"
import {
  formatFloatNumber,
  formatUSD,
  orderFormSchema,
  OrderFormValues,
} from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTransition } from "react"
import { useForm } from "react-hook-form"
import { Button } from "../ui/button"
import OrderItem from "./order-item"
import { createOrder } from "@/lib/actions/order/action"
import { toast } from "sonner"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Loader2Icon } from "lucide-react"

interface MakeOrderProps {
  cart: ShoppingCart
  userId: string
  userEmail: string
}

export default function MakeOrder({ cart, userId, userEmail }: MakeOrderProps) {
  const [isPending, startTransition] = useTransition()

  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      street: "",
    },
  })

  function onSubmit({ street }: OrderFormValues) {
    const address = { street }
    startTransition(async () => {
      await createOrder({ order: cart, userId, address })
      form.reset()
      toast.success("You order was placed successfully", { duration: 3000 })
    })
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="lg:flex gap-6 mt-10"
      >
        {/* Forms */}
        <div className="w-full border border-gray-200 shadow-sm bg-muted dark:border-stone-700 h-fit py-6 px-5 rounded-lg">
          {/* Personal Details */}
          <div className="mb-5">
            <h2 className="text-xl font-bold">Personal Details</h2>
            <Label>
              email <span className="text-red-500">*</span>
            </Label>
            <Input
              disabled
              defaultValue={userEmail}
              className="dark:border-muted-foreground/60"
            />
            <div className="mt-2 flex flex-col sm:flex-row w-full items-center gap-2">
              <div className="w-full">
                <Label>
                  first name <span className="text-red-500">*</span>
                </Label>
                <Input
                  placeholder="First name"
                  className="dark:border-muted-foreground/60"
                />
              </div>
              <div className="w-full">
                <Label>
                  last name <span className="text-red-500">*</span>
                </Label>
                <Input
                  placeholder="Last name"
                  className="dark:border-muted-foreground/60"
                />
              </div>
            </div>
          </div>

          {/* Billing address */}
          <div className="my-5">
            <h2 className="text-xl font-bold">Billing address</h2>
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    address <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="dark:border-muted-foreground/60"
                      placeholder="Your address here"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Payment Method */}
          <div className="my-5">
            <h2 className="text-xl font-bold">Payment Method</h2>
            <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="credit-card"
                      aria-describedby="credit-card-text"
                      type="radio"
                      name="payment-method"
                      value=""
                      className="h-4 w-4 border-gray-300 bg-white text-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                      defaultChecked
                    />
                  </div>

                  <div className="ms-4 text-sm">
                    <label
                      htmlFor="credit-card"
                      className="font-medium leading-none text-gray-900 dark:text-white"
                    >
                      Credit Card
                    </label>
                    <p
                      id="credit-card-text"
                      className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                    >
                      Pay with your credit card
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="pay-on-delivery"
                      type="radio"
                      name="payment-method"
                      value=""
                      className="h-4 w-4 border-gray-300 bg-white text-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                    />
                  </div>

                  <div className="ms-4 text-sm">
                    <label
                      htmlFor="pay-on-delivery"
                      className="font-medium leading-none text-gray-900 dark:text-white"
                    >
                      Payment on deliver
                    </label>
                    <p
                      id="pay-on-delivery-text"
                      className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                    >
                      +$15 payment processing fee
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 ps-4 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      id="paypal-2"
                      type="radio"
                      name="payment-method"
                      value=""
                      className="h-4 w-4 border-gray-300 bg-white text-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                    />
                  </div>

                  <div className="ms-4 text-sm">
                    <label
                      htmlFor="paypal-2"
                      className="font-medium leading-none text-gray-900 dark:text-white"
                    >
                      Paypal account
                    </label>
                    <p
                      id="paypal-text"
                      className="mt-1 text-xs font-normal text-gray-500 dark:text-gray-400"
                    >
                      Connect to your account
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Details */}
          <div className="my-5">
            <h2 className="text-xl font-bold">Shipping Details</h2>
          </div>
        </div>

        {/* Order Items & Summary */}
        <div className="w-full flex-col mt-6 lg:mt-0">
          <div className="space-y-6">
            {cart.items.map((item) => (
              <OrderItem key={item.id} cartItem={item} />
            ))}
          </div>

          {/* Order summary */}
          <div className="mx-auto mt-6 lg:max-w-4xl flex-1 space-y-6 w-full">
            <div className="space-y-4 rounded-lg border border-gray-200 p-4 shadow-sm bg-muted dark:border-stone-700 dark:bg-muted sm:p-6">
              <p className="text-xl font-semibold text-gray-900 dark:text-white">
                Order summary
              </p>

              <div className="space-y-4">
                <div className="space-y-2">
                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-muted-foreground dark:text-muted-foreground">
                      Original price
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      {formatUSD(formatFloatNumber(cart.subtotal))}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-muted-foreground dark:text-muted-foreground">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-600">
                      -{formatUSD(formatFloatNumber(0))}
                    </dd>
                  </dl>
                </div>

                <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                  <dt className="text-base font-bold text-gray-900 dark:text-white">
                    Total
                  </dt>
                  <dd className="text-base font-bold text-gray-900 dark:text-white">
                    {formatUSD(formatFloatNumber(cart.subtotal))}
                  </dd>
                </dl>
              </div>

              <Button
                type="submit"
                disabled={isPending}
                className="flex w-full items-center gap-2 justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Place order
                {isPending && <Loader2Icon className="size-3 animate-spin" />}
              </Button>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-muted-foreground dark:text-muted-foreground">
                  By placing your order, you agree to our company{" "}
                  <span className="font-medium text-blue-500">
                    Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-blue-500">
                    Conditions of Use
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </Form>
  )
}
