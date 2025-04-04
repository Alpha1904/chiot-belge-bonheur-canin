
import HeroSection from "@/components/HeroSection";
import AvailablePuppies from "@/components/AvailablePuppies";
import AboutUs from "@/components/AboutUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Available Puppies Section */}
        <AvailablePuppies />
        
        {/* About Us Section */}
        <AboutUs />
        
        {/* Breed Feature Section */}
        <section className="page-section bg-white">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Races 100% belges</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Nous sommes spécialisés dans l'élevage des races canines originaires de Belgique,
                connues mondialement pour leurs qualités exceptionnelles.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-dogLight rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src="/breeds/malinois.jpg" 
                  alt="Berger Belge Malinois" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dogPrimary mb-2">Berger Belge</h3>
                  <p className="text-sm mb-4">
                    Le Berger Belge possède quatre variétés : Malinois, Tervueren, Groenendael et Laekenois. 
                    Intelligent, travailleur et fidèle, c'est un chien polyvalent et énergique.
                  </p>
                  <Button asChild variant="outline" className="w-full border-dogPrimary text-dogPrimary hover:bg-dogPrimary hover:text-white">
                    <Link to="/breeds">
                      En savoir plus
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-dogLight rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src="/breeds/schipperke.jpg" 
                  alt="Schipperke" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dogPrimary mb-2">Schipperke</h3>
                  <p className="text-sm mb-4">
                    Petit chien noir plein de caractère, le Schipperke était à l'origine un chien de péniche. 
                    Vif, alerte et joueur, il s'adapte parfaitement à la vie urbaine.
                  </p>
                  <Button asChild variant="outline" className="w-full border-dogPrimary text-dogPrimary hover:bg-dogPrimary hover:text-white">
                    <Link to="/breeds">
                      En savoir plus
                    </Link>
                  </Button>
                </div>
              </div>
              
              <div className="bg-dogLight rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img 
                  src="/breeds/bouvier.jpg" 
                  alt="Bouvier des Flandres" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-dogPrimary mb-2">Bouvier des Flandres</h3>
                  <p className="text-sm mb-4">
                    Ce chien robuste était autrefois utilisé pour la conduite des troupeaux. 
                    Calme, équilibré et courageux, il est aujourd'hui un excellent chien de famille.
                  </p>
                  <Button asChild variant="outline" className="w-full border-dogPrimary text-dogPrimary hover:bg-dogPrimary hover:text-white">
                    <Link to="/breeds">
                      En savoir plus
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <TestimonialsSection />
        
        {/* Care & Services Section */}
        <section className="page-section bg-dogLight">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="section-title mx-auto">Notre engagement</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                En plus de notre élevage de qualité, nous vous accompagnons tout au long 
                de la vie de votre compagnon avec des services adaptés.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-dogTertiary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Check className="h-6 w-6 text-dogPrimary" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-3">Suivi vétérinaire</h3>
                <p className="text-center text-muted-foreground text-sm">
                  Tous nos chiots sont examinés, vaccinés et vermifugés avant leur départ. 
                  Un carnet de santé détaillé vous est remis.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-dogTertiary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Check className="h-6 w-6 text-dogPrimary" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-3">Conseils personnalisés</h3>
                <p className="text-center text-muted-foreground text-sm">
                  Nous vous aidons à choisir le chiot qui convient le mieux à votre mode de vie 
                  et vous conseillons sur son éducation.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-dogTertiary rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Check className="h-6 w-6 text-dogPrimary" />
                </div>
                <h3 className="text-lg font-semibold text-center mb-3">Suivi post-adoption</h3>
                <p className="text-center text-muted-foreground text-sm">
                  Nous restons disponibles pour répondre à vos questions et vous accompagner 
                  après l'adoption de votre chiot.
                </p>
              </div>
            </div>
            
            <div className="mt-10 text-center">
              <Button asChild className="bg-dogPrimary hover:bg-dogDark">
                <Link to="/care">
                  Découvrir nos guides de soins
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Contact CTA */}
        <section className="py-16 bg-dogPrimary text-white">
          <div className="container">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Une question ? Contactez-nous</h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Nous sommes à votre disposition pour répondre à toutes vos questions 
                concernant nos chiots ou notre élevage.
              </p>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-dogPrimary">
                <Link to="/contact">
                  Nous contacter
                </Link>
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
