import { Button } from "@/components/ui/button";
import { CalendarPlus, ArrowDown } from "lucide-react";
export default function Hero() {
  return (
   <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center">

        <span className="mb-6 text-sm font-semibold uppercase tracking-widest text-cta">
          Startup de aseo y limpieza profesional
        </span>

        <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl">
          En Proclean perfeccionamos cada detalle de tu negocio, hogar y edificio
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-200">
          Servicio profesional de limpieza para hogares, oficinas y espacios
          empresariales con reservas rápidas y atención personalizada.
        </p>

        <div className="mt-10 flex flex-col gap-4">

            <Button variant={"cta"} className="px-8 py-9 text-2xl font-semibold">
                Reserva tu servicio
                <CalendarPlus 
                    className="ml-2 h-6! w-6!" 
                />
            </Button>

            <button className="w-fit mx-auto my-4 bg-white rounded-full p-3">
                <ArrowDown />
            </button>

            {/* <Button variant={"outline"}>Boton outline</Button>
            <Button variant={"secondary"}>Boton secondary</Button>
            <Button variant={"destructive"}>Boton destructive</Button>
            <Button variant={"link"}>Boton link</Button>
            <Button variant={"ghost"}>Boton ghost</Button> */}
        </div>

      </div>
    </section>
  );
}