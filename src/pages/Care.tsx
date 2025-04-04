
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Dog, Heart, Home, ShieldCheck, Utensils } from "lucide-react";

const Care = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-dogLight py-12">
          <div className="container">
            <h1 className="text-3xl md:text-4xl font-bold text-dogPrimary mb-2">Conseils & Soins</h1>
            <p className="text-muted-foreground mb-8">
              Guides et conseils pour prendre soin de votre chiot au quotidien
            </p>
            
            <Tabs defaultValue="nutrition" className="w-full">
              <TabsList className="w-full md:w-auto flex flex-wrap justify-start mb-6">
                <TabsTrigger 
                  value="nutrition" 
                  className="data-[state=active]:bg-dogPrimary data-[state=active]:text-white flex items-center gap-2"
                >
                  <Utensils className="h-4 w-4" />
                  Nutrition
                </TabsTrigger>
                <TabsTrigger 
                  value="health" 
                  className="data-[state=active]:bg-dogPrimary data-[state=active]:text-white flex items-center gap-2"
                >
                  <Heart className="h-4 w-4" />
                  Santé
                </TabsTrigger>
                <TabsTrigger 
                  value="training" 
                  className="data-[state=active]:bg-dogPrimary data-[state=active]:text-white flex items-center gap-2"
                >
                  <Dog className="h-4 w-4" />
                  Éducation
                </TabsTrigger>
                <TabsTrigger 
                  value="homeprep" 
                  className="data-[state=active]:bg-dogPrimary data-[state=active]:text-white flex items-center gap-2"
                >
                  <Home className="h-4 w-4" />
                  Préparer sa maison
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="nutrition" className="bg-white rounded-lg p-6 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-dogPrimary mb-4">Alimentation du chiot</h2>
                  <p className="mb-4">
                    Une alimentation adaptée est essentielle au bon développement de votre chiot. 
                    Voici nos recommandations pour garantir une croissance saine et équilibrée.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold mb-3">Les bases d'une bonne alimentation</h3>
                      <ul className="paw-bullet">
                        <li>Choisissez une nourriture spécifique pour chiots de haute qualité, adaptée à la taille de votre race.</li>
                        <li>Respectez les portions recommandées selon l'âge et le poids de votre chiot.</li>
                        <li>Divisez la ration quotidienne en 3-4 repas jusqu'à 6 mois, puis 2-3 repas.</li>
                        <li>Assurez-vous que votre chiot ait toujours de l'eau fraîche à disposition.</li>
                        <li>Évitez de donner des restes de table qui peuvent être trop riches ou contenir des ingrédients nocifs.</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold mb-3">Aliments à éviter</h3>
                      <ul className="paw-bullet">
                        <li>Chocolat et cacao - contiennent de la théobromine, toxique pour les chiens.</li>
                        <li>Oignons et ail - peuvent causer une anémie.</li>
                        <li>Raisins et raisins secs - peuvent provoquer une insuffisance rénale.</li>
                        <li>Aliments contenant du xylitol (certains chewing-gums, pâtisseries) - très toxique.</li>
                        <li>Alcool et caféine - même en petites quantités.</li>
                        <li>Os cuits - peuvent se briser et causer des blessures internes.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">Transition alimentaire</h3>
                <p className="mb-4">
                  Lorsque vous adoptez votre chiot, nous vous remettons un échantillon de la nourriture qu'il consommait chez nous. 
                  La transition vers une nouvelle alimentation doit se faire progressivement sur 7 à 10 jours :
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-dogLight p-4 rounded-lg text-center">
                    <p className="font-semibold mb-2">Jours 1-2</p>
                    <p>75% ancienne nourriture,<br />25% nouvelle nourriture</p>
                  </div>
                  <div className="bg-dogLight p-4 rounded-lg text-center">
                    <p className="font-semibold mb-2">Jours 3-4</p>
                    <p>50% ancienne nourriture,<br />50% nouvelle nourriture</p>
                  </div>
                  <div className="bg-dogLight p-4 rounded-lg text-center">
                    <p className="font-semibold mb-2">Jours 5-6</p>
                    <p>25% ancienne nourriture,<br />75% nouvelle nourriture</p>
                  </div>
                  <div className="bg-dogLight p-4 rounded-lg text-center">
                    <p className="font-semibold mb-2">Jours 7+</p>
                    <p>100% nouvelle nourriture</p>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="health" className="bg-white rounded-lg p-6 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-dogPrimary mb-4">Santé et bien-être</h2>
                  <p className="mb-4">
                    Prendre soin de la santé de votre chiot dès son plus jeune âge garantit une vie longue et heureuse.
                    Voici quelques conseils essentiels pour veiller au bien-être de votre nouveau compagnon.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-center mb-4">
                        <ShieldCheck className="h-8 w-8 text-dogPrimary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-center">Suivi vétérinaire</h3>
                      <ul className="paw-bullet">
                        <li>Programmez une première visite chez le vétérinaire dans les 48h suivant l'adoption.</li>
                        <li>Respectez le calendrier de vaccination recommandé par votre vétérinaire.</li>
                        <li>Prévoyez des visites régulières, même en l'absence de problèmes apparents.</li>
                        <li>Suivez scrupuleusement le protocole de vermifugation (généralement tous les 15 jours jusqu'à 3 mois, puis tous les 3 mois).</li>
                        <li>Traitez préventivement contre les parasites externes (puces, tiques) toute l'année.</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-center mb-4">
                        <Heart className="h-8 w-8 text-dogPrimary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-center">Signes d'alerte</h3>
                      <p className="mb-4">Consultez rapidement un vétérinaire si vous observez :</p>
                      <ul className="paw-bullet">
                        <li>Perte d'appétit durant plus de 24 heures</li>
                        <li>Diarrhée ou vomissements persistants</li>
                        <li>Léthargie inhabituelle</li>
                        <li>Toux, éternuements ou difficultés respiratoires</li>
                        <li>Boiterie ou difficulté à se déplacer</li>
                        <li>Grattages excessifs ou irritations cutanées</li>
                        <li>Changement de comportement soudain</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-center mb-4">
                        <Dog className="h-8 w-8 text-dogPrimary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3 text-center">Hygiène quotidienne</h3>
                      <ul className="paw-bullet">
                        <li>Brossez régulièrement votre chiot pour éliminer les poils morts et vérifier l'état de sa peau.</li>
                        <li>Habituez-le progressivement au bain, mais ne le baignez pas trop souvent (1 fois tous les 1 à 3 mois selon la race).</li>
                        <li>Nettoyez ses oreilles régulièrement avec un produit adapté.</li>
                        <li>Brossez ses dents plusieurs fois par semaine avec un dentifrice canin.</li>
                        <li>Coupez ses griffes si nécessaire, ou faites-les couper par un professionnel.</li>
                        <li>Surveillez et nettoyez ses yeux s'ils présentent des sécrétions.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="training" className="bg-white rounded-lg p-6 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-dogPrimary mb-4">Éducation et socialisation</h2>
                  <p className="mb-4">
                    L'éducation de votre chiot commence dès son arrivée chez vous. Une approche positive et cohérente
                    favorisera le développement d'un chien équilibré et bien dans ses pattes.
                  </p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">Les principes de base</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-semibold mb-2">Éducation positive</h4>
                        <p className="mb-4">
                          L'éducation positive repose sur le renforcement des comportements souhaités plutôt que sur la punition.
                          Cette méthode favorise une relation de confiance et de respect mutuel.
                        </p>
                        <ul className="paw-bullet">
                          <li>Récompensez les bons comportements avec des friandises, des caresses ou des félicitations.</li>
                          <li>Ignorez les comportements indésirables (quand c'est possible) et redirigez l'attention.</li>
                          <li>Soyez cohérent dans vos demandes et vos réponses.</li>
                          <li>Préférez de courtes sessions d'entraînement (5-10 minutes) plusieurs fois par jour.</li>
                          <li>Adaptez vos attentes à l'âge et au niveau de développement de votre chiot.</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="pt-6">
                        <h4 className="font-semibold mb-2">Socialisation précoce</h4>
                        <p className="mb-4">
                          La période de socialisation (entre 3 et 12-16 semaines) est cruciale pour le développement d'un chien équilibré.
                          Exposez progressivement votre chiot à différentes situations, personnes et animaux.
                        </p>
                        <ul className="paw-bullet">
                          <li>Exposez votre chiot à différents environnements, surfaces, sons et stimuli.</li>
                          <li>Favorisez les rencontres positives avec d'autres chiens vaccinés.</li>
                          <li>Habituez-le à être manipulé (pattes, oreilles, bouche) pour faciliter les soins futurs.</li>
                          <li>Présentez-le à différentes personnes (enfants, hommes, femmes, personnes âgées).</li>
                          <li>Veillez à ce que ces expériences soient toujours positives et non stressantes.</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">Ordres de base à enseigner</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-dogLight p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Assis</h4>
                      <ol className="list-decimal list-inside text-sm space-y-1">
                        <li>Tenez une friandise juste au-dessus du nez.</li>
                        <li>Déplacez-la lentement vers l'arrière.</li>
                        <li>Lorsque votre chiot s'assoit, dites "assis" et récompensez.</li>
                      </ol>
                    </div>
                    
                    <div className="bg-dogLight p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Couché</h4>
                      <ol className="list-decimal list-inside text-sm space-y-1">
                        <li>Commencez avec votre chiot assis.</li>
                        <li>Abaissez la friandise au sol entre ses pattes.</li>
                        <li>Lorsqu'il se couche, dites "couché" et récompensez.</li>
                      </ol>
                    </div>
                    
                    <div className="bg-dogLight p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Rappel</h4>
                      <ol className="list-decimal list-inside text-sm space-y-1">
                        <li>Dites le nom de votre chiot suivi de "viens".</li>
                        <li>Encouragez-le à venir avec enthousiasme.</li>
                        <li>Récompensez généreusement quand il arrive.</li>
                        <li>Ne punissez jamais un chien qui revient, même tardivement.</li>
                      </ol>
                    </div>
                    
                    <div className="bg-dogLight p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Reste</h4>
                      <ol className="list-decimal list-inside text-sm space-y-1">
                        <li>Demandez à votre chiot de s'asseoir.</li>
                        <li>Dites "reste" avec la paume ouverte face à lui.</li>
                        <li>Éloignez-vous légèrement puis revenez rapidement.</li>
                        <li>Récompensez s'il est resté en place.</li>
                        <li>Augmentez progressivement la distance et la durée.</li>
                      </ol>
                    </div>
                    
                    <div className="bg-dogLight p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Marche en laisse</h4>
                      <ol className="list-decimal list-inside text-sm space-y-1">
                        <li>Commencez dans un environnement calme.</li>
                        <li>Récompensez votre chiot quand il marche près de vous.</li>
                        <li>Changez de direction s'il tire, sans tirer sur la laisse.</li>
                        <li>Soyez patient, c'est un apprentissage qui prend du temps.</li>
                      </ol>
                    </div>
                    
                    <div className="bg-dogLight p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">La propreté</h4>
                      <ol className="list-decimal list-inside text-sm space-y-1">
                        <li>Sortez votre chiot après les repas, le réveil et le jeu.</li>
                        <li>Félicitez-le quand il fait ses besoins dehors.</li>
                        <li>Ne punissez pas les accidents, nettoyez simplement sans commentaire.</li>
                        <li>Soyez cohérent et patient, la propreté s'acquiert progressivement.</li>
                      </ol>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <p className="mb-4">
                    N'hésitez pas à nous contacter pour des conseils personnalisés ou à consulter un éducateur canin professionnel.
                  </p>
                  <Button asChild className="bg-dogPrimary hover:bg-dogDark">
                    <Link to="/contact">
                      Nous contacter
                    </Link>
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="homeprep" className="bg-white rounded-lg p-6 shadow-sm">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-dogPrimary mb-4">Préparer votre maison</h2>
                  <p className="mb-4">
                    L'arrivée d'un chiot nécessite quelques adaptations pour assurer sa sécurité et son confort.
                    Voici comment préparer votre domicile avant son arrivée.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Liste des équipements essentiels</h3>
                    <Card>
                      <CardContent className="pt-6">
                        <ul className="paw-bullet">
                          <li>
                            <strong>Couchage</strong> - Un panier ou coussin confortable, adapté à sa taille adulte avec une petite couverture.
                          </li>
                          <li>
                            <strong>Alimentation</strong> - Gamelles pour l'eau et la nourriture (préférez l'inox ou la céramique au plastique).
                          </li>
                          <li>
                            <strong>Transport</strong> - Une caisse de transport sécurisée pour les déplacements en voiture.
                          </li>
                          <li>
                            <strong>Promenade</strong> - Un harnais ou collier adapté et une laisse solide (évitez les laisses à enrouleur au début).
                          </li>
                          <li>
                            <strong>Hygiène</strong> - Brosse adaptée à son type de poil, shampooing spécial chiot.
                          </li>
                          <li>
                            <strong>Jeux et occupation</strong> - Jouets à mâcher, peluches, balles, jouets d'intelligence.
                          </li>
                          <li>
                            <strong>Éducation</strong> - Tapis absorbants pour l'apprentissage de la propreté, friandises d'entraînement.
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Sécuriser votre domicile</h3>
                    <Card>
                      <CardContent className="pt-6">
                        <ul className="paw-bullet">
                          <li>
                            <strong>Câbles électriques</strong> - Rangez ou protégez les câbles électriques accessibles.
                          </li>
                          <li>
                            <strong>Produits toxiques</strong> - Placez hors de portée les produits ménagers, médicaments et plantes toxiques.
                          </li>
                          <li>
                            <strong>Petits objets</strong> - Rangez les petits objets qui pourraient être avalés (pièces, bijoux, etc.).
                          </li>
                          <li>
                            <strong>Escaliers</strong> - Installez une barrière de sécurité si nécessaire.
                          </li>
                          <li>
                            <strong>Espaces restreints</strong> - Vérifiez que votre chiot ne puisse pas se coincer sous des meubles.
                          </li>
                          <li>
                            <strong>Jardin</strong> - Assurez-vous que votre clôture est sécurisée, sans trous ni passages.
                          </li>
                          <li>
                            <strong>Décorations</strong> - Attention aux objets fragiles à hauteur de chiot et aux ornements de Noël.
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">Créer un espace dédié</h3>
                <p className="mb-4">
                  Votre chiot a besoin d'un espace à lui où il se sentira en sécurité. Idéalement, cet espace devrait :
                </p>
                <div className="bg-dogLight p-6 rounded-lg mb-6">
                  <ul className="paw-bullet">
                    <li>Être situé dans une zone calme mais pas isolée de la vie familiale.</li>
                    <li>Contenir son panier ou sa caisse, une gamelle d'eau fraîche et quelques jouets.</li>
                    <li>Être facilement nettoyable en cas d'accidents pendant l'apprentissage de la propreté.</li>
                    <li>Offrir un accès restreint au reste de la maison au début (vous pourrez élargir son territoire progressivement).</li>
                  </ul>
                </div>
                
                <div className="text-center mt-8">
                  <p className="text-lg font-medium mb-2">Besoin de conseils personnalisés ?</p>
                  <p className="mb-4">Nous sommes là pour vous aider à préparer au mieux l'arrivée de votre chiot.</p>
                  <Button asChild className="bg-dogPrimary hover:bg-dogDark">
                    <Link to="/contact">
                      Nous contacter
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Care;
