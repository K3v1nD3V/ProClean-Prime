"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Menu, NotebookPen, X } from "lucide-react";

const navLinks = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Servicios",
    href: "#servicios",
  },
  {
    label: "Compromisos",
    href: "#compromisos",
  },
  {
    label: "Cotización",
    href: "#cotizacion",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const isReservaPage =
  pathname?.startsWith("/reserva");

  const isPaymentPage =
    pathname?.startsWith("/pago");

  // const handleGoBack = () => {
  //   if (typeof window !== "undefined" && window.history.length > 1) {
  //     window.history.back();
  //   } else {
  //     window.location.href = "/";
  //   }
  // };

  if (isReservaPage) {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="w-full max-w-7xl">
        <div className="flex items-center justify-between rounded-full bg-black/10 px-6 py-3 backdrop-blur-md shadow-lg">
          <Link href="/">
            <button
              type="button"
              // onClick={handleGoBack}
              className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-black/15"
              >
              <ChevronLeft className="h-4 w-4" />
              Inicio
            </button>
          </Link>

          {/* <Link href="/">
            <Image
              src="/images/logoproclean.svg"
              alt="ProClean Prime"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link> */}

        </div>
      </div>
    </header>
  );
}
if (isPaymentPage) {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="w-full max-w-7xl">

        <div className="flex items-center justify-between rounded-full border border-white/15 bg-primary/80 px-6 py-3 backdrop-blur-xl shadow-2xl">
          <Link href="/">
            <button
              type="button"
              // onClick={handleGoBack}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
              >
              <ChevronLeft className="h-4 w-4" />
              Inicio
            </button>
          </Link>

          {/* <Link href="/">
            <Image
              src="/images/logoproclean.svg"
              alt="ProClean Prime"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link> */}

        </div>

      </div>
    </header>
  );
}
{/* <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <div className="w-full max-w-7xl">
          <div className="mx-auto flex w-full bg-black/10 items-center justify-start rounded-full borderpx-4 py-3 px-6 backdrop-blur-md shadow-lg">
            <button
              type="button"
              // onClick={handleGoBack}
              className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-black/15"
            >
              <ChevronLeft className="h-4 w-4" />
              Volver
            </button>
          </div>
        </div>
      </header>  */}
  return (
    <header className="fixed top-0 z-50 w-full bg-primary backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logoproclean.svg"
            alt="Logo ProClean"
            width={160}
            height={150}
            priority
            className="h-20 w-auto py-2 md:h-20 lg:h-25"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white transition hover:text-cta"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/reserva" className="hidden md:inline-flex">
            <Button
              variant="cta"
              className="hidden rounded-full rpx-8 py-5 text-sm font-medium md:inline-flex"
            >
              <NotebookPen className="mr-2 h-5 w-5" />
              ¡Reserva YA!
            </Button>
          </Link>

          <button
            type="button"
            onClick={() => setMobileNavOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 md:hidden"
            aria-label={mobileNavOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileNavOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileNavOpen ? (
        <div className="md:hidden border-t border-white/10 bg-primary/95 px-4 py-4 shadow-2xl backdrop-blur-xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileNavOpen(false)}
                className="text-base font-medium text-white transition hover:text-cta"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}