import styled from 'styled-components';

const ProductCardContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  width: 100%; /* Opcional: ajusta el ancho según necesites */
`;

const ProductImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const ProductName = styled.h3`
  margin-top: 8px;
`;

const ProductDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const ProductPrice = styled.div`
  color: #333;
  font-weight: bold;
  margin-top: 8px;
`;

const ProductQuantity = styled.div`
  color: #333;
  margin-top: 8px;
`;

const ProductCard = ({ product }) => {
  return (
    <ProductCardContainer>
      <ProductImage src={product.image} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>${product.price}</ProductPrice>
      <ProductQuantity>Cantidad: {product.quantity}</ProductQuantity>
    </ProductCardContainer>
  );
};

export default ProductCard;
