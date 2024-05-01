import styled from "styled-components";
import categoriesToPreLoad from "../../utils/categories";
import { IProduct } from "@/app/types/idex";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f2f2f2;
  color: black;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 1rem;
  max-width: 300px;
  width: 300px;
  height: 500px;
  min-height: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  max-width: 100px;
  height: 100%;
  max-height: 200px;
`;

const Card = ({ name, price, description, image, categoryId, stock }: IProduct) => {
  return (
    <CardContainer>
      <Image src={image} alt={image} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>${price}</p>
      <p>Category: {categoriesToPreLoad[categoryId].name}</p>
      <p>Stock: {stock}</p>
    </CardContainer>
  );
};

export default Card;
