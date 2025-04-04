
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { breeds } from "@/data/breeds";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Breeds = () => {
  const [activeTabId, setActiveTabId] = useState(breeds[0].id);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-dogLight py-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-dogPrimary mb-2">Nos races belges</h1>
            <p className="text-muted-foreground mb-8">
              Découvrez les races de chiens belges que nous élevons avec passion
            </p>
            
            <Tabs defaultValue={breeds[0].id} onValueChange={setActiveTabId} className="w-full">
              <TabsList className="w-full md:w-auto flex flex-wrap justify-start mb-6">
                {breeds.map((breed) => (
                  <TabsTrigger 
                    key={breed.id} 
                    value={breed.id}
                    className="data-[state=active]:bg-dogPrimary data-[state=active]:text-white"
                  >
                    {breed.name.split(" ").slice(-1)[0]}
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {breeds.map((breed) => (
                <TabsContent key={breed.id} value={breed.id} className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <img 
                        src={breed.image} 
                        alt={breed.name} 
                        className="rounded-lg w-full h-auto mb-4 md:mb-0 shadow-sm"
                      />
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-dogPrimary">{breed.name}</h2>
                        <Badge variant="outline" className="text-dogSecondary border-dogSecondary">
                          {breed.origin}
                        </Badge>
                      </div>
                      
                      <p className="mb-6">{breed.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Caractéristiques</h3>
                          <ul className="space-y-2">
                            <li className="flex items-center">
                              <span className="font-medium min-w-28">Taille:</span>
                              <span>{breed.size === 'small' ? 'Petite' : breed.size === 'medium' ? 'Moyenne' : 'Grande'}</span>
                            </li>
                            <li className="flex items-center">
                              <span className="font-medium min-w-28">Espérance de vie:</span>
                              <span>{breed.lifespan}</span>
                            </li>
                            <li className="flex items-center">
                              <span className="font-medium min-w-28">Exercice:</span>
                              <span>
                                {breed.exerciseNeeds === 'low' ? 'Faible' : breed.exerciseNeeds === 'moderate' ? 'Modéré' : 'Élevé'}
                              </span>
                            </li>
                            <li className="flex items-center">
                              <span className="font-medium min-w-28">Dressage:</span>
                              <span>
                                {breed.trainability === 'easy' ? 'Facile' : breed.trainability === 'moderate' ? 'Modéré' : 'Difficile'}
                              </span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold mb-2">Tempérament</h3>
                          <div className="flex flex-wrap gap-2">
                            {breed.temperament.map((trait, index) => (
                              <Badge key={index} variant="secondary" className="bg-dogTertiary text-dogDark">
                                {trait}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-lg font-semibold mb-2">Besoins spécifiques</h3>
                        <ul className="paw-bullet">
                          {breed.careNeeds.map((need, index) => (
                            <li key={index}>{need}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-4">Description détaillée</h3>
                    <Card>
                      <CardContent className="pt-6">
                        <p>{breed.characteristicsDescription}</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Breeds;
