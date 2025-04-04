
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PuppyCard from "@/components/PuppyCard";
import { puppies } from "@/data/puppies";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Puppy } from "@/types";

const Puppies = () => {
  const [filteredPuppies, setFilteredPuppies] = useState<Puppy[]>(puppies);
  const [filters, setFilters] = useState({
    breed: "all",
    gender: "all",
    availability: "all",
    search: "",
  });
  
  const breeds = Array.from(new Set(puppies.map(puppy => puppy.breed)));
  
  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    
    let results = puppies;
    
    // Filter by breed
    if (newFilters.breed !== "all") {
      results = results.filter(puppy => puppy.breed === newFilters.breed);
    }
    
    // Filter by gender
    if (newFilters.gender !== "all") {
      results = results.filter(puppy => puppy.gender === newFilters.gender);
    }
    
    // Filter by availability
    if (newFilters.availability !== "all") {
      const isAvailable = newFilters.availability === "available";
      results = results.filter(puppy => puppy.available === isAvailable);
    }
    
    // Filter by search term
    if (newFilters.search) {
      const searchLower = newFilters.search.toLowerCase();
      results = results.filter(puppy => 
        puppy.name.toLowerCase().includes(searchLower) || 
        puppy.description.toLowerCase().includes(searchLower) ||
        puppy.breed.toLowerCase().includes(searchLower)
      );
    }
    
    setFilteredPuppies(results);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-dogLight py-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-dogPrimary mb-2">Nos chiots</h1>
            <p className="text-muted-foreground mb-8">
              Découvrez nos adorables chiots disponibles à l'adoption
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm mb-10">
              <h2 className="text-xl font-semibold mb-4">Filtrer les chiots</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="breed-filter">Race</Label>
                  <Select 
                    value={filters.breed} 
                    onValueChange={(value) => handleFilterChange("breed", value)}
                  >
                    <SelectTrigger id="breed-filter">
                      <SelectValue placeholder="Toutes les races" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes les races</SelectItem>
                      {breeds.map(breed => (
                        <SelectItem key={breed} value={breed}>{breed}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="gender-filter">Sexe</Label>
                  <Select 
                    value={filters.gender} 
                    onValueChange={(value) => handleFilterChange("gender", value)}
                  >
                    <SelectTrigger id="gender-filter">
                      <SelectValue placeholder="Tous les sexes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous les sexes</SelectItem>
                      <SelectItem value="male">Mâle</SelectItem>
                      <SelectItem value="female">Femelle</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="availability-filter">Disponibilité</Label>
                  <Select 
                    value={filters.availability} 
                    onValueChange={(value) => handleFilterChange("availability", value)}
                  >
                    <SelectTrigger id="availability-filter">
                      <SelectValue placeholder="Tous les chiots" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous les chiots</SelectItem>
                      <SelectItem value="available">Disponibles</SelectItem>
                      <SelectItem value="reserved">Réservés</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="search">Recherche</Label>
                  <Input 
                    id="search"
                    value={filters.search}
                    onChange={(e) => handleFilterChange("search", e.target.value)}
                    placeholder="Rechercher..."
                  />
                </div>
              </div>
            </div>
            
            {filteredPuppies.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPuppies.map(puppy => (
                  <PuppyCard key={puppy.id} puppy={puppy} />
                ))}
              </div>
            ) : (
              <div className="text-center bg-white p-10 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Aucun chiot ne correspond à vos critères</h3>
                <p className="text-muted-foreground">
                  Veuillez modifier vos filtres ou contactez-nous pour être informé des prochaines portées.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Puppies;
