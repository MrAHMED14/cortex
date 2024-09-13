"use client"

import React, {
  useCallback,
  useTransition,
  useMemo,
  useState,
  ChangeEvent,
} from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { MainCategory, Subcategory } from "@prisma/client"
import { Loader2 } from "lucide-react"
import { Button } from "../ui/button"
import { Input } from "../ui/input"

import Select from "../ui/select"
import { capitalize } from "@/lib/utils"

interface FilterOptionsProps {
  categories?: MainCategory[]
  subCategories?: Subcategory[]
}

export default function FilterOptions({
  categories,
  subCategories,
}: FilterOptionsProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isPending, startTransition] = useTransition()

  const [category, setCategory] = useState<string>(
    searchParams.get("category") || ""
  )
  const [subCategory, setSubCategory] = useState<string>(
    searchParams.get("subcategory") || ""
  )
  const [available, setAvailable] = useState<boolean>(
    searchParams.get("available") === "true"
  )
  const [minPrice, setMinPrice] = useState<string>(
    searchParams.get("min") || ""
  )
  const [maxPrice, setMaxPrice] = useState<string>(
    searchParams.get("max") || ""
  )

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams)
      if (
        ["category", "subCategory"].includes(name) &&
        params.get("page") &&
        params.get("page") !== "1"
      ) {
        params.delete("page")
      }
      if (!value.length) {
        params.delete(name)
      } else {
        params.set(name, value)
      }
      return params.toString()
    },
    [searchParams]
  )

  const updateRoute = useCallback(
    (queryString: string) => {
      startTransition(() => {
        router.push(`/shop?${queryString}`, { scroll: false })
      })
    },
    [router]
  )

  const handleCategoryChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value
      setCategory(value)
      updateRoute(createQueryString("category", value))
    },
    [createQueryString, updateRoute]
  )

  const handleSubCategoryChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value
      setSubCategory(value)
      updateRoute(createQueryString("subcategory", value))
    },
    [createQueryString, updateRoute]
  )

  const handleAvailabilityChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked
      setAvailable(checked)
      updateRoute(createQueryString("available", checked ? "true" : ""))
    },
    [createQueryString, updateRoute]
  )

  const debouncedPriceChange = useCallback(
    (type: string, value: string) => {
      if (parseInt(value) >= 0 || value === "") {
        updateRoute(createQueryString(type, value))
      }
    },
    [createQueryString, updateRoute]
  )

  const handleMinPriceChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setMinPrice(value)
      debouncedPriceChange("min", value)
    },
    [debouncedPriceChange]
  )

  const handleMaxPriceChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setMaxPrice(value)
      debouncedPriceChange("max", value)
    },
    [debouncedPriceChange]
  )

  const memoizedCategories = useMemo(
    () =>
      categories?.map((category) => (
        <option key={category.name} value={category.name.toLowerCase()}>
          {capitalize(category.name)}
        </option>
      )),
    [categories]
  )

  const memoizedSubCategories = useMemo(
    () =>
      subCategories?.map((subCategory) => (
        <option key={subCategory.name} value={subCategory.name.toLowerCase()}>
          {capitalize(subCategory.name)}
        </option>
      )),
    [subCategories]
  )

  let query = ""
  const search = searchParams.get("search") || ""
  const page = searchParams.get("page") || ""

  if (search.length > 0) {
    query += `?search=${search}`
  }
  if (page.length > 0) {
    query += (query.length > 0 ? "&" : "?") + `page=${page}`
  }

  const handleReset = () => {
    setCategory("")
    setSubCategory("")
    setAvailable(false)
    setMinPrice("")
    setMaxPrice("")
    startTransition(() => {
      router.push(`/shop${query}`, { scroll: false })
    })
  }

  return (
    <div className="mt-2 flex flex-col gap-2 w-full">
      <label htmlFor="category" className="sr-only">
        category
      </label>
      <Select
        id="category"
        disabled={isPending}
        value={category.toLowerCase()}
        onChange={handleCategoryChange}
      >
        <option value="">Categories</option>
        {memoizedCategories}
      </Select>

      <label htmlFor="subcategory" className="sr-only">
        subcategory
      </label>
      <Select
        id="subcategory"
        disabled={isPending}
        value={subCategory.toLowerCase()}
        onChange={handleSubCategoryChange}
      >
        <option value="">Sub-categories</option>
        {memoizedSubCategories}
      </Select>

      <div className="flex gap-2">
        <input
          type="checkbox"
          className="accent-white"
          name="available"
          id="available"
          checked={available}
          onChange={handleAvailabilityChange}
        />
        <label htmlFor="available">
          <span className="flex items-center gap-2">Available</span>
        </label>
      </div>

      <div>
        <label>
          <span className="flex items-center gap-2">Price</span>
        </label>
        <div className="flex gap-3">
          <Input
            value={minPrice}
            placeholder="min"
            type="number"
            onChange={handleMinPriceChange}
          />
          <Input
            value={maxPrice}
            type="number"
            className="appearance-none"
            placeholder="max"
            onChange={handleMaxPriceChange}
          />
        </div>
      </div>

      <Button
        disabled={isPending}
        className="w-full mt-2 font-semibold"
        onClick={handleReset}
      >
        {isPending ? (
          <span className="flex items-center gap-2">
            Loading <Loader2 className="h-4 w-4 animate-spin" />
          </span>
        ) : (
          "Reset"
        )}
      </Button>
    </div>
  )
}
