import Hero from "@/components/layout/hero";
import Card from "@/components/shared/card";
import PricingSection from "@/components/layout/pricingSection";
import AboutServiceSection from "@/components/layout/aboutServiceSection";
import Footer from "@/components/layout/footer";
// import Image from "next/image";
const cardInfo = [
  {
    title: "Limpieza de Hogar",
    description:
      "Servicio completo de limpieza para tu hogar, incluyendo cocina, baños, habitaciones y áreas comunes.",
    imageUrl:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Limpieza de Oficinas",
    description:
      "Mantenimiento profesional para oficinas, garantizando un ambiente limpio y saludable para tus empleados.",
    imageUrl:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Limpieza de Edificios",
    description:
      "Servicios especializados para la limpieza de edificios comerciales y residenciales, incluyendo áreas comunes y fachadas.",
    imageUrl:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <>
      <Hero/>
      
      {/* Seccion de tarjetas de servicios */}
      <section className="mx-auto mt-20 flex max-w-7xl flex-wrap justify-center gap-6 px-4">
        {cardInfo.map((card) => (
          <Card
            key={card.title}
            className="w-full max-w-sm overflow-hidden"
          >
            <img
              src={card.imageUrl}
              alt={card.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="text-xl font-semibold">
                {card.title}
              </h3>

              <p className="mt-2 text-gray-600">
                {card.description}
              </p>
            </div>
          </Card>
        ))}
      </section>
    
     {/*Seccion de precios y beneficios */}
      <PricingSection/>

      {/* Seccion sobre servicios */}
      <AboutServiceSection/>

      {/* Seccion de contacto */}
      <Footer/>
    </>
  );
}