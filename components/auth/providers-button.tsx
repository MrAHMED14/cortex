import Link from "next/link"
import { Button, buttonVariants } from "../ui/button"
import { GithubIcon, GoogleIcon } from "../ui/icons"

interface ProvidersButtonsProps {}
export default function ProvidersButtons({}: ProvidersButtonsProps) {
  return (
    <div className="w-full space-y-2">
      <Button
        //disabled={isLoading}
        //onClick={signInWithGithub}
        className="font-semibold w-full flex items-center justify-center gap-1"
      >
        <GithubIcon className="w-6 h-6 dark:fill-black fill-white" />
        GitHub
      </Button>
      <a
        href="/login/google"
        className={buttonVariants({
          variant: "outline",
          className:
            "font-semibold border-muted-foreground w-full flex items-center justify-center gap-1",
        })}
      >
        <GoogleIcon width={24} height={24} />
        Google
      </a>
    </div>
  )
}

export function Separator() {
  return (
    <div className="w-full flex justify-between items-center gap-2">
      <div className="w-full h-px bg-black/50 dark:bg-white/15" />
      <p className="text-xs text-black dark:text-white/50">OR</p>
      <div className="w-full h-px bg-black/50 dark:bg-white/15" />
    </div>
  )
}
