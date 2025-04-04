
export interface Puppy {
  id: string;
  name: string;
  breed: string;
  birthDate: string;
  gender: 'male' | 'female';
  description: string;
  images: string[];
  price?: number;
  available: boolean;
  color: string;
  weight?: string;
}

export interface Breed {
  id: string;
  name: string;
  origin: string;
  temperament: string[];
  size: 'small' | 'medium' | 'large';
  lifespan: string;
  description: string;
  careNeeds: string[];
  exerciseNeeds: 'low' | 'moderate' | 'high';
  trainability: 'easy' | 'moderate' | 'difficult';
  image: string;
  characteristicsDescription: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  date: string;
  puppyName?: string;
  image?: string;
}
