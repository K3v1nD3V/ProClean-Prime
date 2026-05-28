import Hero from "@/components/layout/hero";
import Card from "@/components/shared/card";
import LegalBanner from "@/components/layout/legal-banner";
import PricingSection from "@/components/layout/pricingSection";
import AboutServiceSection from "@/components/layout/aboutServiceSection";
import Footer from "@/components/layout/footer";
import Image from "next/image";
import Reveal from "@/components/shared/reveal";

const cardInfo = [
  {
    title: "Limpieza de Hogar",
    description:
      "Limpieza del hogar, proporcionando un servicio completo que abarca cocinas, baños, habitaciones, áreas comunes y espacios específicos, adaptándonos a las necesidades de cada familia y garantizando un ambiente impecable y ordenado.",
    imageUrl:
      "/images/services/limpieza-hogar.jpeg",
  },
  {
    title: "Limpieza de Oficinas",
    description:
      "Comprendemos las exigencias de un entorno corporativo y ofrecemos soluciones personalizadas, garantizando un ambiente limpio, organizado y propicio para la productividad.",
    imageUrl:
      "/images/services/limpieza-oficina.jpeg",
  },
  {
    title: "Cuidados Especiales",
    description:
      "Ofrecemos servicios especializados de niñera doméstica y atención domiciliaria para adultos mayores. Nos distinguimos por brindar un cuidado personalizado y de calidad, garantizando la seguridad, la comodidad y el bienestar integral de quienes más lo necesitan.",
    imageUrl:
      "/images/services/cuidados-especiales.jpeg",
  },
];

export default function Home() {
  return (
    <>
      <Hero/>
      
      {/* Sección de servicios destacada */}
      <section id="servicios" className="relative z-20 mx-auto -mt-32 max-w-7xl px-4">
          {/* Encabezado */}
          {/* <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold uppercase tracking-wider text-primary shadow-md">
              Nuestros Servicios
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-zinc-900 md:text-5xl">
              Soluciones diseñadas para cada necesidad
            </h2>

            <p className="mt-4 text-lg leading-8 text-zinc-600">
              Ofrecemos servicios especializados para hogares, oficinas y cuidados
              personalizados, con personal confiable y altos estándares de calidad.
            </p>
          </div> */}

          {/* Tarjetas */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cardInfo.map((card, index) => (
             <Reveal key={card.title} direction="up" delay={index * 150}>
                <Card
                  key={card.title}
                  className="group overflow-hidden rounded-[2rem] border-0 bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  {/* Imagen */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={card.imageUrl}
                      alt={card.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-zinc-900">
                      {card.title}
                    </h3>

                    <p className="mt-3 leading-7 text-zinc-600">
                      {card.description}
                    </p>
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
      </section>

      <LegalBanner/>  
      {/* Seccion sobre servicios */}
      <AboutServiceSection/>
    
     {/*Seccion de precios y beneficios */}
      <PricingSection/>


      {/* Seccion de contacto */}
      <Footer/>
    </>
  );
}