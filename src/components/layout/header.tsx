import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

// const navLinks = [
//   {
//     label: "Inicio",
//     href: "/",
//   },
//   {
//     label: "Servicios",
//     href: "/servicios",
//   },
//   {
//     label: "Reservas",
//     href: "/reservas",
//   },
// ];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full  bg-primary backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">

        <Link href="/">
                <Image
                    src="/images/proclean2.jpeg"
                    alt="Logo ProClean"
                    width={180}
                    height={60}
                    priority
                    className="h-30 w-auto"
                />
            </Link>

        {/* <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-zinc-700 transition hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav> */}

        <Button className="rounded-full px-8 py-5 text-sm text-black font-medium bg-cta hover:bg-lime-300">
          <Send className="mr-2 h-5 w-5" />
          ¡Reserva YA! 
        </Button>
      </div>
    </header>
  );
}