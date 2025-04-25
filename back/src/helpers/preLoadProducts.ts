import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  //price: number;
  description: string;
  image: string;
  categoryId: number;
  //stock: number;
}

const productsToPreLoad = [
  {
    name: 'Clean Code',
    description: 'Un libro sobre buenas prácticas de programación.',
    //price: 39,
    //stock: 10,
    image: 'https://m.media-amazon.com/images/I/51N-u8AsmdL._SX342_SY445_QL70_ML2_.jpg',
    categoryId: 1,
  },
  {
    name: 'The Pragmatic Programmer',
    description: 'Consejos prácticos para el desarrollo de software.',
    //price: 45,
    //stock: 8,
    image: 'https://m.media-amazon.com/images/I/41as+WafrFL._SX396_BO1,204,203,200_.jpg',
    categoryId: 2,
  },
  {
    name: "Refactoring",
    description: "Mejora del diseño de código existente.",
    //price: 50,
    //stock: 5,
    image: "https://m.media-amazon.com/images/I/518FqJvR9aL._SX404_BO1,204,203,200_.jpg",
    categoryId: 3,
  },
  {
    name: 'Design Patterns',
    description: 'Soluciones reutilizables para problemas comunes de diseño de software.',
    image: 'https://tse2.mm.bing.net/th?id=OIP.h8AEnMJvoFPoQtcH_WJA_gHaKe&pid=Api',
    categoryId: 4,
  },
  {
    name: "You Don't Know JS",
    description: 'Una serie de libros sobre JavaScript.',
    image: 'https://tse1.mm.bing.net/th?id=OIP.NbHuGZWLDYArOuV5-S92lQAAAA&pid=Api',
    categoryId: 5,
  },
  {
    name: 'JavaScript: The Good Parts',
    description: 'Una guía sobre las mejores características de JavaScript.',
    //price: 30,
    //stock: 15,
    image: 'https://m.media-amazon.com/images/I/51gdVAEfPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
    categoryId: 6,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};
