import React from 'react';
import {Button} from '../../styles/shared/Button';
import {
  CardContainer,
  Content,
  Department,
  ImgDiv,
  ProductName,
  ProductPrice,
} from './Card.styles';

const Card = ({productName, price, department, image}) => (
  <CardContainer>
    <ImgDiv>
      <img
        style={{maxWidth: '100%', maxHeight:'100%'}}
        src={image}
        alt={productName}
      />
    </ImgDiv>
    <Content>
      <ProductName>{productName}</ProductName>
      <Department>{department}</Department>
      <ProductPrice>${price}</ProductPrice>
      <Button>Add to cart</Button>
    </Content>
  </CardContainer>
);

export default Card;
