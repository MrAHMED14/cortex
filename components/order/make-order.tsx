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
import { useState } from "react"

import wilayas from "@/lib/data/wilayas.json"
import communes from "@/lib/data/communes.json"

import Select from "../ui/select"
import Link from "next/link"
import Image from "next/image"

interface MakeOrderProps {
  cart: ShoppingCart
  userId: string
  userEmail: string
}

export default function MakeOrder({ cart, userId, userEmail }: MakeOrderProps) {
  const [isPending, startTransition] = useTransition()
  const [selectedWilaya, setSelectedWilaya] = useState("")
  const [filteredCommunes, setFilteredCommunes] = useState<typeof communes>([])

  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      street: "",
      cardNumber: "",
      cvv: "",
      cardName: "",
      wilaya: "",
      commune: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
  })

  function onSubmit(values: OrderFormValues) {
    startTransition(async () => {
      if (values.cardNumber !== "4242 4242 4242 4242") {
        toast.error("Your card is invalid. Please use a valid card.")
        return
      }
      await createOrder({ order: cart, userId, address: values })
      form.reset()
      toast.success("You order was placed successfully", { duration: 3000 })
    })
  }
  const originalPrice = cart.items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  )

  const handleWilayaChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const wilayaName = e.target.value
    setSelectedWilaya(wilayaName)
    const wilaya = wilayas.find((w) => w.name === wilayaName)
    if (wilaya) {
      const filtered = communes.filter(
        (commune) => commune.wilaya_id === wilaya.code
      )
      setFilteredCommunes(filtered)
    } else {
      setFilteredCommunes([])
    }
    form.setValue("wilaya", wilayaName)
    form.setValue("commune", "")
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="lg:flex gap-6 mt-10"
      >
        {/* Forms */}
        <div className="w-full rounded-lg border border-neutral-200 bg-neutral-50 shadow-sm p-4 md:p-6">
          {/* Personal Details */}
          <div className="mb-5">
            <h2 className="text-xl font-bold">Personal Details</h2>
            <Label>
              email <span className="text-red-500">*</span>
            </Label>
            <Input disabled defaultValue={userEmail} />
            <div className="my-2 flex flex-col sm:flex-row w-full items-center gap-2">
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        first name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="First name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        last name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Last name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    phone number <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      maxLength={10}
                      {...field}
                      placeholder="Enter your phone number"
                      onKeyDown={(e) => {
                        if (
                          !/[0-9]/.test(e.key) &&
                          e.key !== "Backspace" &&
                          e.key !== "Delete"
                        ) {
                          e.preventDefault()
                        }
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Billing address */}
          <div className="my-5">
            <h2 className="text-xl font-bold">Billing address</h2>
            <FormField
              control={form.control}
              name="wilaya"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    wilaya <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select {...field} onChange={handleWilayaChange}>
                      <option value="">Select Wilaya</option>
                      {wilayas.map((wilaya) => (
                        <option key={wilaya.code} value={wilaya.name}>
                          {wilaya.name}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="my-2">
              <FormField
                control={form.control}
                name="commune"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      commune <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select {...field}>
                        <option value="">Select Commune</option>
                        {filteredCommunes.map((commune) => (
                          <option key={commune.id} value={commune.name}>
                            {commune.name}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    address <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Your address here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Payment Method */}
          <div className="my-5">
            <h2 className="text-xl font-bold">Payment Method</h2>

            <div className="w-full">
              <FormField
                control={form.control}
                name="cardNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Card number <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        maxLength={19}
                        pattern="\d{4} \d{4} \d{4} \d{4}"
                        placeholder="Card number"
                        {...field}
                        onKeyDown={(e) => {
                          if (
                            !/[0-9]/.test(e.key) &&
                            e.key !== "Backspace" &&
                            e.key !== "Delete"
                          ) {
                            e.preventDefault()
                          }
                        }}
                        onChange={(e) => {
                          const value = e.target.value
                            .replace(/\s?/g, "")
                            .replace(/(\d{4})/g, "$1 ")
                            .trim()
                          field.onChange(value)
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex w-full items-center gap-2 my-2">
                <div className="w-full flex items-center gap-2">
                  <div className="w-full space-y-2">
                    <Label id="mm">Month</Label>
                    <Select htmlFor="mm">
                      {Array(12)
                        .fill(12)
                        .map((_, index) => (
                          <option key={index} value="">
                            {index + 1}
                          </option>
                        ))}
                    </Select>
                  </div>

                  <div className="w-full space-y-2">
                    <Label id="yy">Year</Label>

                    <Select htmlFor="yy">
                      {Array.from({ length: 11 }, (_, index) => (
                        <option key={index} value="">
                          {25 + index}
                        </option>
                      ))}
                    </Select>
                  </div>
                </div>
                <div className="w-[70%] sm:w-full">
                  <FormField
                    control={form.control}
                    name="cvv"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          CVV <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            maxLength={3}
                            pattern="\d{3}"
                            placeholder="Security Code"
                            {...field}
                            onKeyDown={(e) => {
                              if (
                                !/[0-9]/.test(e.key) &&
                                e.key !== "Backspace" &&
                                e.key !== "Delete"
                              ) {
                                e.preventDefault()
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="w-full">
                <FormField
                  control={form.control}
                  name="cardName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Name on the card <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm font-normal text-muted-foreground dark:text-muted-foreground">
                Your order will be shipped using{" "}
                <Link
                  href="https://yalidine.com/"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Yalidine express
                </Link>
                .
              </p>
            </div>
            <div className="w-full flex items-center justify-center gap-4 mt-4">
              <Image
                src="/stripe.svg"
                alt="stripe"
                width={80}
                height={80}
                className=""
              />
              <Image
                src="/visa.svg"
                alt="visa"
                width={80}
                height={80}
                className=""
              />
              <Image
                src="/mastercard.svg"
                alt="mastercard"
                width={60}
                height={60}
                className=""
              />
            </div>
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
            <div className="space-y-4 rounded-lg border border-neutral-200 bg-neutral-50 shadow-sm p-4 md:p-6">
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
                      {formatUSD(formatFloatNumber(originalPrice))}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4">
                    <dt className="text-base font-normal text-muted-foreground dark:text-muted-foreground">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-600">
                      -
                      {formatUSD(
                        formatFloatNumber(originalPrice - cart.subtotal)
                      )}
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
                className="flex w-full items-center gap-2 justify-center rounded-lg px-5 py-2.5 text-sm font-medium"
              >
                Place order
                {isPending && <Loader2Icon className="size-3 animate-spin" />}
              </Button>

              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-muted-foreground dark:text-muted-foreground">
                  By placing your order, you agree to our company{" "}
                  <span className="font-medium text-primary">
                    Privacy Policy
                  </span>{" "}
                  and{" "}
                  <span className="font-medium text-primary">
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
