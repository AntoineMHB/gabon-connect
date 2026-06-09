import { Button } from "./ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useNavigate } from "react-router-dom";

import gabon_service_img from "@/assets/service_img.jpg";
import visit_gabon from "@/assets/visit_gabon.jpg";
import gabon_travel from "@/assets/travel_infos.jpg";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import visit_gbn_1 from "@/assets/visit_gabon_imgs/temp_image_0AC44FF6-6053-41A4-9B51-024C51E2A228.jpg";
import visit_gbn_2 from "@/assets/visit_gabon_imgs/temp_image_22EEB27F-6F52-4016-A7C9-EEAA97874D2F.jpg";
import visit_gbn_3 from "@/assets/visit_gabon_imgs/temp_image_0AC44FF6-6053-41A4-9B51-024C51E2A228.jpg";
import visit_gbn_4 from "@/assets/visit_gabon_imgs/temp_image_42B4AA87-424F-4FA6-9D60-75CDF7C893AA.jpg";
import visit_gbn_5 from "@/assets/visit_gabon_imgs/FB_IMG_1741729154055.jpg";
import visit_gbn_6 from "@/assets/visit_gabon_imgs/FB_IMG_1781001078355.jpg";
import visit_gbn_7 from "@/assets/visit_gabon_imgs/FB_IMG_1781001086357.jpg";
import visit_gbn_8 from "@/assets/visit_gabon_imgs/FB_IMG_1781001092099.jpg";
import visit_gbn_9 from "@/assets/visit_gabon_imgs/FB_IMG_1781001367681.jpg";
import visit_gbn_10 from "@/assets/visit_gabon_imgs/FB_IMG_1781001348267.jpg";
import visit_gbn_11 from "@/assets/visit_gabon_imgs/FB_IMG_1781001168706.jpg";
import visit_gbn_12 from "@/assets/visit_gabon_imgs/FB_IMG_1781001142684.jpg";
import visit_gbn_13 from "@/assets/visit_gabon_imgs/FB_IMG_1781001117830.jpg";
import visit_gbn_14 from "@/assets/visit_gabon_imgs/FB_IMG_1781001110378.jpg";
import visit_gbn_15 from "@/assets/visit_gabon_imgs/FB_IMG_1781001100977.jpg";
import visit_gbn_16 from "@/assets/visit_gabon_imgs/FB_IMG_1781001097030.jpg";

const gabonPlaces = [
  visit_gbn_16,
  visit_gbn_11,
  visit_gbn_12,
  visit_gbn_13,
  visit_gbn_14,
  visit_gbn_15,
  visit_gbn_1,
  visit_gbn_2,
  visit_gbn_3,
  visit_gbn_4,
  visit_gbn_5,
  visit_gbn_6,
  visit_gbn_7,
  visit_gbn_8,
  visit_gbn_9,
  visit_gbn_10,
  visit_gbn_11,
  visit_gbn_12,
  visit_gbn_13,
  visit_gbn_14,
  visit_gbn_15,
];

const besoins = [
  {
    id: 1,
    slug: "services",
    title: "Services",
    description: "Demande et renouvellement en ligne, suivi en temps réel",
    image: gabon_service_img,
    readMoreBtn: "En savoir plus >>",
  },
  {
    id: 2,
    title: "Visiter le Gabon",
    slug: "visiter_le_gabon",
    description: "Découvrez-en plus sur les voyages au Gabon",
    image: visit_gabon,
    readMoreBtn: "En savoir plus >>",
  },
  {
    id: 3,
    title: "Informations touristiques",
    slug: "informations_touristiques",
    description:
      "Le Gabon rouvre ses portes au tourisme. Consultez les recommandations de voyage pour en savoir plus.",
    image: gabon_travel,
    readMoreBtn: "En savoir plus >>",
  },
];

function YourNeeds() {
  const navigate = useNavigate();

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <section className="bg-gray-50 py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Title Section */}
        <div className="text-left mb-12">
          <h1 className="font-bold text-2xl md:text-3xl mb-4 text-[#4664B2]">
            Vous cherchez
          </h1>
          {/* <p className="text-base text-left text-gray-600 max-w-2xl mx-auto">
            Plus besoin de se déplacer pour des démarches simples. L'ambassade
            vient à vous.
          </p> */}
        </div>

        {/* Main Content Layout with Contact Card Overlap Capability */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Service Cards Grid - Now slimmer and cleaner */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 w-full">
            {besoins.map((item) => (
              <Card
                key={item.id}
                onClick={() => navigate(`/besoins/${item.slug}`)}
                className="p-0 transition-transform duration-300 hover:scale-[1.02] bg-white drop-shadow-md rounded-xl overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="block h-[150px] w-full object-cover"
                  />
                  <CardHeader className="pt-3">
                    <CardTitle className="font-bold text-lg text-[#4664B2]">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-sm mt-2 text-gray-600 text-justify leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </div>
                <div className="px-5 pb-5">
                  <Button
                    className="bg-[#4664B2] hover:bg-[#364e8c] text-white w-full sm:w-auto rounded-lg text-xs"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents double navigation triggering
                      navigate(`/besoins/${item.slug}`);
                    }}
                  >
                    {item.readMoreBtn}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Contact Card Sidebar - Handles the Overlap seamlessly */}

          <div className="flex flex-col gap-5">
            <div className="w-full lg:w-[340px]   lg:-mt-96 z-20">
              <div className="bg-white shadow-xl rounded-xl overflow-hidden border border-gray-100">
                {/* Top Contact part */}
                <div className="bg-[#4664B2] p-6 text-white flex flex-col gap-5">
                  <h2 className="text-xl font-bold border-b border-white/20 pb-2">
                    Nous contacter
                  </h2>
                  <div>
                    <h3 className="font-semibold text-sm opacity-90">Email</h3>
                    <p className="text-sm break-all">
                      ambassgabonaurwanda@minaffet.gov.ga
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm opacity-90">
                      Téléphone
                    </h3>
                    <p className="text-sm">+250 784 758 356</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm opacity-90">
                      Adresse
                    </h3>
                    <p className="text-sm">Kigali, Nyarutarama KG 32</p>
                  </div>
                </div>

                {/* Bottom Hours part */}
                <div className="p-6 text-slate-800 flex flex-col gap-5">
                  <h2 className="font-bold text-lg text-[#4664B2] border-b border-gray-100 pb-2">
                    Heures d'ouverture
                  </h2>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">
                      Lundi - Vendredi : 9h00 - 17h00
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Services consulaires
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">
                      Lun, Mer, Jeu, Ven : 10h00 - 16h00
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 text-justify leading-relaxed">
                      Rendez-vous pour la prise de données biométriques des
                      passeports et des cartes d'identité.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Second card for images */}
            {/* <div className="h-[300px] w-[200px] bg-amber-500 w-full lg:w-[340px]"></div> */}
            <h1 className="font-bold text-lg m-3 text-center text-[#4664B2]">
              Notre félicitée
            </h1>
            <Carousel
              plugins={[plugin.current]}
              opts={{ loop: true }}
              className="h-[300px] w-full lg:w-[340px] rounded-xl overflow-hidden"
            >
              <CarouselContent className="h-[300px]">
                {gabonPlaces.map((url, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={url}
                      alt={`Gabon place ${index + 1}`}
                      className="h-[300px] w-full object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default YourNeeds;
