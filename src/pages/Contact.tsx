
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-dogLight py-12">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-dogPrimary mb-2">Contactez-nous</h1>
                <p className="text-muted-foreground mb-8">
                  Nous sommes à votre disposition pour répondre à toutes vos questions
                </p>
                
                <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
                  <h2 className="text-xl font-semibold mb-4">Nous contacter</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-dogPrimary mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Adresse</p>
                        <p className="text-muted-foreground">123 Rue des Éleveurs, 1000 Bruxelles, Belgique</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-dogPrimary mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Téléphone</p>
                        <p className="text-muted-foreground">+32 123 456 789</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-dogPrimary mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">contact@bonheur-canin.be</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-dogPrimary mr-3 mt-1" />
                      <div>
                        <p className="font-medium">Horaires d'ouverture</p>
                        <div className="text-muted-foreground">
                          <p>Lundi - Vendredi : 10h00 - 18h00</p>
                          <p>Samedi : 10h00 - 16h00</p>
                          <p>Dimanche : Fermé</p>
                          <p className="text-sm italic mt-1">Visites de l'élevage uniquement sur rendez-vous</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h2 className="text-xl font-semibold mb-4">Comment nous trouver</h2>
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    {/* Insert Google Maps iframe here in a real project */}
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                      Carte Google Maps
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="text-xl font-semibold mb-6">Formulaire de contact</h2>
                <ContactForm />
                <div className="mt-6 text-center text-sm text-muted-foreground">
                  <p>
                    Nous vous répondrons dans les plus brefs délais, généralement sous 24 à 48 heures.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
