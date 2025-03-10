export interface SliderImage {
  image: string;
  altText: string;
}
export interface RewardPost {
  id: number;
  title: string;
  description: string;
  img: string;
}
[];

export interface CookieePost {
  id: number;
  title: string;
  image: string;
  description: string;
}
export interface MenuCardPost {
  id: number;
  title: string;
  image: string;
  buttonTitle: string;
  bgcolor: string;
  url: string;
}
export interface DonutsPackCard {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
  rating: number;
  sliderImage: SliderImage[];
  itemsNumber?: number;
}

export interface CheckBoxData {
  id: number;
  category_name:string
}
