import { EmailSignup } from "./email-signup"

export default function ComingSoon() {
  return (
    <div className="flex mt-32 flex-col items-center justify-center text-gray-950">
      <main className="mx-auto flex max-w-2xl flex-col items-center space-y-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Something Amazing is Coming Soon
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground">
          We&apos;re working hard to bring you something extraordinary.
          <br /> Stay tuned!
        </p>
        <EmailSignup />
      </main>
    </div>
  )
}
