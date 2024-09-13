import LoginForm from "@/components/auth/login-form"
import ProvidersButtons, { Separator } from "@/components/auth/providers-button"
import MaxWidthWrapper from "@/components/global/max-width-wrapper"
import Title from "@/components/ui/title"
import Link from "next/link"

interface LoginPageProps {}

export default function LoginPage({}: LoginPageProps) {
  return (
    <MaxWidthWrapper className="flex justify-center">
      <div className="py-24 flex flex-col items-center gap-y-6 w-60 sm:w-96">
        <Title>Login</Title>

        <LoginForm />

        <Separator />

        <div className="w-full space-y-2">
          <ProvidersButtons />
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            You don&rsquo;t have account?{" "}
            <Link
              href="/sign-up"
              className="hover:underline hover:dark:text-white hover:text-stone-950"
            >
              sign-up
            </Link>
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
