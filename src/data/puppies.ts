
import { Puppy } from "../types";

export const puppies: Puppy[] = [
  {
    id: "p1",
    name: "Max",
    breed: "Berger Belge Malinois",
    birthDate: "2025-01-15",
    gender: "male",
    description: "Max est un chiot Malinois énergique et intelligent. Il est curieux et s'entend bien avec les autres chiens. Il sera parfait pour une famille active qui peut lui offrir de l'exercice quotidien et une stimulation mentale.",
    images: ["/puppies/malinois1.jpg", "/puppies/malinois2.jpg"],
    price: 1200,
    available: true,
    color: "Fauve charbonné",
    weight: "3.5 kg à 8 semaines"
  },
  {
    id: "p2",
    name: "Luna",
    breed: "Schipperke",
    birthDate: "2025-01-20",
    gender: "female",
    description: "Luna est une adorable petite Schipperke pleine de caractère. Elle est joueuse, affectueuse et apprendra rapidement. Elle fera une excellente compagne pour tout type de foyer.",
    images: ["/puppies/schipperke1.jpg", "/puppies/schipperke2.jpg"],
    price: 950,
    available: true,
    color: "Noir",
    weight: "1.8 kg à 8 semaines"
  },
  {
    id: "p3",
    name: "Oscar",
    breed: "Bouvier des Flandres",
    birthDate: "2025-01-05",
    gender: "male",
    description: "Oscar est un chiot Bouvier des Flandres calme et équilibré. Il est déjà très sociable et s'adaptera parfaitement à la vie de famille. Il promet d'être un compagnon fidèle et protecteur.",
    images: ["/puppies/bouvier1.jpg", "/puppies/bouvier2.jpg"],
    price: 1100,
    available: true,
    color: "Gris",
    weight: "4.2 kg à 8 semaines"
  },
  {
    id: "p4",
    name: "Belle",
    breed: "Berger Belge Tervueren",
    birthDate: "2025-01-12",
    gender: "female",
    description: "Belle est une magnifique Tervueren au pelage long et soyeux. Elle est douce, attentive et très attachée à sa famille. Elle conviendra parfaitement à un foyer qui pourra lui consacrer du temps pour l'éducation et les câlins.",
    images: ["/puppies/tervueren1.jpg", "/puppies/tervueren2.jpg"],
    price: 1300,
    available: true,
    color: "Fauve acajou",
    weight: "3.2 kg à 8 semaines"
  },
  {
    id: "p5",
    name: "Rocky",
    breed: "Groenendael",
    birthDate: "2024-12-28",
    gender: "male",
    description: "Rocky est un chiot Groenendael à la robe noire brillante. Il est vif, intelligent et très sociable. Il sera parfait pour une famille dynamique qui pourra lui offrir beaucoup d'activité physique et mentale.",
    images: ["/puppies/groenendael1.jpg", "/puppies/groenendael2.jpg"],
    price: 1250,
    available: false,
    color: "Noir",
    weight: "3.8 kg à 8 semaines"
  },
  {
    id: "p6",
    name: "Nala",
    breed: "Chien de Saint-Hubert",
    birthDate: "2025-01-10",
    gender: "female",
    description: "Nala est une adorable Saint-Hubert au caractère doux et patient. Elle est déjà très sociable avec les enfants et autres animaux. Ce sera une compagne idéale pour toute la famille.",
    images: ["/puppies/sainthubert1.jpg", "/puppies/sainthubert2.jpg"],
    price: 1000,
    available: true,
    color: "Noir et feu",
    weight: "4.5 kg à 8 semaines"
  }
];
