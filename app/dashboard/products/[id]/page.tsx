import { notFound } from "next/navigation"
import {
  getProductBySlug,
  getSubcategories2,
  getSubcategoryById,
} from "@/lib/actions/product/action"
import EditProduct from "@/components/dashboard/edit-product"
import Title from "@/components/ui/title"

export default async function EditRoute({
  params,
}: {
  params: { id: string }
}) {
  const data = await getProductBySlug(params.id)
  if (!data) {
    return notFound()
  }

  const subcategory = await getSubcategoryById(data.subcategoryId)
  const subcategories = await getSubcategories2({})

  return (
    <div className="space-y-5 py-24">
      <Title>Edit Product</Title>
      <EditProduct
        product={data}
        subcategory={subcategory?.name}
        subcategories={subcategories}
        className="mt-10 border border-neutral-200 rounded px-16 py-24 cursor-pointer"
      />
    </div>
  )
}
