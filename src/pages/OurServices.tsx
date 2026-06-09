import Footer from "@/components/Footer";
import TopNavBar from "@/components/TopNavBar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GoPeople } from "react-icons/go";
import { TbBadgesFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const icon = <TbBadgesFilled className="text-[#4664B2]" size={20} />;

const services = [
  {
    id: 1,
    icon: icon,
    slug: "enregistrement_de_naissance",
    title: "Enregistrement de naissance",
    description:
      "L'enregistrement de naissance est l'enregistrement officiel de la naissance d'un enfant par l'État. Il établit son identité légale, donne accès aux services et le protège…",
    readMoreBtn: "En savoir plus >>",
  },
  {
    id: 2,
    icon: icon,
    slug: "rapatriement_du_corps",
    title: "Rapatriement du corps",
    description:
      "Un certificat de rapatriement de corps est un certificat qui facilite le processus de transfert des restes humains d'un territoire étranger vers le pays d'origine…",
    readMoreBtn: "En savoir plus >>",
  },
  {
    id: 3,
    icon: icon,
    slug: "internships",
    title: "Certificat de vie",
    description:
      "Un certificat de vie est délivré au demandeur pour attester de sa vie.",
    readMoreBtn: "En savoir plus >>",
  },
  {
    id: 4,
    icon: icon,
    slug: "nationalité",
    title: "Nationalité",
    description:
      "La nationalité gabonaise peut être demandée sur la base de la nationalité par naissance sur le territoire gabonais, par mariage, par adoption, par naturalisation et/ou par filiation gabonaise…",
    readMoreBtn: "En savoir plus >>",
  },
  {
    id: 5,
    icon: icon,
    slug: "carte_consulaire",
    title: "Carte consulaire",
    description:
      "Tous les gabonais résidant au Rwanda, peuvent faire leur demande de carte consulaire en ligne ci-dessous.",
    readMoreBtn: "En savoir plus >>",
  },
  {
    id: 6,
    icon: icon,
    slug: "passeport_electronique",
    title: "Passeport électronique",
    description:
      "L'ambassade collabore avec la Direction générale de l'immigration et de l'émigration pour la collecte des données biométriques des nouveaux demandeurs de passeport électronique, ainsi que pour…",
    readMoreBtn: "En savoir plus >>",
  },
  {
    id: 7,
    icon: icon,
    slug: "document_de_voyage_d_urgence",
    title: "Document de voyage d'urgence",
    description:
      "Le document de voyage d'urgence est un document de voyage d'urgence à sens unique destiné aux gabonais qui ont un besoin urgent de voyager et disposent d'un temps limité pour passer…",
    readMoreBtn: "En savoir plus >>",
  },
  {
    id: 8,
    icon: icon,
    slug: "carte_d_identitie_gabonaise",
    title: "Carte d'identité gabonaise",
    description:
      "La carte d'identité gabonaise est délivrée à un gabonais de 18 ans, enregistré dans la base de données nationale.",
    readMoreBtn: "En savoir plus >>",
  },
  {
    id: 9,
    icon: icon,
    slug: "legalisation_de_documents",
    title: "Légalisation de documents",
    description:
      "Toutes les légalisations de procurations et autres documents notariés par l'ambassade sont demandées via la plateforme Gabon Digital.",
    readMoreBtn: "En savoir plus >>",
  },
  {
    id: 10,
    icon: icon,
    slug: "lettre_de_non_objection",
    title: "Lettre de non-objection",
    description:
      "Une lettre de non-objection est un document légal délivré par tout type d'agence, d'institut ou d'organisation au Rwanda et notarié par…",
    readMoreBtn: "En savoir plus >>",
  },
  {
    id: 11,
    icon: icon,
    slug: "declaration_de_mariage",
    title: "Déclaration de mariage",
    description:
      "L'ambassade du Gabon à Kigali souhaite la bienvenue aux gabonais désireux de faire reconnaître leur mariage civil conformément à la loi gabonaise.",
    readMoreBtn: "En savoir plus >>",
  },
  {
    id: 12,
    icon: icon,
    slug: "presse_et_accreditation",
    title: "Presse et accréditation",
    description:
      "Pour l'accréditation de la presse étrangère, veuillez faire votre demande en ligne via le système de services électroniques.",
    readMoreBtn: "En savoir plus >>",
  },
  {
    id: 13,
    icon: icon,
    slug: "visa",
    title: "Visa",
    description:
      "À compter du 1er janvier 2025, les ressortissants de tous les pays reçoivent un visa à leur arrivée à l'aéroport international de Libreville et à toutes les frontières terrestres.",
    readMoreBtn: "En savoir plus >>",
  },
];

const DecorativePattern = ({ side }: { side: "left" | "right" }) => (
  <div
    className={`absolute ${side}-0 top-0 h-full w-12 pointer-events-none z-0 overflow-hidden opacity-10 ${
      side === "left" ? "ml-4" : "mr-4"
    }`}
  >
    <svg
      width="48"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ height: "100%" }}
    >
      <defs>
        <pattern
          id={`diamond-${side}`}
          x="0"
          y="0"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            fill="none"
            stroke="#000"
            strokeWidth="1.5"
            transform="rotate(45 12 12)"
          />
          <rect
            x="6"
            y="6"
            width="12"
            height="12"
            fill="none"
            stroke="#000"
            strokeWidth="1"
            transform="rotate(45 12 12)"
          />
          <circle cx="12" cy="12" r="1.5" fill="#000" />
        </pattern>
      </defs>
      <rect width="48" height="100%" fill={`url(#diamond-${side})`} />
    </svg>
  </div>
);

function OurServices() {
  const navigate = useNavigate();

  return (
    <>
      <TopNavBar />
      <section className="relative bg-[#FAFAFA] py-10 overflow-hidden">
        <DecorativePattern side="left" />
        <DecorativePattern side="right" />

        <div className="text-left relative z-10">
          <h1 className="font-bold text-center text-2xl md:text-3xl mb-5 m-auto text-[#4664B2]">
            All our services
          </h1>
          <h1 className="font-bold text-left text-2xl md:text-3xl mb-5 ml-28 text-[#4664B2]">
            Nos services pour vous
          </h1>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-y-2 py-10 max-w-7xl m-auto">
          {services.map((item) => (
            <Card
              key={item.id}
              onClick={() => navigate(`/services/${item.slug}`)}
              className="transition-transform duration-300 hover:scale-105 bg-white drop-shadow-gray-100 rounded-xl overflow-hidden md:w-103.5"
            >
              <CardHeader>
                <div>{item.icon}</div>
                <CardTitle className="font-bold mx-3 text-xl">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-sm mx-3 my-3 text-gray-500 text-justify">
                  {item.description}
                </CardDescription>
                <div className="flex items-center">
                  <div className="bg-button-yellow rounded-sm w-10 h-10 mx-3 flex items-center justify-center">
                    <GoPeople size={20} className="text-white" />
                  </div>
                </div>
              </CardHeader>
              <span
                className="text-[#4664B2] hover:text-[#364e8c] font-semibold text-sm cursor-pointer transition-colors inline-block mx-6 mb-4"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/besoins/${item.slug}`);
                }}
              >
                {item.readMoreBtn}
              </span>
            </Card>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default OurServices;
