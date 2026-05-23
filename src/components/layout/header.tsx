import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NotebookPen } from "lucide-react";
import WhatsAppButton from "../shared/whatsapp-button";

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

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
const whatsappData = {
  phone: WHATSAPP_NUMBER,
  message:
    "Hola, me gustaría agendar un servicio de limpieza.",
};

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full  bg-primary backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">

        <Link href="/" className="flex items-center">
            <Image
              src="/images/proclean2.png"
              alt="Logo ProClean"
              width={160}
              height={150}
              priority
              className="h-30 w-auto py-2 sm:h-20 md:h-20 lg:h-40"
            />
        </Link>

        {/* <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white transition hover:text-cta"
            >
              {link.label}
            </a>
          ))}
        </nav> */}
        <WhatsAppButton data={whatsappData}>
          <Button variant={"cta"} className="rpx-8 py-5 text-sm font-medium">
            <NotebookPen className="mr-2 h-5! w-5!" />
            ¡Reserva YA! 
          </Button>
        </WhatsAppButton>
      </div>
    </header>
  );
}