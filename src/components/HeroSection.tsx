
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-dogLight overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20 z-0" 
           style={{ backgroundImage: "url('/hero-bg.jpg')" }}></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dogPrimary mb-6">
            Des chiots d'exception, <br/> 100% belges
          </h1>
          
          <p className="text-lg md:text-xl text-dogDark mb-8 max-w-2xl mx-auto">
            Découvrez notre sélection de chiots belges élevés avec amour, 
            pour vous offrir un compagnon en parfaite santé et bien sociabilisé.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-dogPrimary hover:bg-dogDark text-white">
              <Link to="/puppies">
                Voir nos chiots disponibles
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-dogPrimary text-dogPrimary hover:bg-dogPrimary hover:text-white">
              <Link to="/contact">
                Nous contacter
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative paw prints */}
      <div className="absolute bottom-4 left-4 text-4xl opacity-20 animate-bounce-slight">
        🐾
      </div>
      <div className="absolute top-4 right-4 text-4xl opacity-20 animate-bounce-slight" style={{ animationDelay: "1s" }}>
        🐾
      </div>
    </div>
  );
};

export default HeroSection;
