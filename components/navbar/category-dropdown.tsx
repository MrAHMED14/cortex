import Link from "next/link"
import { BiSolidCategory } from "react-icons/bi"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function CategoryDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus-visible:border-hidden focus-within:border-hidden focus:border-hidden border-hidden">
        <p className="hidden lg:flex items-center gap-1 text-base md:text-lg font-bold">
          <BiSolidCategory /> Browse Categories
        </p>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="pt-5 w-56">
        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="cursor-pointer">
            <Link href="/">Composants</Link>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem className="cursor-pointer">
                Cartes Meres
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Processeurs Cpu
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Memoire Ram
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuSeparator />

        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="cursor-pointer">
            <Link href="/">Peripheriques</Link>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem className="cursor-pointer">
                Claviers
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Souris
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Casques et Micros
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Tapis de Souris
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuSeparator />

        <DropdownMenuSub>
          <DropdownMenuSubTrigger className="cursor-pointer">
            <Link href="/">Moniteur</Link>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem className="cursor-pointer">
                Gaming
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer">
                Bureautique
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer">Réseau</DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer">
          Bureautique
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer">
          Mobile Phone
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer">Promo</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
