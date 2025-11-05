import { Link } from "react-router-dom";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

interface ProductCardProps {
  name: string;
  image: string;
  category: string;
  description?: string;
  slug: string;
}

const ProductCard = ({ name, image, category, description, slug }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      <Link to={`/producto/${slug}`}>
        <div className="aspect-square bg-secondary p-8 flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="text-xs font-medium text-primary mb-2">{category}</div>
        <Link to={`/producto/${slug}`}>
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        {description && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        )}
        <div className="flex gap-2">
          <Link to={`/producto/${slug}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full">
              Ver detalles
            </Button>
          </Link>
          <Button variant="ghost" size="sm" className="px-3">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
