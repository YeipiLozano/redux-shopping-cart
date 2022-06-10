import styled from 'styled-components';
import { Container } from '../../styles/shared/Container';

export const CardContainer = styled(Container)`
  width: 100%;
  justify-content: space-between;
  font-size: 1em;
  color: black;
  cursor: pointer;
  flex-direction: column;
`;

export const Content = styled.div`
  align-self: center;
  width: 100%;
  text-align: center;
  padding: 16px;
`;

export const ProductName = styled.h3`
  margin: 0px;
  text-align: left;
`;

export const Department = styled.p`
  margin: 4px 0px 8px 0px;
  text-align: left;
  font-weight: 100;
`;

export const ProductPrice = styled.h4`
  margin: 0px;
  text-align: right;
`;