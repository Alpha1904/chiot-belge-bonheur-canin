
import { useEffect, useState } from "react";
import { puppies } from "@/data/puppies";
import PuppyCard from "./PuppyCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AvailablePuppies = ({ limit = 3 }: { limit?: number }) => {
  const [availablePuppies, setAvailablePuppies] = useState(puppies.filter(p => p.available));

  return (
    <section className="page-section bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title mx-auto">Nos chiots disponibles</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos adorables chiots à la recherche d'un foyer aimant. 
            Tous nos chiots sont élevés dans un environnement familial, 
            socialisés et suivis par notre vétérinaire.
          </p>
        </div>
        
        {availablePuppies.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {availablePuppies.slice(0, limit).map(puppy => (
                <PuppyCard key={puppy.id} puppy={puppy} />
              ))}
            </div>
            
            {availablePuppies.length > limit && (
              <div className="mt-10 text-center">
                <Button asChild className="bg-dogPrimary hover:bg-dogDark">
                  <Link to="/puppies">
                    Voir tous nos chiots
                  </Link>
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center p-8 border rounded-lg bg-dogLight">
            <p className="text-lg mb-4">
              Tous nos chiots sont actuellement réservés.
            </p>
            <Button asChild className="bg-dogPrimary hover:bg-dogDark">
              <Link to="/contact">
                Contactez-nous pour la prochaine portée
              </Link>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AvailablePuppies;
