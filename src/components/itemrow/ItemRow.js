import {
  DetailsContainer,
  DetailsTextContainer,
  QuantityContainer,
  SpacedTd,
} from './ItemRow.styles';
import {Text} from '../../styles/shared/Text';

import React from 'react';

const ItemRow = () => {
  return (
    <tr>
      <SpacedTd>
        <DetailsContainer>
          <img src='https://via.placeholder.com/150x150' alt='Producto' />
          <DetailsTextContainer>
            <Text>Hemmed Light Jumper</Text>
            <Text>Color: Navy</Text>
            <Text>Size XS</Text>
            <Text>Product code 111000</Text>
          </DetailsTextContainer>
        </DetailsContainer>
      </SpacedTd>
      <SpacedTd>
        <QuantityContainer>
          <input defaultValue='2' type='number' />
          <button>Remove</button>
        </QuantityContainer>
      </SpacedTd>
      <SpacedTd>$35.00</SpacedTd>
      <SpacedTd>$70.00</SpacedTd>
    </tr>
  );
};

export default ItemRow;
