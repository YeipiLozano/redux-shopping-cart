import styled from 'styled-components';
import {Container} from '../../styles/shared/Container';

export const CartContainer = styled(Container)`
  flex-direction: row;
`;

export const ItemsContainer = styled(Container)`
  flex-direction: column;
`;

export const CheckoutContainer = styled(Container)`
  padding: 32px;
  margin-top: 32px;
  padding-top: 0px;
  flex-direction: column;
  background-color: #f5f5f5;
`;
