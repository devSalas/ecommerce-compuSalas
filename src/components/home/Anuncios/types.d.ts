export interface AnuncioInterface {
  id?: string;
  vertical?: boolean;
  horizontal?: boolean;
  left?: boolean;
  category?: string;
  title: string;
  description?: string;
  price?: string;
  image: string;
  url: string
}

export type AnuncioMedianoInterface = Omit<AnuncioInterface, "vertical", "left">
