import hero_image_1 from "@/assets/gabon_flags.jpg";
import hero_image_2 from "@/assets/gabon_flag_ks.jpg";
import hero_image_3 from "@/assets/preso_gabon.jpg";

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

import { useEffect, useState } from "react";

import { Input } from "./ui/input";
import { CiSearch } from "react-icons/ci";

const heroImages = [
  visit_gbn_11,
  visit_gbn_12,
  visit_gbn_13,
  visit_gbn_14,
  visit_gbn_15,
  visit_gbn_1,
  visit_gbn_2,
  visit_gbn_3,
  visit_gbn_4,
  hero_image_1,
  hero_image_2,
  hero_image_3,
  visit_gbn_16,
  visit_gbn_11,
  visit_gbn_12,
  visit_gbn_13,
  visit_gbn_14,
  visit_gbn_15,
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

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  //   const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <section className="w-full h-[400px] sm:h-[600px] md:h-[500px] lg:h-[630px] relative overflow-hidden">
        {/* Hero images */}
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
            alt="Hero"
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-full items-center justify-center text-white px-4">
          <div className="max-w-4xl text-center">
            {/* Main heading */}
            <h1
              className="pt-10
        font-heading font-bold
        leading-tight sm:leading-tight md:leading-snug
        text-2xl
        sm:text-2xl
        md:text-3xl
        lg:text-6xl
      "
            >
              Bienvenue <br className="hidden sm:block" />
            </h1>

            {/* Subtitle */}
            <p
              className="
        mt-4 sm:mt-6
        text-sm
        sm:text-base
        md:text-lg
        font-sans
        max-w-xl
        mx-auto
      "
            >
              Accédez le Gabon de partout!
            </p>

            {/* CTA buttons */}
            <div
              className="
        my-3 sm:my-3 md:my-5
        flex items-center
        justify-center
        gap-4
      "
            >
              {/* <Button
                onClick={() => navigate("/donate")}
                className="w-auto sm:w-auto text-white bg-button-yellow hover:bg-amber-500"
              >
                Give a Child a Future
              </Button>

              <Button
                onClick={() => navigate("/about")}
                variant="outline"
                className="
          w-auto 
          border-button-yellow
          bg-transparent
          text-button-yellow
          hover:bg-button-yellow
          hover:text-white  
        "
              >
                Learn More
              </Button> */}
              <div className="relative">
                <CiSearch
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={18}
                />
                <Input
                  placeholder="Rechercher un service"
                  className="bg-white pl-9 w-96 text-black shadow-md shadow-amber-100 hover:shadow-lg hover:shadow-black/20 transition-shadow duration-200"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default HeroSection;
