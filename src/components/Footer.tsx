import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hrsa-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Hugo Rodríguez y Cía. S.A.</h3>
            <p className="text-sm text-gray-300 mb-4">
              Innovación y calidad desde 1970
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-hrsa-orange">Nuestras Marcas</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/irat" className="hover:text-hrsa-orange transition-colors">
                  IRAT
                </Link>
              </li>
              <li>
                <Link to="/tinex" className="hover:text-hrsa-orange transition-colors">
                  Tinex
                </Link>
              </li>
              <li>
                <Link to="/roblex" className="hover:text-hrsa-orange transition-colors">
                  Roblex
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-hrsa-orange">Información</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/seguridad" className="hover:text-hrsa-orange transition-colors">
                  Seguridad
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-hrsa-orange transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link to="/legales" className="hover:text-hrsa-orange transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-hrsa-orange">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-hrsa-orange" />
                <span className="text-gray-300">info@hrsa.com.ar</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-hrsa-orange" />
                <span className="text-gray-300">+54 11 1234-5678</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-hrsa-orange" />
                <span className="text-gray-300">Buenos Aires, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hugo Rodríguez y Cía. S.A. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
