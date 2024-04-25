// App.jsx
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';

// Define tus productos aquí
const productsToPreLoad = [
    {
        id: 1,
        name: 'iPhone 11',
        image:
          'https://http2.mlstatic.com/D_NQ_NP_809326-MLA46115014340_052021-O.webp',
      },
      {
        id: 2,
        name: 'MacBook Air',
        image:
          'https://http2.mlstatic.com/D_NQ_NP_868385-MLA52463970075_112022-O.webp',
      },
      {
        id: 3,
        name: 'iPad Pro',
        image:
          'https://http2.mlstatic.com/D_NQ_NP_814559-MLA53970921150_022023-O.webp',
      },
      {
        id: 4,
        name: 'Apple Watch Series 6',
        image:
          ' https://http2.mlstatic.com/D_NQ_NP_733580-MLA72063241888_102023-O.webp',
      },
      {
        id: 5,
        name: 'AirPods Pro',
        image:
          ' https://http2.mlstatic.com/D_NQ_NP_606698-MLU74678792835_022024-O.webp',
      },
      {
        id: 6,
        name: 'HomePod mini',
        image:
          'https://http2.mlstatic.com/D_NQ_NP_800774-MLA45740145234_042021-O.webp',
      },
];

const App = () => {
  return (
    <div>
      <Navbar /> 
      <ProductGrid products={productsToPreLoad} /> {/* Pasa los productos como prop a ProductGrid */}
    </div>
  );
};

export default App;
