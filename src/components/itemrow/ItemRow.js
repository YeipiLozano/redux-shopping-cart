import {
  DetailsContainer,
  DetailsTextContainer,
  ImgDiv,
  QuantityContainer,
  SpacedTd,
} from './ItemRow.styles';
import {Text} from '../../styles/shared/Text';

import React from 'react';
import {Image} from '../../styles/shared/Image';

const ItemRow = ({product, quantity}) => {
  const {name, price, categories, images, id} = product;
  return (
    <tr>
      <SpacedTd>
        <DetailsContainer>
          <ImgDiv>
            <Image src={images[0]} alt='Producto' />
          </ImgDiv>
          <DetailsTextContainer>
            <Text>{name}</Text>
            <Text>Product code: {id}</Text>
          </DetailsTextContainer>
        </DetailsContainer>
      </SpacedTd>
      <SpacedTd>
        <QuantityContainer>
          <input defaultValue={quantity} type='number' />
          <button>Remove</button>
        </QuantityContainer>
      </SpacedTd>
      <SpacedTd>${price}</SpacedTd>
      <SpacedTd>${price * quantity}</SpacedTd>
    </tr>
  );
};

export default ItemRow;
