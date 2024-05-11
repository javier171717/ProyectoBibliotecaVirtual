"use client"
import categoriesToPreLoad from "../../utils/categories";
import { IProduct } from "@/app/types/index";
import Image from "next/image";
import Link from "next/link";

const Card = ({ name, price, description, image, categoryId, stock }: IProduct) => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col items-center bg-gray-300 text-black p-4 border border-gray-300 rounded-lg shadow-md max-w-xs mx-2">
        <div className="relative w-full h-48 mb-4 overflow-hidden">
          <Image
            src={image}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
        <h2 className="text-lg font-semibold mb-2 text-center">{name}</h2>
        <p className="mb-2 text-center">{description}</p>
        <p className="font-bold text-lg mb-2">${price}</p>
        <p className="mb-2">Category: {categoriesToPreLoad[categoryId].name}</p>
        <p className="mb-2">Stock: {stock}</p>
        <Link href="/compra" passHref>
          <span className="text-blue-500 font-semibold hover:text-blue-700 cursor-pointer"></span>
        </Link>
      </div>
    </div>
  );
};

export default Card;






