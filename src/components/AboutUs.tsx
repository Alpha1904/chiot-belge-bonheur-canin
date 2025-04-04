
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="page-section bg-dogLight">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="section-title">Notre passion, votre bonheur</h2>
            <p className="mb-6">
              Bienvenue chez Bonheur Canin, élevage 100% belge dédié à la reproduction responsable 
              et à la socialisation précoce de chiots belges. Depuis plus de 10 ans, 
              nous nous engageons à élever des chiots en parfaite santé physique et mentale.
            </p>
            
            <p className="mb-6">
              Notre philosophie repose sur plusieurs piliers essentiels :
            </p>
            
            <ul className="space-y-3 mb-8 paw-bullet">
              <li>
                <strong className="text-dogPrimary">Santé et bien-être</strong> - Tous nos reproducteurs sont testés pour les maladies génétiques spécifiques à leur race.
              </li>
              <li>
                <strong className="text-dogPrimary">Socialisation précoce</strong> - Nos chiots grandissent dans un environnement familial et sont exposés à différents stimuli.
              </li>
              <li>
                <strong className="text-dogPrimary">Soutien continu</strong> - Nous restons disponibles pour vous conseiller tout au long de la vie de votre chien.
              </li>
              <li>
                <strong className="text-dogPrimary">Passion et expertise</strong> - Notre connaissance approfondie des races belges nous permet de vous guider vers le compagnon idéal.
              </li>
            </ul>
            
            <Button asChild className="bg-dogPrimary hover:bg-dogDark">
              <Link to="/contact">
                Prendre rendez-vous pour une visite
              </Link>
            </Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="/about-us.jpg" 
                alt="Éleveur avec ses chiens" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-5 -left-5 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-dogPrimary font-semibold">Plus de 10 ans d'expérience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
