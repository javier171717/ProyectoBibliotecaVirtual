"use client"
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { getProductById } from "@/helpers/product.helpers";
import { IProduct } from "../../types/index"; 



const DetailProduct = ({ params }: { params: { productId: string } }) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Establece isLoggedIn como true si hay un token presente en el localStorage

    const fetchProduct = async () => {
      const fetchedProduct = await getProductById(params.productId);
      setProduct(fetchedProduct);
    };

    fetchProduct();
  }, [params.productId]);

  const handleBuy = () => {
    if (!isLoggedIn) {
      // Si el usuario no está autenticado, redirige a la página de inicio de sesión
      alert("Debes iniciar sesión para agregar productos al carrito.");
      router.push("/login");
      return;
    }

    // Simulación de agregar producto al carrito
    alert("Producto agregado al carrito");
  };

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/2 bg-gray-200 p-4 rounded text-center">
        <h2>{product.name}</h2>
        <img src={product.image} alt="imagen del producto" width={100} height={100} className="mx-auto" />
        <p>{product.description}</p>
        <p>Price: $ {product.price}</p>
        <p>Stock: {product.stock}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleBuy}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default DetailProduct;

