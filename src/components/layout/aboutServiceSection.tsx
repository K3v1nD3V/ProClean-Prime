import { CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutServiceSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-24">
      {/* Línea decorativa */}
      <div className="mx-auto h-1 w-24 rounded-full bg-primary" />

      {/* Contenido */}
      <div className="mx-auto mt-12 max-w-4xl space-y-8 text-center text-xs leading-relaxed text-zinc-700 md:text-2xl md:leading-loose">
        <p>
          Transformamos el concepto de{" "}
          <strong className="font-bold text-zinc-900">
            aseo para empresas
          </strong>{" "}
          con un enfoque práctico y flexible.
        </p>

        <p>
          Nuestro servicio está pensado para oficinas y espacios corporativos
          que requieren limpieza regular sin necesidad de contratar personal de
          planta.
        </p>

        <p>
          Puedes programar los días que necesites y nosotros nos encargamos del
          resto: desde la{" "}
          <strong className="font-bold text-zinc-900">
            limpieza del mobiliario
          </strong>{" "}
          hasta el{" "}
          <strong className="font-bold text-zinc-900">
            mantenimiento de áreas comunes, baños y zonas de cafetería
          </strong>
          .
        </p>

        <p>
          <strong className="font-bold text-zinc-900">
            Experiencia confiable:
          </strong>{" "}
          trabajamos con{" "}
          <strong className="font-bold text-zinc-900">
            auxiliares de confianza
          </strong>{" "}
          uniformados con el{" "}
          <strong className="font-bold text-zinc-900">
            logo de tu empresa
          </strong>{" "}
          para reforzar tu{" "}
          <strong className="font-bold text-zinc-900">
            imagen corporativa
          </strong>
          .
        </p>

        <p>
          <strong className="font-bold text-zinc-900">
            Horarios flexibles y continuidad asegurada:
          </strong>{" "}
          tu misma auxiliar, los mismos estándares.
        </p>

        <p>
          <strong className="font-bold text-zinc-900">
            Cobertura integral:
          </strong>{" "}
          limpieza de mobiliario, dispositivos electrónicos, baños, áreas de{" "}
          <strong className="font-bold text-zinc-900">
            cafetería
          </strong>{" "}
          y pasillos.
        </p>

        <p>
          <strong className="font-bold text-zinc-900">
            Gestión ambiental:
          </strong>{" "}
          manejo de residuos sólidos, clasificación de residuos y recolección de
          basura según normas locales.
        </p>

        <p>
          <strong className="font-bold text-zinc-900">
            Servicios adicionales:
          </strong>{" "}
          diligencias y compras externas, servicio urgente, servicio domingos y
          festivos, limpieza nocturna y horas extra.
        </p>

        <p>
          <strong className="font-bold text-zinc-900">
            Beneficio económico:
          </strong>{" "}
          descuentos por volumen para contratos &gt; 12 días al mes,
          manteniendo siempre una{" "}
          <strong className="font-bold text-zinc-900">
            tarifa competitiva
          </strong>
          .
        </p>
      </div>

      {/* CTA */}
      <div className="mt-16 flex justify-center">
        <Button variant={"cta"} className="px-8 py-9 text-2xl font-semibold">
                Reserva tu servicio
                <CalendarPlus 
                    className="ml-2 h-6! w-6!" 
                />
            </Button>
      </div>
    </section>
  );
}