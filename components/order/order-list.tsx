import { getUser } from "@/lib/actions/auth/action"
import { getCart } from "@/lib/actions/cart/lib"
import { redirect } from "next/navigation"
import EmptyCart from "../cart/empty-cart"
import MakeOrder from "./make-order"

export default async function OrderList() {
  const cart = await getCart()
  const user = await getUser()
  if (!user) redirect("/login")

  return (
    <>
      {cart && cart.size > 0 && (
        <>
          <MakeOrder
            cart={cart}
            userId={user.id}
            userEmail={user.email ? user.email : ""}
          />
        </>
      )}
      <EmptyCart size={cart?.size ?? 0} />
    </>
  )
}
