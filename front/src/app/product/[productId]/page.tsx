
"use client"
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'; 
import { getProductById } from "@/helpers/product.helpers";
import { IProduct } from "../../types/index"; 
import Swal from 'sweetalert2';

const DetailProduct = ({ params }: { params: { productId: string } }) => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    const fetchProduct = async () => {
      try {
        const fetchedProduct = await getProductById(params.productId);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProduct();
  }, [params.productId]);

  const handleBuy = () => {
    if (!isLoggedIn) {
      Swal.fire({
        icon: 'warning',
        title: '¡Debes iniciar sesión!',
        text: 'Debes iniciar sesión para agregar productos al carrito.',
        showCancelButton: true,
        confirmButtonText: 'Iniciar sesión',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          router.push('/login');
        }
      });
  
      return;
    }
  
    // Obtener el carrito del usuario (simulación)
    const cartProducts: { id: number; nombreProducto: string; precio: number; imagen: string }[] = JSON.parse(localStorage.getItem('cartProducts') || '[]');
  
    // Verificar si el producto ya está en el carrito
    if (!product) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'El producto no existe.',
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
  
    const productExists = cartProducts.some((item: { id: number }) => item.id === product.id);
  
    if (productExists) {
      Swal.fire({
        icon: 'info',
        title: 'Producto ya en el carrito',
        text: 'Este producto ya ha sido agregado al carrito.',
        showConfirmButton: true,
        timer: 1500,
      });
      return;
    }
  
    // Agregar el nuevo producto al carrito
    const newProduct = {
      id: product.id,
      nombreProducto: product.name || '',
      precio: product.price || 0,
      imagen: product.image || '',
    };
    cartProducts.push(newProduct);
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  
    // Redirigir al usuario a la página de compras
    router.push('/compra');
  
    Swal.fire({
      icon: 'success',
      title: '¡Producto agregado al carrito!',
      showConfirmButton: false,
      timer: 1500,
    });
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



