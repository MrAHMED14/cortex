"use client"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useCallback, useEffect, useMemo, useState, useTransition } from "react"
import { Loader2, UploadIcon, X } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useDropzone } from "react-dropzone"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { z } from "zod"
import Select from "@/components/ui/select"
import Image from "next/image"
import { toast } from "sonner"

type SubCategory = { name: string }
type FileWithPreview = File & {
  preview: string
}

interface FileRejected {
  file: File
  errors: Error[]
}

const subCategories: SubCategory[] = [
  { name: "Smartphones" },
  { name: "Fiction" },
  { name: "Non-Fiction" },
  { name: "Laptops" },
  { name: "Clothing" },
]

const subCategoryNames = subCategories.map((subCategory) => subCategory.name)

const formSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
  price: z
    .number({ message: "Fill out the price" })
    .min(1, { message: "Min value is 1" })
    .positive({
      message: "price must be a positive number.",
    }),
  subCategory: z.enum(subCategoryNames as [string, ...string[]], {
    message: "subCategory must be one of the predefined categories.",
  }),
})

interface AddNewProductProps {
  className?: string
}
export default function AddNewProduct({ className }: AddNewProductProps) {
  const [files, setFiles] = useState<FileWithPreview[]>([])
  const [rejected, setRejected] = useState<FileRejected[]>([])
  const [isPending, startTransition] = useTransition()

  const onDrop = useCallback((acceptedFiles: File[], fileRejections: any[]) => {
    if (acceptedFiles?.length) {
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ])
    }

    if (fileRejections?.length) {
      setRejected((previousFiles) => [
        ...previousFiles,
        ...fileRejections.map(({ file, errors }) => ({ file, errors })),
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

  const removeAll = () => {
    setFiles([])
    setRejected([])
  }

  const removeRejected = (name: string) => {
    setRejected((files) => files.filter(({ file }) => file.name !== name))
  }

  const uploadToCloudinary = async (file: FileWithPreview) => {
    /*if (!file) return
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
      return data*/
  }

  const handleUpload = async () => {
    /*const uploads = files.map((file) => uploadToCloudinary(file))
  
      const results: Array<{
        secure_url: string
        version: number
        signature: string
        asset_id: string
        public_id: string
      }> = await Promise.all(uploads)*/

    const imgUrls: string[] = []

    /*for (const res of results) {
        const response = await saveToDatabase({
          public_id: res.public_id,
          version: res.version,
          signature: res.signature,
        })
  
        if (response.status === 400) {
          throw new Error(response.error)
        }
        imgUrls.push(res.secure_url)
      }*/

    return imgUrls
  }

  const memoizedSubCategories = useMemo(
    () =>
      subCategories.map((subCategory) => (
        <option key={subCategory.name} value={subCategory.name}>
          {subCategory.name}
        </option>
      )),
    []
  )

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      price: 0,
      subCategory: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!files || files.length === 0) {
      toast.error("Add at least 1 image")
      return
    }
    startTransition(async () => {
      const imgUrls = await handleUpload()
      if (!imgUrls || imgUrls.length === 0) {
        toast.error("Somthing went wrong, try again later")
        return
      }

      //await createProduct({ ...values, imgUrls })
      form.reset()
      removeAll()
      toast.success("Product Added!")
    })
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {/* Product Info */}
        <section>
          <h1 className="text-3xl font-bold">Product Info</h1>
          <div className="lg:w-[65%] md:w-1/2 mt-5 space-y-3">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    title <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter product title here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    price <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      onChange={(event) => field.onChange(+event.target.value)}
                      placeholder="Enter product price here"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subCategory"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    sub categories <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <option value="">sub categories</option>
                      {memoizedSubCategories}
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </section>

        {/* Upload Files */}
        <section className="mt-20">
          <h1 className="text-3xl font-bold">Upload Files</h1>
          <div
            {...getRootProps({
              className,
            })}
          >
            <input {...getInputProps({ name: "file" })} />
            <div className="flex flex-col items-center justify-center gap-4">
              <UploadIcon className="h-5 w-5" />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drag & drop files here, or click to select files</p>
              )}
            </div>
          </div>
        </section>

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
            {files.map((file) => (
              <li
                key={file.name}
                className="relative h-32 rounded-md shadow-lg"
              >
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
            className="rounded-md px-10 font-bold uppercase tracking-wider transition-colors hover:bg-purple-400 hover:text-white"
          >
            {isPending ? (
              <span className="flex items-center gap-3">
                Uploading... <Loader2 className="h-4 w-4 animate-spin" />
              </span>
            ) : (
              "Upload"
            )}
          </Button>
        </div>
      </form>
    </Form>
  )
}
