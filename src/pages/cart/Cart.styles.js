import styled from 'styled-components';
import {Container} from '../../styles/shared/Container';

export const CartContainer = styled(Container)`
  flex-direction: row;
`;

export const ItemsContainer = styled(Container)`
  margin-top: 32px;
  flex-direction: column;
`;

export const CheckoutContainer = styled(Container)`
 margin-left:32px;
  margin-top: 32px;
  padding-top: 0px;
  flex-direction: column;
  justify-content: flex-start;
`;

export const CheckoutCard = styled.div`
  background-color: #f5f5f5;
  padding: 32px;
`;

export const CheckoutTitle = styled.h3`
  margin-top: 0px;
`;
