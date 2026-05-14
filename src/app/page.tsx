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
      "Limpieza del hogar, proporcionando un servicio completo que abarca cocinas, baños, habitaciones, áreas comunes y espacios específicos, adaptándonos a las necesidades de cada familia y garantizando un ambiente impecable y ordenado.",
    imageUrl:
      "images/services/limpieza-hogar.jpeg",
  },
  {
    title: "Limpieza de Oficinas",
    description:
      "Comprendemos las exigencias de un entorno corporativo y ofrecemos soluciones personalizadas, garantizando un ambiente limpio, organizado y propicio para la productividad.",
    imageUrl:
      "images/services/limpieza-oficina.jpeg",
  },
  {
    title: "Cuidados Especiales",
    description:
      "Ofrecemos servicios especializados de niñera doméstica y gerontodomicilio en todo el país. Nos distinguimos por brindar un cuidado especial y personalizado, asegurando la seguridad, la comodidad y la atención integral de quienes más lo necesitan.",
    imageUrl:
      "images/services/cuidados-especiales.jpeg",
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