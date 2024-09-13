import ProvidersButtons, { Separator } from "@/components/auth/providers-button"
import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import SignUpForm from "@/components/auth/sign-up-form"
import Title from "@/components/ui/title"
import Link from "next/link"

interface SignUpPageProps {}

export default function SignUpPage({}: SignUpPageProps) {
  return (
    <MaxWidthWrapper className="flex justify-center">
      <div className="py-24 flex flex-col items-center gap-y-6 w-60 sm:w-96">
        <Title>Sign up</Title>

        <SignUpForm />

        <Separator />
        <div className="w-full space-y-2">
          <ProvidersButtons />
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            Already have account?
            <Link
              href="/login"
              className="hover:underline hover:dark:text-white hover:text-stone-950"
            >
              login
            </Link>
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
