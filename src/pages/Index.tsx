import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandCard from "@/components/BrandCard";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Shield, Award, Lightbulb, Users, MessageCircle } from "lucide-react";
import iratLogo from "@/assets/irat-logo.png";
import tinexLogo from "@/assets/tinex-logo.png";
import roblexLogo from "@/assets/roblex-logo.png";
import iratDM02 from "@/assets/products/irat-dm02.png";
import iratN4 from "@/assets/products/irat-n4.png";
import tinexSyb18 from "@/assets/products/tinex-syb-18.png";
import tinexSyb920 from "@/assets/products/tinex-syb-920.png";
import roblexBrick from "@/assets/products/roblex-brick.png";
import roblexHidro from "@/assets/products/roblex-hidro.png";
import fabricaEntrance from "@/assets/fabrica-entrance.jpg";
import dameroIrat from "@/assets/damero-irat.png";

const Index = () => {
  const brands = [
    {
      name: "IRAT",
      logo: iratLogo,
      description: "Removedores, thinners y disolventes de calidad profesional",
      link: "/irat",
      bgColor: "bg-white",
      hoverColor: "bg-irat-orange",
    },
    {
      name: "Tinex",
      logo: tinexLogo,
      description: "La dilución óptima para pinturas sintéticas y barnices",
      link: "/tinex",
      bgColor: "bg-white",
      hoverColor: "bg-tinex-blue",
    },
    {
      name: "Roblex",
      logo: roblexLogo,
      description: "Pinturas, lasur y barnices de larga vida para maderas",
      link: "/roblex",
      bgColor: "bg-white",
      hoverColor: "bg-roblex-green",
    },
  ];

  const featuredProducts = [
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

  const strengths = [
    {
      icon: Award,
      title: "Calidad Profesional",
      description: "Productos formulados con los más altos estándares de la industria",
    },
    {
      icon: Shield,
      title: "Experiencia desde 1970",
      description: "Más de 50 años desarrollando soluciones químicas confiables",
    },
    {
      icon: Lightbulb,
      title: "Innovación Constante",
      description: "Investigación y desarrollo de nuevas fórmulas y tecnologías",
    },
    {
      icon: Users,
      title: "Confianza del Mercado",
      description: "Elegidos por profesionales y empresas líderes",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-32 md:py-40 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${fabricaEntrance})` }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-primary/40" />
          
          {/* Damero Pattern Border Top */}
          <div 
            className="absolute top-0 left-0 right-0 h-16 bg-repeat-x opacity-90"
            style={{ 
              backgroundImage: `url(${dameroIrat})`,
              backgroundSize: 'auto 100%'
            }}
          />
          
          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
                Innovación y calidad desde 1970
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in">
                Removedores, thinners y disolventes de calidad profesional
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-lg px-8 animate-scale-in shadow-xl hover:shadow-2xl transition-all"
              >
                Descubrir marcas
              </Button>
            </div>
          </div>
          
          {/* Damero Pattern Border Bottom */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-16 bg-repeat-x opacity-90"
            style={{ 
              backgroundImage: `url(${dameroIrat})`,
              backgroundSize: 'auto 100%'
            }}
          />
        </section>

        {/* Brand Launcher */}
        <section className="py-20 bg-background relative">
          {/* Decorative Damero on the side */}
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-48 bg-repeat-y opacity-20"
            style={{ 
              backgroundImage: `url(${dameroIrat})`,
              backgroundSize: '100% auto',
              transform: 'translateY(-50%) rotate(90deg)'
            }}
          />
          <div 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-48 bg-repeat-y opacity-20"
            style={{ 
              backgroundImage: `url(${dameroIrat})`,
              backgroundSize: '100% auto',
              transform: 'translateY(-50%) rotate(90deg)'
            }}
          />
          
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Nuestras Marcas</h2>
              <p className="text-lg text-muted-foreground animate-fade-in">
                Tres marcas líderes, una tradición de excelencia
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {brands.map((brand) => (
                <BrandCard key={brand.name} {...brand} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Productos Destacados</h2>
              <p className="text-lg text-muted-foreground">
                Soluciones profesionales para cada necesidad
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {featuredProducts.map((product) => (
                <ProductCard key={product.slug} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* Strengths */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegirnos?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {strengths.map((strength, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <strength.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{strength.title}</h3>
                  <p className="text-muted-foreground">{strength.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white relative overflow-hidden">
          {/* Damero Pattern Background */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{ 
              backgroundImage: `url(${dameroIrat})`,
              backgroundSize: '120px auto',
              backgroundRepeat: 'repeat'
            }}
          />
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Necesitás asesoramiento?</h2>
            <p className="text-xl mb-8 opacity-90">
              Nuestro equipo está listo para ayudarte a encontrar el producto ideal
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 hover-scale"
                onClick={() => window.location.href = "/contacto"}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Contactar
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 hover-scale"
                onClick={() => window.open("https://wa.me/541112345678", "_blank")}
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
