import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, AlertTriangle, Eye, Wind, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Seguridad = () => {
  const bestPractices = [
    {
      icon: Eye,
      title: "Protección Ocular",
      description: "Usar siempre gafas de seguridad al manipular productos químicos",
    },
    {
      icon: Wind,
      title: "Ventilación",
      description: "Trabajar en áreas bien ventiladas para evitar inhalación de vapores",
    },
    {
      icon: AlertTriangle,
      title: "Almacenamiento",
      description: "Mantener alejado de fuentes de calor, chispas y llamas",
    },
    {
      icon: Shield,
      title: "Equipo de Protección",
      description: "Utilizar guantes y ropa adecuada durante la aplicación",
    },
  ];

  const safetyDocuments = [
    { name: "IRAT DM-02", category: "Thinner" },
    { name: "IRAT N°4", category: "Disolvente" },
    { name: "Tinex SYB", category: "Thinner" },
    { name: "Roblex Brick British", category: "Protector" },
    { name: "Roblex Hidrolaca", category: "Laca" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-secondary to-background">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
              <Shield className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Seguridad</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tu seguridad es nuestra prioridad. Información esencial para el manejo seguro de nuestros productos.
            </p>
          </div>
        </section>

        {/* Best Practices */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Buenas Prácticas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {bestPractices.map((practice, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <practice.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{practice.title}</h3>
                  <p className="text-muted-foreground">{practice.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Safety Guidelines */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Recomendaciones Generales</h2>
              <div className="bg-white p-8 rounded-lg space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Antes de usar</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Leer completamente la etiqueta y ficha técnica del producto</li>
                    <li>• Asegurarse de contar con el equipo de protección adecuado</li>
                    <li>• Verificar que el área de trabajo esté bien ventilada</li>
                    <li>• Mantener alejado de niños y mascotas</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Durante el uso</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• No fumar ni acercar llamas o chispas</li>
                    <li>• Evitar el contacto con la piel y ojos</li>
                    <li>• No comer ni beber durante la aplicación</li>
                    <li>• Mantener los envases cerrados cuando no se usen</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Después del uso</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Lavar manos y cara con abundante agua y jabón</li>
                    <li>• Almacenar en lugar fresco y seco</li>
                    <li>• Cerrar herméticamente los envases</li>
                    <li>• Desechar residuos según normativa local</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Centers */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Centros de Asistencia</h2>
              <div className="bg-red-50 border-2 border-red-200 p-8 rounded-lg">
                <AlertTriangle className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-red-800">En caso de emergencia</h3>
                <p className="text-lg mb-6 text-red-700">
                  Centro Nacional de Intoxicaciones
                </p>
                <p className="text-3xl font-bold text-red-800 mb-2">0800-333-0160</p>
                <p className="text-muted-foreground">Disponible las 24 horas</p>
              </div>
            </div>
          </div>
        </section>

        {/* HDS/MSDS Index */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Hojas de Seguridad (HDS/MSDS)</h2>
              <p className="text-center text-muted-foreground mb-8">
                Descargá las hojas de datos de seguridad de nuestros productos
              </p>
              <div className="space-y-4">
                {safetyDocuments.map((doc, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg flex items-center justify-between hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <FileText className="h-8 w-8 text-primary" />
                      <div>
                        <h3 className="font-semibold">{doc.name}</h3>
                        <p className="text-sm text-muted-foreground">{doc.category}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Descargar HDS
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Seguridad;
