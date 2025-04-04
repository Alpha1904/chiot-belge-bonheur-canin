
import { Puppy } from "@/types";
import { Link } from "react-router-dom";
import { Calendar, Heart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PuppyCardProps {
  puppy: Puppy;
}

const PuppyCard = ({ puppy }: PuppyCardProps) => {
  const formattedBirthDate = new Date(puppy.birthDate).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={puppy.images[0]} 
          alt={puppy.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {puppy.available ? (
          <Badge className="absolute top-2 right-2 bg-green-600">Disponible</Badge>
        ) : (
          <Badge className="absolute top-2 right-2 bg-red-500">Réservé</Badge>
        )}
      </div>
      
      <CardContent className="pt-6">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-xl font-semibold text-dogPrimary">{puppy.name}</h3>
          <Badge variant="outline" className="border-dogSecondary text-dogSecondary">
            {puppy.gender === 'male' ? 'Mâle' : 'Femelle'}
          </Badge>
        </div>
        
        <p className="text-muted-foreground text-sm mb-2">{puppy.breed}</p>
        
        <div className="flex items-center text-sm text-muted-foreground mb-4">
          <Calendar className="h-4 w-4 mr-1" />
          <span>Né le {formattedBirthDate}</span>
        </div>
        
        <p className="line-clamp-2 text-sm">{puppy.description}</p>
      </CardContent>
      
      <CardFooter className="flex justify-between pt-2">
        {puppy.available && puppy.price && (
          <span className="text-lg font-semibold text-dogPrimary">{puppy.price} €</span>
        )}
        <Button asChild className="bg-dogPrimary hover:bg-dogDark">
          <Link to={`/puppies/${puppy.id}`}>
            En savoir plus
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PuppyCard;
