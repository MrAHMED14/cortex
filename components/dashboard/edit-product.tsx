"use client"

import { Product, Subcategory } from "@prisma/client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Select from "@/components/ui/select"
import { getSignature, saveToDatabase } from "@/lib/actions/cloudinary/action"
import { createProduct, updateProduct } from "@/lib/actions/product/action"
import { formatUSD, slugify } from "@/lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, UploadIcon, X } from "lucide-react"
import Image from "next/image"
import { useCallback, useEffect, useMemo, useState, useTransition } from "react"
import { useDropzone } from "react-dropzone"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { v4 as uuidv4 } from "uuid"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { Switch } from "../ui/switch"
import { Textarea } from "../ui/textarea"

interface EditProductProps {
  product: Product
  subcategory?: string
  className?: string
  subcategories: Subcategory[]
}

type SubCategory = { name: string }
type FileWithPreview = File & {
  preview: string
}

interface FileRejected {
  file: File
  errors: Error[]
}

export default function EditProduct({
  product: {
    id,
    title,
    price,
    description,
    img,
    stock,
    OrderThreshold,
    discountPrice,
    isPublish,
  },
  subcategory,
  className,
  subcategories,
}: EditProductProps) {
  const [isPending, startTransition] = useTransition()
  const [rejected, setRejected] = useState<FileRejected[]>([])
  const [files, setFiles] = useState<FileWithPreview[]>([])
  const [imgDB, setImgDB] = useState<string[]>(img)
  const router = useRouter()

  const subCategoryNames = subcategories.map((subCategory) => subCategory.name)

  const formSchema = z.object({
    title: z.string().min(2),
    price: z.number().min(1).positive(),

    discountPercentage: z.number().min(0).max(100).optional(),

    description: z.string().min(10),

    isPublish: z.boolean().default(isPublish),

    stock: z.number().min(0),
    seuil: z.number().min(0),

    subcategory: z.enum(subCategoryNames as [string, ...string[]], {
      message: "subCategory must be one of the predefined categories.",
    }),
  })

  const onDrop = useCallback((acceptedFiles: File[], fileRejections: any[]) => {
    setFiles((previousFiles) => {
      const existingFileNames = previousFiles.map((file) => file.name)
      const newAcceptedFiles = acceptedFiles.filter(
        (file) => !existingFileNames.includes(file.name)
      )
      const newRejectedFiles = acceptedFiles
        .filter((file) => existingFileNames.includes(file.name))
        .map((file) => ({
          file,
          errors: [
            {
              name: "DuplicateFileError",
              message: "File with the same name already exists",
            },
          ],
        }))

      if (newAcceptedFiles.length) {
        return [
          ...previousFiles,
          ...newAcceptedFiles.map((file) =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
          ),
        ]
      }

      if (newRejectedFiles.length) {
        setRejected((previousFiles) => [...previousFiles, ...newRejectedFiles])
      }

      return previousFiles
    })

    if (fileRejections?.length) {
      setRejected((previousFiles) => [
        ...previousFiles,
        ...fileRejections.map(({ file, errors }) => ({
          file,
          errors: errors.map((error: { name?: string; message: string }) => ({
            name: error.name || "UnknownError",
            message: error.message,
          })),
        })),
      ])
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxSize: 1024 * 1000,
    onDrop,
  })

  useEffect(() => {
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview))
  }, [files])

  const removeFile = (name: string) => {
    setFiles((files) => files.filter((file) => file.name !== name))
  }

  const removeDBFile = (name: string) => {
    setImgDB((imgDB) => imgDB.filter((file) => file !== name))
  }

  const removeAll = () => {
    setFiles([])
    setImgDB([])
    setRejected([])
  }

  const removeRejected = (name: string) => {
    setRejected((files) => files.filter(({ file }) => file.name !== name))
  }

  const uploadToCloudinary = async (file: FileWithPreview) => {
    if (!file) return

    const { signature, timestamp } = await getSignature()
    const formData = new FormData()
    formData.append("file", file)
    formData.append("upload_preset", "ml_default")
    formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!)
    formData.append("timestamp", timestamp.toString())
    formData.append("signature", signature)

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    )

    const data = await response.json()
    return data
  }

  const handleUpload = async () => {
    const uploads = files.map((file) => uploadToCloudinary(file))

    const results: Array<{
      secure_url: string
      version: number
      signature: string
      asset_id: string
      public_id: string
    }> = await Promise.all(uploads)

    const imgUrls: string[] = []

    for (const res of results) {
      const response = await saveToDatabase({
        public_id: res.public_id,
        version: res.version,
        signature: res.signature,
      })

      if (response.status === 400) {
        throw new Error(response.error)
      }
      imgUrls.push(res.secure_url)
    }

    return imgUrls
  }

  const memoizedSubCategories = useMemo(
    () =>
      subcategories.map((subCategory) => (
        <option key={subCategory.name} value={subCategory.name}>
          {subCategory.name}
        </option>
      )),
    [subcategories]
  )

  const [discountPercentage, setDiscountPercentage] = useState(0)
  const [priceChange, setPriceChange] = useState(price)

  const [discountPriceChange, setDiscountPriceChange] = useState(
    discountPrice ?? 0
  )

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title,
      price,
      stock,
      seuil: OrderThreshold,
      isPublish,
      description: description ?? "",
      subcategory,
      discountPercentage: discountPrice
        ? ((price - discountPrice) / price) * 100
        : 0,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (imgDB.length === 0 && files.length === 0) {
      toast.error("Add at least 1 image")
      return
    }

    startTransition(async () => {
      let imgUrls: string[] = []
      if (files.length !== 0) {
        imgUrls = await handleUpload()
        if (!imgUrls || imgUrls.length === 0) {
          toast.error("Somthing went wrong, try again later")
          return
        }
      }
      const mergedImgs = [...imgDB, ...imgUrls]

      const discountPrice =
        values.discountPercentage && values.discountPercentage !== 0
          ? values.price - (values.price * values.discountPercentage) / 100
          : null

      await updateProduct(
        {
          title: values.title,
          price: values.price,
          stock: values.stock,
          isPublish: values.isPublish,
          subCategory: values.subcategory,
          description: values.description,
          seuil: values.seuil,
          discountPrice,
          imgUrls: mergedImgs,
        },
        id
      )
      router.back()
      toast.success("Product Updated!")
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Product Info */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-5">
          <section className="w-full md:w-[70%]">
            <h1 className="text-2xl font-semibold">Product Info</h1>
            <div className="mt-5 space-y-3">
              {/* Title Input */}
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Title <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        aria-describedby="title-error"
                        disabled={isPending}
                        placeholder="Enter product title here"
                      />
                    </FormControl>
                    <FormMessage id="title-error" />
                  </FormItem>
                )}
              />

              {/* Description Input */}
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Description <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        disabled={isPending}
                        rows={5}
                        placeholder="Enter product description here"
                      />
                    </FormControl>
                    <FormMessage id="title-error" />
                  </FormItem>
                )}
              />

              {/* Price and Discount Inputs */}
              <div className="flex gap-2 justify-between w-full">
                <FormField
                  control={form.control}
                  name="price"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>
                        Price <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          aria-describedby="price-error"
                          disabled={isPending}
                          placeholder="Enter product price here"
                          onChange={(e) => {
                            const value = parseInt(e.target.value) || 0
                            field.onChange(value)
                            setPriceChange(value)
                            discountPercentage === 0
                              ? setDiscountPriceChange(value)
                              : setDiscountPriceChange(
                                  value - (value * discountPercentage) / 100
                                )
                          }}
                        />
                      </FormControl>
                      <FormMessage id="price-error" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="discountPercentage"
                  render={({ field }) => (
                    <FormItem className="w-1/2">
                      <FormLabel>Discount %</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          max="100"
                          aria-describedby="discount-error"
                          disabled={isPending}
                          placeholder="Discount percentage"
                          onChange={(e) => {
                            const value = parseInt(e.target.value) || 0
                            field.onChange(value)
                            setDiscountPercentage(value)
                            setDiscountPriceChange(
                              price - (price * value) / 100
                            )
                          }}
                        />
                      </FormControl>
                      <FormMessage id="discount-error" />
                    </FormItem>
                  )}
                />
              </div>

              <p className="mt-2 font-medium text-sm">
                Selling price {formatUSD(discountPriceChange)}
              </p>

              {/* Stock Input */}
              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock quantity</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        aria-describedby="stock-error"
                        disabled={isPending}
                        placeholder="Enter product stock"
                        onChange={(e) => {
                          const value = parseInt(e.target.value) || 0
                          field.onChange(value)
                        }}
                      />
                    </FormControl>
                    <FormMessage id="stock-error" />
                  </FormItem>
                )}
              />

              {/* Stock Input */}
              <FormField
                control={form.control}
                name="seuil"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Order threshold</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="number"
                        disabled={isPending}
                        placeholder="Enter order threshold"
                        onChange={(e) => {
                          const value = parseInt(e.target.value) || 0
                          field.onChange(value)
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Subcategory Select */}
              <FormField
                control={form.control}
                name="subcategory"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Sub-categories <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Select {...field} disabled={isPending}>
                        <option value="">Select a sub-category</option>
                        {memoizedSubCategories}
                      </Select>
                    </FormControl>
                    <FormMessage id="subcategory-error" />
                  </FormItem>
                )}
              />

              {/* isPublish Select */}
              <FormField
                control={form.control}
                name="isPublish"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Publish</FormLabel>
                      <FormDescription>
                        Display the products on the store.
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        disabled={isPending}
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage id="subcategory-error" />
                  </FormItem>
                )}
              />
            </div>
          </section>

          {/* Upload Files */}
          <section className="w-full md:w-[80%]">
            <h1 className="text-2xl font-semibold">Upload Files</h1>
            <div
              {...getRootProps({
                className,
              })}
            >
              <input {...getInputProps({ name: "file" })} />
              <div className="flex flex-col items-center justify-center gap-4">
                <UploadIcon className="h-5 w-5" />
                {isDragActive ? (
                  <p className="text-center">Drop the files here ...</p>
                ) : (
                  <p className="text-center">
                    Drag & drop files here, or click to select files
                  </p>
                )}
              </div>
            </div>
          </section>
        </div>

        {/* Files Preview */}
        <section className="mt-20">
          <div className="flex justify-between items-center gap-4">
            <h2 className="text-2xl font-semibold">Files Preview</h2>
            <Button
              type="button"
              onClick={removeAll}
              className="mt-1 rounded-md sm:px-3 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-rose-400 hover:text-white"
            >
              Remove all files
            </Button>
          </div>
          <h3 className="title mt-10 border-b pb-3 text-lg font-semibold text-stone-600">
            Accepted Files
          </h3>
          <ul className="mt-6 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {imgDB.map((imgUrl, index) => (
              <li key={index} className="relative h-32 rounded-md shadow-lg">
                <Image
                  src={imgUrl}
                  alt={`product image ${index}`}
                  width={100}
                  height={100}
                  className="h-full w-full rounded-md object-contain"
                />
                <button
                  type="button"
                  className="absolute -right-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full bg-rose-400 transition-colors"
                  onClick={() => removeDBFile(imgUrl)}
                >
                  <X className="h-5 w-5 transition-colors text-white" />
                </button>
                <p className="mt-2 text-[12px] font-medium text-stone-500">
                  {`product-image-${index + 1}`}
                </p>
              </li>
            ))}

            {files.map((file, index) => (
              <li key={index} className="relative h-32 rounded-md shadow-lg">
                <Image
                  src={file.preview}
                  alt={file.name}
                  width={100}
                  height={100}
                  onLoad={() => {
                    URL.revokeObjectURL(file.preview)
                  }}
                  className="h-full w-full rounded-md object-contain"
                />
                <button
                  type="button"
                  className="absolute -right-3 -top-3 flex h-7 w-7 items-center justify-center rounded-full bg-rose-400 transition-colors"
                  onClick={() => removeFile(file.name)}
                >
                  <X className="h-5 w-5 transition-colors text-white" />
                </button>
                <p className="mt-2 text-[12px] font-medium text-stone-500">
                  {file.name}
                </p>
              </li>
            ))}
          </ul>
          <h3 className="title mt-24 border-b pb-3 text-lg font-semibold text-stone-600">
            Rejected Files
          </h3>
          <ul className="mt-6 flex flex-col">
            {rejected.map(({ file, errors }) => (
              <li key={file.name} className="flex items-start justify-between">
                <div>
                  <p className="mt-2 text-sm font-medium text-stone-500">
                    {file.name}
                  </p>
                  <ul className="text-[12px] text-red-400">
                    {errors.map((error) => (
                      <li key={error.name}>{error.message}</li>
                    ))}
                  </ul>
                </div>
                <button
                  type="button"
                  className="mt-1 rounded-md border border-rose-400 px-3 py-1 text-[12px] font-bold uppercase tracking-wider text-stone-500 transition-colors hover:bg-rose-400 hover:text-white"
                  onClick={() => removeRejected(file.name)}
                >
                  remove
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Submit Button */}
        <div className="w-full mt-10 flex justify-center">
          <Button
            type="submit"
            disabled={isPending}
            className="rounded-md px-10 font-bold uppercase tracking-wider transition-colors hover:bg-purple-400 hover:text-white"
          >
            {isPending ? (
              <span className="flex items-center gap-3">
                saving <Loader2 className="h-4 w-4 animate-spin" />
              </span>
            ) : (
              "save"
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
