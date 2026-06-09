import Home from "@/pages/Home";
import LoginUpPage from "@/pages/LoginPage";
import NotFound from "@/pages/NotFound";
import OurServices from "@/pages/OurServices";
import SignUpPage from "@/pages/SignUpPage";
import TravelInfosPage from "@/pages/TravelInfosPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginUpPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/nos_services" element={<Home />} />
        <Route path="/besoins/services" element={<OurServices />} />
        <Route
          path="/besoins/informations_touristiques"
          element={<TravelInfosPage />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
