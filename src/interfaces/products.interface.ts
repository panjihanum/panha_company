export interface ProductProps {
  id: string;
  name: string | null;
}

export interface ProductResponse {
  data: ProductProps[];
}
