import { IProduct } from "@/app/types/idex";
import Card from "../card/Card";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Cards = ({ products } : { products: IProduct[]}) => {
  return (
    <CardsContainer>
      {products?.map((product) => {
        return <Card key={product.name} {...product} />;
      })}
    </CardsContainer>
  );
};

export default Cards;
