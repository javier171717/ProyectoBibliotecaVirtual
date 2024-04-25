

import styled from 'styled-components';
import ProductCard from '../components/ProductCard'; 

const ProductGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Responsivo */
  gap: 16px;
`;

const ProductGrid = ({ products }) => {
  return (
    <ProductGridContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductGridContainer>
  );
};

export default ProductGrid;
