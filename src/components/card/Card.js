import React from 'react';
import {Button} from '../../styles/shared/Button';
import {
  CardContainer,
  Content,
  Department,
  ProductName,
  ProductPrice,
} from './Card.styles';

const Card = ({productName, price, department}) => (
  <CardContainer>
    <img src='https://via.placeholder.com/150x150' alt={productName} />
    <Content>
      <ProductName>{productName}</ProductName>
      <Department>{department}</Department>
      <ProductPrice>${price}</ProductPrice>
      <Button>Agregar al carrito</Button>
    </Content>
  </CardContainer>
);

export default Card;
