import hero_image_1 from "@/assets/gabon_flags.jpg";
import hero_image_2 from "@/assets/gabon_flag_ks.jpg";
import { useEffect, useState } from "react";

import { Input } from "./ui/input";
import { CiSearch } from "react-icons/ci";

const heroImages = [hero_image_1, hero_image_2];

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
