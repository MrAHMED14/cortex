import Link from "next/link"
import { MdLocationPin, MdCall } from "react-icons/md"

interface ContactBarProps {}

export default function ContactBar({}: ContactBarProps) {
  return (
    <div className="flex justify-center items-center bg-primary h-11 text-primary-foreground font-medium text-[14px]">
      <div className="flex gap-4">
        <Link href="/contact" className="hover:text-primary-foreground">
          <p className="flex items-center gap-1">
            <MdCall /> 0554 05 81 58
          </p>
        </Link>

        <p className="font-light">|</p>

        <Link href="/contact" className="hover:text-primary-foreground">
          <p className="flex items-center gap-1">
            <MdLocationPin /> Our location
          </p>
        </Link>
      </div>
    </div>
  )
}
