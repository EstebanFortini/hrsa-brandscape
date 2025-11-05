import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import hrsaLogo from "@/assets/hrsa-logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={hrsaLogo} alt="HRSA" className="h-8 md:h-10" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link to="/irat" className="text-sm font-medium hover:text-irat-orange transition-colors">
              IRAT
            </Link>
            <Link to="/tinex" className="text-sm font-medium hover:text-tinex-blue transition-colors">
              Tinex
            </Link>
            <Link to="/roblex" className="text-sm font-medium hover:text-roblex-green transition-colors">
              Roblex
            </Link>
            <Link to="/seguridad" className="text-sm font-medium hover:text-primary transition-colors">
              Seguridad
            </Link>
            <Link to="/contacto">
              <Button size="sm" className="bg-primary hover:bg-primary/90">
                Contacto
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                to="/irat"
                className="text-sm font-medium hover:text-irat-orange"
                onClick={() => setIsMenuOpen(false)}
              >
                IRAT
              </Link>
              <Link
                to="/tinex"
                className="text-sm font-medium hover:text-tinex-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                Tinex
              </Link>
              <Link
                to="/roblex"
                className="text-sm font-medium hover:text-roblex-green"
                onClick={() => setIsMenuOpen(false)}
              >
                Roblex
              </Link>
              <Link
                to="/seguridad"
                className="text-sm font-medium hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Seguridad
              </Link>
              <Link to="/contacto" onClick={() => setIsMenuOpen(false)}>
                <Button size="sm" className="w-full bg-primary hover:bg-primary/90">
                  Contacto
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
