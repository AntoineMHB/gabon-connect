import { Button } from "./ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useNavigate } from "react-router-dom";
import passportImg from "@/assets/gabonese_passport.png";
import carteConsulaireImg from "@/assets/carte_consulaire.png";
import etatCivilImg from "@/assets/gabon_etat_civil.jpg";
import legalisationImg from "@/assets/legalisation.jpg";
import paymentImg from "@/assets/payment.jpg";
import rdvImg from "@/assets/rdv_picture.png";

const programs = [
  {
    id: 1,
    slug: "passeport",
    title: "Passeport",
    description: "Demande et renouvellement en ligne, suivi en temps réel",
    image: passportImg,
    readMoreBtn: "En savoir plus >>",
  },
  {
    id: 2,
    title: "État Civil",
    slug: "etatCivil",
    description:
      "Enregistrement des naissances, mariages et décès à l'étranger",
    image: etatCivilImg,
    readMoreBtn: "En savoir plus >>",
  },
  {
    id: 3,
    title: "Légalisation",
    slug: "legalisation",
    description: "Apostille et certification de documents administratifs",
    image: legalisationImg,
    readMoreBtn: "En savoir plus >>",
  },
  {
    id: 4,
    title: "Paiements",
    slug: "paiements",
    description:
      "Frais consulaires via Mobile Money (MTN, Airtel) et carte bancaire",
    image: paymentImg,
    readMoreBtn: "En savoir plus >>",
  },
  {
    id: 5,
    title: "Carte Consulaire Digitale",
    slug: "carteConsulaireDigitale",
    subtitle: "Empowering Through Learning",
    description: "Document d'identité officiel de la diaspora",
    image: carteConsulaireImg,
    readMoreBtn: "Read More >>",
  },
  {
    id: 6,
    title: "Rendez-vous",
    slug: "rendezVous",
    description: "Prise de RDV intelligente, rappels SMS automatiques",
    image: rdvImg,
    readMoreBtn: "Read More >>",
  },
];

function OurServices() {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-[#FAFAFA] py-10">
        <div className="text-center">
          <h1 className="font-bold text-2xl md:text-3xl mb-5 mx-5 text-[#4664B2]">
            Nos Services
          </h1>
          <h1 className="text-base text-center mx-5">
            Plus besoin de se déplacer pour des démarches simples. L'ambassade
            vient à vous.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-12  px-5 py-10 max-w-5xl mx-auto">
          {programs.map((item) => {
            return (
              <Card
                key={item.id}
                onClick={() => navigate(`/programs/${item.slug}`)}
                className="transition-transform duration-300 hover:scale-105 bg-white drop-shadow-gray-100 rounded-xl overflow-hidden md:w-117.5"
              >
                <img
                  src={item.image}
                  alt="program_image"
                  className="block h-[250px] w-full  object-cover"
                />

                <CardHeader>
                  <CardTitle className="font-bold mx-3 text-xl">
                    {item.title}
                  </CardTitle>

                  <span className="mx-3 text-sm text-button-yellow">
                    {item.subtitle}
                  </span>

                  <CardDescription className="text-sm mx-3 my-3 text-black text-justify">
                    {item.description}
                  </CardDescription>
                </CardHeader>

                <Button
                  className="bg-[#4664B2] text-white mx-6 mb-4 rounded-lg"
                  onClick={() => navigate(`/programs/${item.slug}`)}
                >
                  {item.readMoreBtn}
                </Button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
}
export default OurServices;
