import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import roblexLogo from "@/assets/roblex-logo.png";
import roblexBrick from "@/assets/products/roblex-brick.png";
import roblexHidro from "@/assets/products/roblex-hidro.png";

const Roblex = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const products = [
    {
      name: "Roblex Brick British",
      image: roblexBrick,
      category: "Protector para Ladrillos",
      description: "Recubrimiento poroso fungicida totalmente impermeable",
      slug: "roblex-brick-british",
    },
    {
      name: "Roblex Hidrolaca Caoba",
      image: roblexHidro,
      category: "Laca para Maderas",
      description: "Acabado satinado que resalta la veta natural",
      slug: "roblex-hidrolaca-caoba",
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
        <section className="py-20 bg-gradient-to-br from-roblex-green/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <img src={roblexLogo} alt="Roblex" className="h-28 md:h-32 mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Larga vida. Pinturas, lasur y barnices de máxima durabilidad para madera y ladrillos.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-roblex-green">Larga vida para tus proyectos</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Roblex es la marca líder en protección y acabado de maderas. Nuestros productos están 
                formulados para resistir las condiciones más exigentes, ofreciendo belleza y protección 
                duradera en cada aplicación.
              </p>
              <p className="text-lg text-muted-foreground">
                Desde lasur transparente que realza la veta natural hasta protectores impermeables para 
                ladrillos, Roblex ofrece soluciones completas para preservar y embellecer superficies.
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
                <h3 className="text-xl font-semibold text-roblex-green mb-2">Pinturas</h3>
                <p className="text-muted-foreground">Acabados de alta calidad para maderas</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-roblex-green mb-2">Lasur</h3>
                <p className="text-muted-foreground">Protección translúcida que resalta la veta</p>
              </div>
              <div className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-roblex-green mb-2">Barnices</h3>
                <p className="text-muted-foreground">Acabados brillantes y satinados duraderos</p>
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
        <section className="py-16 bg-roblex-green text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Consultar por productos Roblex</h2>
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

export default Roblex;
