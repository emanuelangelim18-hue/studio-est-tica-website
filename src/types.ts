export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  duration?: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  category: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  username: string;
  text: string;
  imageUrl: string;
  fallbackColor: string;
  stars: number;
}
