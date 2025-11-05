import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Download, Shield, Package, Droplet } from "lucide-react";
import iratDM02 from "@/assets/products/irat-dm02.png";

const Producto = () => {
  const { slug } = useParams();

  // Mock product data - in real app this would come from API/database
  const product = {
    name: "IRAT DM-02",
    image: iratDM02,
    category: "Thinner Universal",
    brand: "IRAT",
    description:
      "Diluyente de uso general formulado especialmente para la dilución de pinturas sintéticas, antióxidos y barnices. Ofrece excelente poder de dilución y evaporación controlada.",
    uses: [
      "Dilución de pinturas sintéticas",
      "Dilución de antióxidos",
      "Dilución de barnices",
      "Limpieza de herramientas y superficies",
    ],
    formats: ["1 Litro", "4 Litros", "18 Litros", "200 Litros"],
    performance: "Rendimiento: 1 litro diluye hasta 4 litros de pintura",
    safetyIcons: [
      { icon: Shield, text: "Inflamable" },
      { icon: Droplet, text: "Evitar contacto con piel" },
    ],
  };

  const relatedProducts = [
    {
      name: "IRAT N°4",
      image: iratDM02,
      category: "Disolvente Especial",
      slug: "irat-n4",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 py-4">
          <div className="container mx-auto px-4">
            <div className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">
                Inicio
              </Link>
              <span className="mx-2">/</span>
              <Link to={`/${product.brand.toLowerCase()}`} className="hover:text-primary">
                {product.brand}
              </Link>
              <span className="mx-2">/</span>
              <span>{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Detail */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Product Image */}
              <div className="bg-secondary rounded-lg p-12 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-96 w-auto object-contain"
                />
              </div>

              {/* Product Info */}
              <div>
                <div className="text-sm font-medium text-primary mb-2">{product.category}</div>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-lg text-muted-foreground mb-6">{product.description}</p>

                {/* Uses */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3">Usos y Aplicaciones</h3>
                  <ul className="space-y-2">
                    {product.uses.map((use, index) => (
                      <li key={index} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Formats */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Package className="h-5 w-5" />
                    Presentaciones
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.formats.map((format, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-secondary rounded-full text-sm font-medium"
                      >
                        {format}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Performance */}
                <div className="mb-6 p-4 bg-secondary/50 rounded-lg">
                  <p className="font-medium">{product.performance}</p>
                </div>

                {/* Safety Icons */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-3">Seguridad</h3>
                  <div className="flex gap-4">
                    {product.safetyIcons.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <item.icon className="h-5 w-5 text-primary" />
                        {item.text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Downloads */}
                <div className="flex gap-4 mb-8">
                  <Button variant="outline" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Ficha Técnica
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Download className="mr-2 h-4 w-4" />
                    Hoja de Seguridad
                  </Button>
                </div>

                {/* CTA */}
                <Button size="lg" className="w-full">
                  Consultar por este producto
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-20 bg-secondary/30">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Productos Relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.slug} {...relatedProduct} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Producto;
