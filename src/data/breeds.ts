
import { Breed } from "../types";

export const breeds: Breed[] = [
  {
    id: "b1",
    name: "Berger Belge Malinois",
    origin: "Belgique",
    temperament: ["Intelligent", "Énergique", "Loyal", "Protecteur", "Vigilant"],
    size: "medium",
    lifespan: "12-14 ans",
    description: "Le Berger Belge Malinois est un chien de travail exceptionnel, connu pour son intelligence, sa polyvalence et son énergie débordante. Originaire de la région de Malines en Belgique, cette race est particulièrement appréciée pour ses capacités en travail policier, militaire et de recherche.",
    careNeeds: ["Exercice quotidien intense", "Stimulation mentale régulière", "Socialisation précoce", "Brossage hebdomadaire"],
    exerciseNeeds: "high",
    trainability: "easy",
    image: "/breeds/malinois.jpg",
    characteristicsDescription: "Le Malinois est un chien de taille moyenne à grande, au corps athlétique et bien proportionné. Son pelage court est généralement fauve avec un masque noir sur le museau. C'est un chien qui nécessite beaucoup d'activité physique et mentale pour s'épanouir pleinement."
  },
  {
    id: "b2",
    name: "Schipperke",
    origin: "Belgique",
    temperament: ["Curieux", "Vif", "Alerte", "Indépendant", "Joueur"],
    size: "small",
    lifespan: "13-15 ans",
    description: "Le Schipperke est un petit chien noir originaire de Belgique, historiquement utilisé comme chien de garde sur les péniches des canaux flamands. Malgré sa petite taille, il possède un caractère bien trempé et une grande confiance en lui.",
    careNeeds: ["Exercice quotidien modéré", "Stimulation mentale", "Brossage régulier", "Contrôle du poids"],
    exerciseNeeds: "moderate",
    trainability: "moderate",
    image: "/breeds/schipperke.jpg",
    characteristicsDescription: "Le Schipperke est reconnaissable à sa petite taille, son pelage noir abondant formant une collerette autour du cou et sa queue courte ou absente. C'est un chien débordant d'énergie qui apprécie les jeux et l'activité malgré son format compact."
  },
  {
    id: "b3",
    name: "Bouvier des Flandres",
    origin: "Belgique",
    temperament: ["Calme", "Courageux", "Protecteur", "Intelligent", "Loyal"],
    size: "large",
    lifespan: "10-12 ans",
    description: "Le Bouvier des Flandres est un chien robuste originaire de la région des Flandres en Belgique. Historiquement utilisé comme chien de ferme polyvalent, il est aujourd'hui apprécié comme chien de famille dévoué et protecteur.",
    careNeeds: ["Toilettage régulier", "Exercice quotidien", "Espace suffisant", "Alimentation contrôlée"],
    exerciseNeeds: "moderate",
    trainability: "moderate",
    image: "/breeds/bouvier.jpg",
    characteristicsDescription: "Le Bouvier des Flandres est un chien de grande taille à l'allure imposante, avec un pelage épais et ébouriffé, généralement gris, noir ou fawn. Son apparence robuste reflète ses origines de chien de travail polyvalent."
  },
  {
    id: "b4",
    name: "Berger Belge Tervueren",
    origin: "Belgique",
    temperament: ["Intelligent", "Sensible", "Alerte", "Protecteur", "Énergique"],
    size: "medium",
    lifespan: "12-14 ans",
    description: "Le Berger Belge Tervueren est l'une des quatre variétés du Berger Belge, caractérisé par son élégant pelage long de couleur fauve à rouge acajou. Originaire du village de Tervuren en Belgique, cette race combine intelligence, beauté et polyvalence.",
    careNeeds: ["Brossage fréquent", "Exercice quotidien", "Stimulation mentale", "Socialisation"],
    exerciseNeeds: "high",
    trainability: "easy",
    image: "/breeds/tervueren.jpg",
    characteristicsDescription: "Le Tervueren se distingue par son pelage long et abondant de couleur fauve à acajou avec des pointes noires et un masque noir. C'est un chien élégant et gracieux qui nécessite un entretien régulier de son magnifique pelage."
  },
  {
    id: "b5",
    name: "Berger Belge Groenendael",
    origin: "Belgique",
    temperament: ["Intelligent", "Vigilant", "Actif", "Protecteur", "Sensible"],
    size: "medium",
    lifespan: "12-14 ans",
    description: "Le Groenendael est la variété noire du Berger Belge, nommé d'après le château de Groenendael où il a été développé. C'est un chien élégant au pelage noir brillant qui excelle dans de nombreuses disciplines canines.",
    careNeeds: ["Brossage régulier", "Exercice quotidien", "Stimulation mentale", "Activités variées"],
    exerciseNeeds: "high",
    trainability: "easy",
    image: "/breeds/groenendael.jpg",
    characteristicsDescription: "Le Groenendael est facilement reconnaissable à son pelage long et entièrement noir. Son allure élégante et sa prestance en font un chien remarquable, mais qui nécessite un entretien régulier pour maintenir la beauté de son pelage."
  },
  {
    id: "b6",
    name: "Chien de Saint-Hubert",
    origin: "Belgique",
    temperament: ["Calme", "Gentil", "Déterminé", "Patient", "Affectueux"],
    size: "large",
    lifespan: "8-10 ans",
    description: "Le Chien de Saint-Hubert, également connu sous le nom de Bloodhound, est une race ancienne originaire de Belgique. Élevé par les moines de l'abbaye de Saint-Hubert dans les Ardennes, il est célèbre pour ses capacités olfactives exceptionnelles.",
    careNeeds: ["Nettoyage régulier des plis faciaux", "Exercice modéré", "Alimentation contrôlée", "Espace suffisant"],
    exerciseNeeds: "moderate",
    trainability: "moderate",
    image: "/breeds/sainthubert.jpg",
    characteristicsDescription: "Le Saint-Hubert est un chien massif caractérisé par sa peau lâche formant des plis, particulièrement sur le visage, et ses longues oreilles pendantes. Son odorat légendaire en fait un chien de pistage incomparable, utilisé dans le monde entier pour la recherche de personnes disparues."
  }
];
