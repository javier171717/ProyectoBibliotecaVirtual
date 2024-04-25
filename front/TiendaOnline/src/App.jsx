// App.jsx
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';


const productsToPreLoad = [
  {
    id: 1,
    name: 'iPhone 11',
    description: 'El último modelo de iPhone con cámara dual.',
    price: 699,
    quantity: 10,
    image: 'https://http2.mlstatic.com/D_NQ_NP_809326-MLA46115014340_052021-O.webp',
  },
  {
    id: 2,
    name: 'MacBook Air',
    description: 'Ligero y potente, con rendimiento para todo el día.',
    price: 999,
    quantity: 5,
    image: 'https://http2.mlstatic.com/D_NQ_NP_868385-MLA52463970075_112022-O.webp',
  },
  {
    id: 3,
    name: 'iPad Pro',
    description: 'La experiencia más inmersiva con la pantalla Liquid Retina.',
    price: 799,
    quantity: 7,
    image: 'https://http2.mlstatic.com/D_NQ_NP_814559-MLA53970921150_022023-O.webp',
  },
  {
    id: 4,
    name: 'Apple Watch Series 6',
    description: 'Un reloj como ningún otro, con funciones de salud avanzadas.',
    price: 399,
    quantity: 8,
    image: 'https://http2.mlstatic.com/D_NQ_NP_733580-MLA72063241888_102023-O.webp',
  },
  {
    id: 5,
    name: 'AirPods Pro',
    description: 'Sonido de alta calidad con cancelación de ruido.',
    price: 249,
    quantity: 15,
    image: 'https://http2.mlstatic.com/D_NQ_NP_606698-MLU74678792835_022024-O.webp',
  },
  {
    id: 6,
    name: 'HomePod mini',
    description: 'Sonido increíble, inteligencia Siri y diseño compacto.',
    price: 99,
    quantity: 12,
    image: 'https://http2.mlstatic.com/D_NQ_NP_800774-MLA45740145234_042021-O.webp',
  },
];

const App = () => {
  return (
    <div>
      <Navbar /> 
      <ProductGrid products={productsToPreLoad} /> 
    </div>
  );
};

export default App;
