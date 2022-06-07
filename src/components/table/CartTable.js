import React from 'react';
import {
  DetailsContainer,
  DetailsTextContainer,
  QuantityContainer,
  SpacedTd,
} from './CartTable.styles';
import {Text} from '../../styles/shared/Text';

const CartTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Product details</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <SpacedTd style={{padding: '16px'}}>
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
      </tbody>
    </table>
  );
};

export default CartTable;
