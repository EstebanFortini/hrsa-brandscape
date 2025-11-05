import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import tinexLogo from "@/assets/tinex-logo.png";
import tinexSyb18 from "@/assets/products/tinex-syb-18.png";
import tinexSyb920 from "@/assets/products/tinex-syb-920.png";

const Tinex = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const products = [
    {
      name: "Tinex SYB (18L)",
      image: tinexSyb18,
      category: "Thinner",
      description: "Dilución óptima para pinturas sintéticas",
      slug: "tinex-syb-18",
    },
    {
      name: "Tinex SYB (920cc)",
      image: tinexSyb920,
      category: "Thinner",
      description: "Presentación práctica para trabajos pequeños",
      slug: "tinex-syb-920",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Consulta enviada correctamente. Nos contactaremos pronto.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-tinex-gray/30 to-background">
          <div className="container mx-auto px-4 text-center">
            <img src={tinexLogo} alt="Tinex" className="h-20 md:h-24 mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              La dilución óptima. Thinners y disolventes de máxima calidad para pinturas sintéticas.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-tinex-blue">La dilución óptima</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Tinex ofrece la mejor relación de dilución para pinturas sintéticas, antióxidos y barnices. 
                Nuestros productos están diseñados para garantizar una aplicación perfecta y un acabado 
                profesional en cada proyecto.
              </p>
              <p className="text-lg text-muted-foreground">
                Con Tinex, obtén la viscosidad ideal para tus trabajos de pintura, asegurando adherencia, 
                nivelación y secado óptimos en todo momento.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Categorías</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-tinex-blue mb-2">Thinners</h3>
                <p className="text-muted-foreground">Para pinturas sintéticas y antióxidos</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-tinex-blue mb-2">Disolventes</h3>
                <p className="text-muted-foreground">Limpieza y dilución de barnices</p>
              </div>
            </div>
          </div>
        </section>

        {/* Catalog */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Catálogo de Productos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {products.map((product) => (
                <ProductCard key={product.slug} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 bg-tinex-blue text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Consultar por productos Tinex</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-white">Nombre</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white">Teléfono</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-white">Mensaje</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-white min-h-32"
                  />
                </div>
                <Button type="submit" variant="secondary" className="w-full">
                  Enviar consulta
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tinex;
