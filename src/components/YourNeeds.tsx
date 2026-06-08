import { Button } from "./ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useNavigate } from "react-router-dom";
import passportImg from "@/assets/gabonese_passport.png";
import etatCivilImg from "@/assets/gabon_etat_civil.jpg";
import legalisationImg from "@/assets/legalisation.jpg";

const besoins = [
  {
    id: 1,
    slug: "services",
    title: "Services",
    description: "Demande et renouvellement en ligne, suivi en temps réel",
    image: passportImg,
    readMoreBtn: "En savoir plus >>",
  },
  {
    id: 2,
    title: "Visiter le Gabon",
    slug: "visiter_le_gabon",
    description: "Découvrez-en plus sur les voyages au Gabon",
    image: etatCivilImg,
    readMoreBtn: "En savoir plus >>",
  },
  {
    id: 3,
    title: "Informations touristiques",
    slug: "informations_touristiques",
    description:
      "Le Gabon rouvre ses portes au tourisme. Consultez les recommandations de voyage pour en savoir plus.",
    image: legalisationImg,
    readMoreBtn: "En savoir plus >>",
  },
];

function YourNeeds() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#FAFAFA] py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header Title Section */}
        <div className="text-left mb-12">
          <h1 className="font-bold text-2xl md:text-3xl mb-4 text-[#4664B2]">
            Nos Services
          </h1>
          <p className="text-base text-left text-gray-600 max-w-2xl mx-auto">
            Plus besoin de se déplacer pour des démarches simples. L'ambassade
            vient à vous.
          </p>
        </div>

        {/* Main Content Layout with Contact Card Overlap Capability */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Service Cards Grid - Now slimmer and cleaner */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1 w-full">
            {besoins.map((item) => (
              <Card
                key={item.id}
                onClick={() => navigate(`/besoins/${item.slug}`)}
                className="transition-transform duration-300 hover:scale-[1.02] bg-white drop-shadow-md rounded-xl overflow-hidden cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* <img
                    src={item.image}
                    alt={item.title}
                    className="block h-[200px] w-full object-cover"
                  /> */}
                  <CardHeader className="p-5">
                    <CardTitle className="font-bold text-lg text-[#4664B2]">
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-sm mt-2 text-gray-600 text-justify leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </div>
                <div className="px-5 pb-5 mt-auto">
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
                  <h3 className="font-semibold text-sm opacity-90">Adresse</h3>
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
        </div>
      </div>
    </section>
  );
}

export default YourNeeds;
