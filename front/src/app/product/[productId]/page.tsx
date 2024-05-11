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
    setIsLoggedIn(!!token); // Establece isLoggedIn como true si hay un token presente en el localStorage

    const fetchProduct = () => {
      getProductById(params.productId)
        .then((fetchedProduct) => {
          setProduct(fetchedProduct);
        })
        .catch((error) => {
          console.error('Error al obtener el producto:', error);
        });
    };
    

    fetchProduct();
  }, [params.productId]);

  const handleBuy = () => {
    if (!isLoggedIn) {
      // Si el usuario no está autenticado, muestra el mensaje con SweetAlert2
      Swal.fire({
        icon: 'warning',
        title: '¡Debes iniciar sesión!',
        text: 'Debes iniciar sesión para agregar productos al carrito.',
        showCancelButton: true,
        confirmButtonText: 'Iniciar sesión',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          // Redirige al usuario a la página de inicio de sesión si hacen clic en "Iniciar sesión"
          router.push('/login');
        }
      });
    
      // Detén la ejecución para evitar que el código siguiente se ejecute
      return;
    }

    // Simulación de agregar producto al carrito
    Swal.fire({
      icon: 'success',
      title: '¡Producto agregado al carrito!',
      showConfirmButton: false,
      timer: 1500, // Duración en milisegundos para mostrar el mensaje antes de cerrarlo automáticamente
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

