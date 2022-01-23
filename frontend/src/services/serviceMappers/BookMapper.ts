export interface BookItemMapping {
  id: string;
  createdAt: string;
  publisher: string;
  author: string;
  name: string;
  price: number;
  description: string;
  currency_code: string;
  downloads: number;
  image_uri?: string;
}
