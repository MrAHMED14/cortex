import AddNewProduct from "@/components/dashboard/add-new-product"
import Title from "@/components/ui/title"
import { getSubcategories2 } from "@/lib/actions/product/action"

export default async function ProductCreateRoute() {
  const subcategories = await getSubcategories2({})
  return (
    <>
      <div className="py-24 space-y-5">
        <Title>Add new product</Title>

        <AddNewProduct
          subcategories={subcategories}
          className="mt-10 border border-neutral-200 rounded px-16 py-24 cursor-pointer"
        />
      </div>
    </>
  )
}
