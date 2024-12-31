import { EmailSignup } from "./email-signup"

interface ComingSoonProps {}

export default function ComingSoon({}: ComingSoonProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4 text-gray-950">
      <main className="container mx-auto flex max-w-2xl flex-col items-center space-y-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Something Amazing is Coming Soon
        </h1>
        <p className="text-xl text-muted-foreground">
          We&apos;re working hard to bring you something extraordinary.
          <br /> Stay tuned!
        </p>
        <EmailSignup />
      </main>
    </div>
  )
}
