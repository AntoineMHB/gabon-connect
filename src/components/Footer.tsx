import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import gabonConnectLogo from "@/assets/gabon_connect_rw_logo.png";
import { IoLocationOutline } from "react-icons/io5";
import { CgMail } from "react-icons/cg";
import { LuPhone } from "react-icons/lu";

function Footer() {
  return (
    <>
      <footer className="bg-[#4664B2] text-white pt-12 pb-6 sm:pt-16 sm:pb-8">
        <div className="container px-15">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 mb-12 sm:mb-16">
            <div>
              <div className="grid grid-cols-2 ">
                <img
                  src={gabonConnectLogo}
                  alt="gabon_connect_logo"
                  className="h-full w-full object-cover"
                />

                <div className="mt-5">
                  <h1 className="font-sans font-bold text-base ">Le Gabon</h1>
                  <h1 className="font-sans font-light">au Rwanda</h1>
                </div>
              </div>

              <p className="mt-3 text-white mb-4 text-sm sm:text-sm">
                L'ambassade dans votre poche
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
                Liens rapides
              </h3>
              <ul className="space-y-2">
                <li>
                  <ScrollLink
                    to="/"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-white font-light hover:font-bold transition-colors cursor-pointer text-sm sm:text-sm"
                  >
                    Centre d'assistance
                  </ScrollLink>
                </li>
                <li>
                  <RouterLink
                    to="/about"
                    className="text-white font-light hover:font-bold transition-colors cursor-pointer text-sm sm:text-sm"
                  >
                    Inscription
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="/impact"
                    className="text-white font-light hover:font-bold transition-colors cursor-pointer text-sm sm:text-sm"
                  >
                    Connexion
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="/impact"
                    className="text-white font-light hover:font-bold transition-colors cursor-pointer text-sm sm:text-sm"
                  >
                    Nos services
                  </RouterLink>
                </li>

                <li>
                  <RouterLink
                    to="/contact"
                    className="text-white font-light hover:font-bold transition-colors cursor-pointer text-sm sm:text-sm"
                  >
                    Contact
                  </RouterLink>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
                Contactez-nous
              </h3>
              <ul className="space-y-2">
                <li>
                  <div className="flex gap-3">
                    <IoLocationOutline className="text-button-yellow" />
                    <h2 className="text-sm font-light">Kigali, Nyarutarama</h2>
                  </div>
                </li>
                <li>
                  <div className="flex gap-3">
                    <CgMail className="text-button-yellow" />
                    <h2 className="text-sm font-light">
                      ambassadegabonrw@gmail.com
                    </h2>
                  </div>
                </li>
                <li>
                  <div className="flex gap-3">
                    <LuPhone className="text-button-yellow" />
                    <h2 className="text-sm font-light">+250 784 758 356</h2>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
                S'impliquer
              </h3>
              <ul className="space-y-2">
                <li>
                  <RouterLink
                    to="/donate"
                    className="text-white font-light hover:font-bold transition-colors cursor-pointer text-sm sm:text-sm"
                  >
                    Faire un don
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="/partnerWithUs"
                    className="text-white font-light hover:font-bold transition-colors cursor-pointer text-sm sm:text-sm"
                  >
                    Devenez partenaire avec nous
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    to="/volunteer"
                    className="text-white font-light hover:font-bold transition-colors cursor-pointer text-sm sm:text-sm"
                  >
                    Faire du bénévolat
                  </RouterLink>
                </li>
              </ul>
            </div>

            {/* <div>
              <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
                Follow Us
              </h3>
              <div className="flex gap-3 flex-wrap">
                {socialMediaList.length > 0 ? (
                  socialMediaList.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                      className="text-white hover:text-yellow-400 transition-colors text-xl"
                    >
                      <img
                        src={social.icon}
                        alt={social.name}
                        className="w-6 h-6 object-contain"
                      />
                    </a>
                  ))
                ) : (
                  // Fallback to hardcoded icons if API returns nothing
                  <div className="flex gap-3">
                    <FaFacebook />
                    <FaLinkedin />
                    <FaXTwitter />
                    <FaInstagram />
                  </div>
                )}
              </div>
            </div> */}
          </div>

          <div className="flex gap-7 justify-center">
            <RouterLink
              to="/volunteer"
              className="text-white font-light hover:font-bold transition-colors cursor-pointer text-sm sm:text-sm"
            >
              Conditions générales
            </RouterLink>
            <RouterLink
              to="/volunteer"
              className="text-white font-light hover:font-bold transition-colors cursor-pointer text-sm sm:text-sm"
            >
              Politique de confidentialité
            </RouterLink>
          </div>

          <div className="flex flex-col md:flex-row  items-center justify-center">
            <p className="my-7 text-sm font-light">
              Copyright &copy; {new Date().getFullYear()} by Gabon Connect
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
