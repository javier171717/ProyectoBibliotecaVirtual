import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "iPhone 11",
  price: 699,
  description:
    "Experimenta el poder y la elegancia con el iPhone 11: captura momentos impresionantes con su sistema de cámara dual, disfruta de un rendimiento excepcional",
  image: 'https://http2.mlstatic.com/D_NQ_NP_809326-MLA46115014340_052021-O.webp',
  categoryId: 1,
  stock: 10,
},

{
  name: "MacBook Air",
  price: 999,
  description:
    "Abraza la eficiencia y la sofisticación con el MacBook Air: el diseño ligero se encuentra con un rendimiento potente, la impresionante pantalla Retina da vida a tu trabajo y la duración de la batería durante todo el día te mantiene productivo donde sea que vayas. Eleva tu experiencia informática con el MacBook Air.",
  image: 'https://http2.mlstatic.com/D_NQ_NP_868385-MLA52463970075_112022-O.webp',
  categoryId: 2,
  stock: 10,
},

{
  name: "iPad Pro",
  price: 799,
  description:
    "Libera tu creatividad y productividad con el iPad Pro: el potente rendimiento, la impresionante pantalla Liquid Retina y la duración de la batería durante todo el día hacen del iPad Pro la herramienta perfecta para el trabajo y el juego. Transforma tus ideas en realidad con el iPad Pro.",
  image: 'https://http2.mlstatic.com/D_NQ_NP_814559-MLA53970921150_022023-O.webp',
  categoryId: 3,
  stock: 10,
},

{
  name: "Apple Watch Series 6",
  price: 399,
  description:
    "Mantente conectado y saludable con el Apple Watch Series 6: realiza un seguimiento de tus entrenamientos, supervisa tu salud y mantente en contacto con las personas e información que más te importan. Experimenta el futuro de la salud y el bienestar con el Apple Watch Series 6.",
  image: 'https://http2.mlstatic.com/D_NQ_NP_733580-MLA72063241888_102023-O.webp',
  categoryId: 4,
  stock: 10,
},

{
  name: "AirPods Pro",
  price: 249,
  description:
    "Sumérgete en el sonido con los AirPods Pro: la cancelación activa de ruido, el modo de transparencia y el ajuste personalizable hacen que los AirPods Pro sean el compañero perfecto para la música, las llamadas y todo lo demás. Eleva tu experiencia auditiva con los AirPods Pro.",
  image: 'https://http2.mlstatic.com/D_NQ_NP_606698-MLU74678792835_022024-O.webp',
  categoryId: 5,
  stock: 10,
},

{
  name: "HomePod mini",
  price: 99,
  description:
    "Eleva tu experiencia de audio en casa con el HomePod mini: el sonido envolvente, el asistente inteligente y el centro doméstico inteligente hacen del HomePod mini la adición perfecta a tu hogar. Disfruta de un mundo de música, noticias y más con el HomePod mini.",
  image: 'https://http2.mlstatic.com/D_NQ_NP_800774-MLA45740145234_042021-O.webp',
  categoryId: 6,
  stock: 10,
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
