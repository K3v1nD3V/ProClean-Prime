import { ShieldCheck, BadgeCheck } from "lucide-react";

export default function LegalBanner() {
  return (
    <section className="mx-auto mt-20 max-w-7xl px-4">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-primary via-primary to-primary/95 p-[1px] shadow-2xl">
        <div className="relative rounded-[2.5rem] bg-primary px-8 py-10 md:px-12 md:py-12">
          {/* Elementos decorativos */}
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-[rgb(var(--cta))]/10 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Contenido principal */}
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-cta">
                <ShieldCheck className="h-4 w-4" />
                Cumplimiento Legal Garantizado
              </div>

              <h2 className="mt-5 text-3xl font-bold leading-tight text-white md:text-4xl">
                Sabías que todas nuestras auxiliares cuentan con todas las
                prestaciones sociales legales vigentes.
              </h2>

              <p className="mt-4 text-lg leading-8 text-white/80">
                Así tú no tienes que preocuparte por el cumplimiento de la
                normatividad laboral, seguridad social o responsabilidades
                legales asociadas a la contratación.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Seguridad social al día",
                  "Prestaciones legales",
                  "Cobertura completa",
                  "Respaldo empresarial",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white"
                  >
                    <BadgeCheck className="h-4 w-4 text-cta" />
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Sello visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="flex h-36 w-36 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm md:h-44 md:w-44">
                <div className="text-center">
                  <ShieldCheck className="mx-auto h-12 w-12 text-cta md:h-14 md:w-14" />
                  <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-white/80">
                    100%
                  </p>
                  <p className="text-xs uppercase tracking-widest text-cta">
                    Legal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}