import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ArrowRight } from "lucide-react";

interface BrandCardProps {
  name: string;
  logo: string;
  description: string;
  link: string;
  bgColor: string;
  hoverColor: string;
}

const BrandCard = ({ name, logo, description, link, bgColor, hoverColor }: BrandCardProps) => {
  return (
    <Card className={`group overflow-hidden transition-all duration-300 hover:shadow-xl ${bgColor}`}>
      <div className="p-8 flex flex-col items-center text-center h-full">
        <div className="mb-6 h-24 flex items-center justify-center">
          <img src={logo} alt={name} className="max-h-20 w-auto" />
        </div>
        <p className="text-sm text-foreground/80 mb-6 flex-grow">{description}</p>
        <Link to={link} className="w-full">
          <Button
            variant="outline"
            className={`w-full group-hover:${hoverColor} group-hover:text-white transition-all`}
          >
            Ver productos
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </Card>
  );
};

export default BrandCard;
