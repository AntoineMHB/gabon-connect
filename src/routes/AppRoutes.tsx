import Home from "@/pages/Home";
import LoginUpPage from "@/pages/LoginPage";
import SignUpPage from "@/pages/SignUpPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginUpPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRoutes;
