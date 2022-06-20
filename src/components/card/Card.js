import React from 'react';
import {Button} from '../../styles/shared/Button';
import {useDispatch} from 'react-redux';
import {addToCart} from '../../state/cartSlice';
import {
  CardContainer,
  Content,
  Department,
  ImgDiv,
  ProductName,
  ProductPrice,
} from './Card.styles';
import {Image} from '../../styles/shared/Image';

const Card = ({product}) => {
  const {id, name, price, categories, images} = product;
  const dispatch = useDispatch();
  return (
    <CardContainer>
      <ImgDiv>
        <Image
          src={images[0]}
          alt={name}
        />
      </ImgDiv>
      <Content>
        <ProductName>{name}</ProductName>
        <Department>{categories[0]}</Department>
        <ProductPrice>${price}</ProductPrice>
        <Button onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </Button>
      </Content>
    </CardContainer>
  );
};

export default Card;
