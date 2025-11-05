import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const Legales = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-secondary to-background">
          <div className="container mx-auto px-4 text-center">
            <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Términos y Condiciones</h1>
            <p className="text-xl text-muted-foreground">
              Información legal y políticas de privacidad
            </p>
          </div>
        </section>

        {/* Legal Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              {/* Terms of Service */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Términos de Servicio</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Bienvenido a Hugo Rodríguez y Cía. S.A. Al acceder y utilizar este sitio web,
                    aceptas cumplir con los siguientes términos y condiciones de uso.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mt-6">Uso del Sitio</h3>
                  <p>
                    Este sitio web proporciona información sobre nuestros productos y servicios.
                    El contenido es solo para fines informativos y puede estar sujeto a cambios
                    sin previo aviso.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mt-6">
                    Propiedad Intelectual
                  </h3>
                  <p>
                    Todo el contenido, incluyendo textos, imágenes, logos y diseños, es propiedad
                    de Hugo Rodríguez y Cía. S.A. y está protegido por las leyes de propiedad
                    intelectual.
                  </p>
                </div>
              </div>

              {/* Privacy Policy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Política de Privacidad</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    En Hugo Rodríguez y Cía. S.A. respetamos tu privacidad y nos comprometemos a
                    proteger tus datos personales.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mt-6">
                    Recopilación de Información
                  </h3>
                  <p>
                    Recopilamos información que nos proporcionas voluntariamente a través de
                    formularios de contacto, incluyendo nombre, email y teléfono.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mt-6">Uso de la Información</h3>
                  <p>
                    Utilizamos la información recopilada para responder a tus consultas,
                    proporcionar información sobre nuestros productos y mejorar nuestros servicios.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mt-6">
                    Protección de Datos
                  </h3>
                  <p>
                    Implementamos medidas de seguridad para proteger tu información personal contra
                    acceso no autorizado, alteración o destrucción.
                  </p>
                </div>
              </div>

              {/* Cookies Policy */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Política de Cookies</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Este sitio web utiliza cookies para mejorar la experiencia del usuario y
                    analizar el tráfico del sitio.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mt-6">
                    ¿Qué son las cookies?
                  </h3>
                  <p>
                    Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo
                    cuando visitas un sitio web.
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mt-6">
                    Tipos de cookies que utilizamos
                  </h3>
                  <ul className="list-disc pl-6">
                    <li>Cookies esenciales: necesarias para el funcionamiento del sitio</li>
                    <li>Cookies analíticas: para entender cómo los usuarios interactúan con el sitio</li>
                  </ul>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-secondary/30 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Contacto Legal</h3>
                <p className="text-muted-foreground mb-4">
                  Si tenés preguntas sobre estos términos y condiciones o sobre nuestra política
                  de privacidad, podés contactarnos:
                </p>
                <p className="text-muted-foreground">
                  Email: <span className="text-primary">legal@hrsa.com.ar</span>
                </p>
                <p className="text-muted-foreground">
                  Teléfono: <span className="text-primary">+54 11 1234-5678</span>
                </p>
              </div>

              <div className="mt-8 text-sm text-muted-foreground">
                <p>Última actualización: {new Date().toLocaleDateString("es-AR")}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Legales;
