import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "@/components/site/SiteLayout";
import Index from "./pages/Index";
import Paslaugos from "./pages/Paslaugos";
import ServicePage from "./pages/ServicePage";
import Galerija from "./pages/Galerija";
import Medziagos from "./pages/Medziagos";
import Kontaktai from "./pages/Kontaktai";
import NotFound from "./pages/NotFound";
import { services } from "@/lib/services";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Index />} />
        <Route path="/paslaugos" element={<Paslaugos />} />
        {services.map((s) => (
          <Route key={s.slug} path={`/${s.slug}`} element={<ServicePage />} />
        ))}
        <Route path="/galerija" element={<Galerija />} />
        <Route path="/medziagos" element={<Medziagos />} />
        <Route path="/kontaktai" element={<Kontaktai />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
