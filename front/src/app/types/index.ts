export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    categoryId: number;
  }

  export interface loginProps{
    email: string;
    password: string;
  }

  export interface loginErrorProps{
    email: string;
    password: string;
  }

interface Compra {
  nombreProducto: string;
  precio: number;
  
}

interface CarouselImageProps {
  key: number;
  image: string;
  active: boolean; // Agrega la propiedad 'active' al tipo
}
