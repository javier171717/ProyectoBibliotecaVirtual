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