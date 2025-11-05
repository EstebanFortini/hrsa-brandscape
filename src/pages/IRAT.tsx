import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import iratLogo from "@/assets/irat-logo.png";
import iratDM02 from "@/assets/products/irat-dm02.png";
import iratN4 from "@/assets/products/irat-n4.png";

const IRAT = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const products = [
    {
      name: "IRAT DM-02",
      image: iratDM02,
      category: "Thinner Universal",
      description: "Diluyente de uso general para pinturas sintéticas",
      slug: "irat-dm02",
    },
    {
      name: "IRAT N°4",
      image: iratN4,
      category: "Disolvente Especial",
      description: "Para esmaltes horneables de alta calidad",
      slug: "irat-n4",
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
        <section className="py-20 bg-gradient-to-br from-irat-gray/20 to-background">
          <div className="container mx-auto px-4 text-center">
            <img src={iratLogo} alt="IRAT" className="h-20 md:h-24 mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Calidad desde 1970. Removedores, thinners y disolventes profesionales para la industria.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-irat-orange">La marca de confianza</h2>
              <p className="text-lg text-muted-foreground mb-4">
                IRAT es sinónimo de calidad en el mercado de removedores, thinners y disolventes. 
                Con más de 50 años de experiencia, desarrollamos productos que cumplen con los más 
                altos estándares de la industria química.
              </p>
              <p className="text-lg text-muted-foreground">
                Nuestros productos están formulados para ofrecer el mejor desempeño en aplicaciones 
                industriales y profesionales, garantizando resultados consistentes y confiables.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Categorías</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-irat-orange mb-2">Removedores</h3>
                <p className="text-muted-foreground">Eliminación eficaz de pinturas y barnices</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-irat-orange mb-2">Thinners</h3>
                <p className="text-muted-foreground">Dilución óptima para todo tipo de pinturas</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-irat-orange mb-2">Disolventes</h3>
                <p className="text-muted-foreground">Soluciones especializadas para aplicaciones industriales</p>
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
        <section className="py-16 bg-irat-orange text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Consultar por productos IRAT</h2>
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

export default IRAT;
