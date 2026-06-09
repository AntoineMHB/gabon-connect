import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import gabon_passport_info from "@/assets/gabonmailinfos-passeport-gabonais.png";
import gabon_scholarship from "@/assets/scholarship_img.jpg";
import gabon_digital_img from "@/assets/gabon_digital.png";
import gabon_consular from "@/assets/services_consulaires.jpeg";
import gabon_day_img from "@/assets/independance_day.png";

const newsData = [
  {
    id: 1,
    title: "Nouveaux services de passeport biométrique disponibles",
    date: "08 Juin 2026",
    image: gabon_passport_info,
    description:
      "Les citoyens peuvent désormais faire une demande de passeport biométrique via la nouvelle plateforme numérique.",
  },
  {
    id: 2,
    title: "Célébration de la fête nationale du Gabon",
    date: "30 Mai 2026",
    image: gabon_day_img,
    description:
      "Rejoignez l'ambassade pour célébrer la culture et les réussites nationales du Gabon.",
  },
  {
    id: 3,
    title: "Services consulaires à Kigali",
    date: "15 Mai 2026",
    image: gabon_consular,
    description:
      "Des services consulaires spéciaux seront disponibles pour les citoyens gabonais au Rwanda.",
  },
  {
    id: 4,
    title: "Programme de bourses d'études",
    date: "05 Mai 2026",
    image: gabon_scholarship,
    description:
      "Les candidatures pour la promotion de bourses d'études de 2026 sont désormais ouvertes.",
  },
  {
    id: 5,
    title: "Initiative de transformation numérique",
    date: "25 Avril 2026",
    image: gabon_digital_img,
    description:
      "L'ambassade lance de nouveaux services en ligne pour simplifier les procédures administratives.",
  },
];
function NewsAndEvents() {
  const plugin = useRef(
    Autoplay({
      delay: 5000,
      stopOnInteraction: true,
    }),
  );
  return (
    <>
      <section className="relative py-20 overflow-hidden max-w-7xl mx-auto px-4 md:px-8 bg-white">
        {/* Gabon-inspired decorative pattern */}
        <div className="absolute -left-12  top-0 h-full w-32 opacity-10">
          <div className="flex flex-col gap-6 h-full justify-center">
            {Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="w-24 h-24 border-[12px] border-green-600 rotate-45"
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl font-bold text-[#4664B2]">
              Nouvelles et événements
            </h2>
          </div>

          {/* Carousel */}
          <div className="m-10">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              opts={{
                align: "start",
                loop: true,
              }}
            >
              <div className="hidden md:flex gap-2 md:justify-end mb-5">
                <CarouselPrevious className="relative translate-y-0 left-0" />
                <CarouselNext className="relative translate-y-0 right-0" />
              </div>
              <CarouselContent>
                {newsData.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="bg-white rounded-xl overflow-hidden transition-all duration-300 h-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-60 object-cover"
                      />

                      <div className="p-5">
                        <p className="text-sm text-gray-500 mb-3">
                          {item.date}
                        </p>

                        <h3 className="font-bold text-lg mb-3 line-clamp-2">
                          {item.title}
                        </h3>

                        <p className="text-gray-600 text-sm line-clamp-3">
                          {item.description}
                        </p>

                        <button className="mt-5 text-black font-semibold hover:text-[#4664B2]">
                          En savoir plus →
                        </button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </section>
    </>
  );
}
export default NewsAndEvents;
