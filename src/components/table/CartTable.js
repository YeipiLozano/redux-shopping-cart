import React from 'react';
import {
  DetailsContainer,
  DetailsTextContainer,
  QuantityContainer
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
          <td>
            <DetailsContainer>
              <img src='https://via.placeholder.com/150x150' alt='Producto' />
              <DetailsTextContainer>
                <Text>Hemmed Light Jumper</Text>
                <Text>Color: Navy</Text>
                <Text>Size XS</Text>
                <Text>Product code 111000</Text>
              </DetailsTextContainer>
            </DetailsContainer>
          </td>
          <td>
            <QuantityContainer>
              <input defaultValue='2' type='number' />
              <button>Remove</button>
            </QuantityContainer>
          </td>
          <td>$35.00</td>
          <td>$70.00</td>
        </tr>
        <tr>
          <td>
            <DetailsContainer>
              <img src='https://via.placeholder.com/150x150' alt='Producto' />
              <DetailsTextContainer>
                <Text>Hemmed Light Jumper</Text>
                <Text>Color: Navy</Text>
                <Text>Size XS</Text>
                <Text>Product code 111000</Text>
              </DetailsTextContainer>
            </DetailsContainer>
          </td>
          <td>
            <QuantityContainer>
              <input defaultValue='2' type='number' />
              <button>Remove</button>
            </QuantityContainer>
          </td>
          <td>$35.00</td>
          <td>$70.00</td>
        </tr>
        <tr>
          <td>
            <DetailsContainer>
              <img src='https://via.placeholder.com/150x150' alt='Producto' />
              <DetailsTextContainer>
                <Text>Hemmed Light Jumper</Text>
                <Text>Color: Navy</Text>
                <Text>Size XS</Text>
                <Text>Product code 111000</Text>
              </DetailsTextContainer>
            </DetailsContainer>
          </td>
          <td>
            <QuantityContainer>
              <input defaultValue='2' type='number' />
              <button>Remove</button>
            </QuantityContainer>
          </td>
          <td>$35.00</td>
          <td>$70.00</td>
        </tr>
        <tr>
          <td>
            <DetailsContainer>
              <img src='https://via.placeholder.com/150x150' alt='Producto' />
              <DetailsTextContainer>
                <Text>Hemmed Light Jumper</Text>
                <Text>Color: Navy</Text>
                <Text>Size XS</Text>
                <Text>Product code 111000</Text>
              </DetailsTextContainer>
            </DetailsContainer>
          </td>
          <td>
            <QuantityContainer>
              <input defaultValue='2' type='number' />
              <button>Remove</button>
            </QuantityContainer>
          </td>
          <td>$35.00</td>
          <td>$70.00</td>
        </tr>

      </tbody>
    </table>
  );
};

export default CartTable;