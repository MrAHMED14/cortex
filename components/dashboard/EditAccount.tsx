"use client"

import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRouter } from "next/navigation"
import { useState, useTransition } from "react"

import { updateProfile } from "@/lib/actions/users/action"
import { User } from "@prisma/client"
import { Loader2, Upload } from "lucide-react"
import { toast } from "sonner"
import Select from "../ui/select"

const roles = [
  { value: "USER", label: "User" },
  { value: "ADMIN", label: "Admin" },
]

export default function ProfileEditPage({ data }: { data: User }) {
  const [isLoading, startTransition] = useTransition()
  const [username, setUsername] = useState<string>(data.displayName)
  const [role, setRole] = useState<string>(data.role)
  const [previewUrl, setPreviewUrl] = useState(data.avatarUrl)
  const router = useRouter()

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setRole(value)
  }
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setUsername(value)
  }

  const updateRoleButton = () => {
    if (!username || username.length === 0) {
      toast.error("Your name cannot be empty")
      return
    }
    startTransition(async () => {
      await updateProfile(data.id, username, role as "ADMIN" | "USER")
      toast.success("Profile updated successfully")
    })
    router.refresh()
  }

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Edit Profile</CardTitle>
          <CardDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col items-center space-y-4">
            <Avatar className="w-32 h-32">
              <AvatarImage
                src={previewUrl ?? "/unknow.jpg"}
                alt="Profile photo"
              />
            </Avatar>
            <Button type="button" variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Upload Photo
            </Button>
            <input type="file" accept="image/*" className="hidden" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={data.email ?? ""}
              disabled
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">Role</Label>
            <Select value={role} onChange={handleRoleChange}>
              {roles.map((role) => (
                <option key={role.value} value={role.value}>
                  {role.label}
                </option>
              ))}
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isLoading} onClick={updateRoleButton}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              "Save Changes"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
