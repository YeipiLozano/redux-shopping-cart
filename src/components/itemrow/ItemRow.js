import {
  DetailsContainer,
  DetailsTextContainer,
  ImgDiv,
  QuantityContainer,
  SpacedTd,
} from './ItemRow.styles';
import {Text} from '../../styles/shared/Text';
import {updateQuantity, removeFromCart} from '../../state/cartSlice';

import React from 'react';
import {Image} from '../../styles/shared/Image';
import {useDispatch} from 'react-redux';

const ItemRow = ({product, quantity}) => {
  const dispatch = useDispatch();
  const {name, price, images, id} = product;
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
          <input
            defaultValue={quantity}
            onChange={(e) =>
              dispatch(updateQuantity({id, quantity: parseInt(e.target.value)}))
            }
            type='number'
            min={0}
          />
          <button onClick={() => dispatch(removeFromCart(id))}>Remove</button>
        </QuantityContainer>
      </SpacedTd>
      <SpacedTd>${price}</SpacedTd>
      <SpacedTd>${(price * quantity).toFixed(2)}</SpacedTd>
    </tr>
  );
};

export default ItemRow;
