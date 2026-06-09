import { Link, useNavigate } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { Heart, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

import gbn_connect_logo from "@/assets/gbn_connect_logo.png";
import { FiUserPlus } from "react-icons/fi";
import { CiLogin } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";

const navItems = [
  {
    label: "Centre d'assistance",
    to: "/centre_d_assistance",
    icon: <IoIosHelpCircleOutline />,
  },
  { label: "Connexion", to: "/login", icon: <CiLogin /> },
  { label: "Inscription", to: "/signup", icon: <FiUserPlus /> },
];

function TopNavBar() {
  const navigate = useNavigate();

  return (
    <header className=" fixed block top-0 z-50 w-full h-20  bg-background">
      {/* ===== Mobile / Tablet ===== */}
      <div className="flex md:hidden items-center justify-between px-4 h-full">
        <div className="flex items-center gap-2">
          <img
            src={gbn_connect_logo}
            alt="hameau_des_jeunes_logo"
            className="h-full w-[150px] object-contain block shrink-0"
          />
          <p className="font-heading text-lg text-[#4664B2] font-bold leading-none whitespace-nowrap">
            Gabon Connect
          </p>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu size={26} />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-72">
            <nav className="flex flex-col gap-6 mt-10 text-[#4664B2]">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  className="font-heading text-lg text-center hover:bg-amber-200 rounded-md py-2"
                >
                  {item.label}
                </Link>
              ))}

              <Button
                onClick={() => navigate("/donate")}
                className="bg-button-yellow mt-6 mx-5 hover:bg-amber-500"
              >
                <div className="flex items-center gap-2">
                  <Heart size={18} />
                  Donate
                </div>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* ===== Desktop ===== */}
      <div className="hidden md:flex justify-between h-full ">
        <div
          className="flex items-center justify-center"
          onClick={() => navigate("/")}
        >
          <img
            src={gbn_connect_logo}
            alt="gabon_connect_logo"
            className="h-[120px] w-full object-cover"
          />
        </div>
        <NavigationMenu className="flex items-center justify-center gap-10 h-20 text-[#4664B2] font-semibold">
          <NavigationMenuList className="flex items-center gap-10">
            {navItems.map((item) => (
              <NavigationMenuItem
                key={item.label}
                className="font-heading cursor-pointer hover:font-bold hover:bg-gray-100 p-2 rounded-sm"
              >
                <Link to={item.to}>
                  <div className="flex items-center justify-center gap-3">
                    {item.icon}
                    {item.label}
                  </div>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>

          <Button
            onClick={() => navigate("/login")}
            className="bg-button-yellow"
          >
            <div className="flex items-center gap-2">
              <Heart size={18} />
              Donate
            </div>
          </Button>
        </NavigationMenu>
      </div>
    </header>
  );
}
export default TopNavBar;
