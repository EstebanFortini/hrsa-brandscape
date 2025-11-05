import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import IRAT from "./pages/IRAT";
import Tinex from "./pages/Tinex";
import Roblex from "./pages/Roblex";
import Seguridad from "./pages/Seguridad";
import Contacto from "./pages/Contacto";
import Producto from "./pages/Producto";
import Legales from "./pages/Legales";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/irat" element={<IRAT />} />
          <Route path="/tinex" element={<Tinex />} />
          <Route path="/roblex" element={<Roblex />} />
          <Route path="/seguridad" element={<Seguridad />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/producto/:slug" element={<Producto />} />
          <Route path="/legales" element={<Legales />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
