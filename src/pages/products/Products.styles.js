import styled from 'styled-components';
import {Container} from '../../styles/shared/Container';

export const ProductsContainer = styled(Container)`
  display: flex;
  width: 70%;
`;

export const GridContainer = styled(Container)`
  margin-top: 32px;
  display: grid;
  ${'' /* grid-template-columns: 1fr 1fr 1fr 1fr 1fr; */}
  grid-template-columns: repeat(5, minmax(0, 1fr));
  column-gap: 40px;
  row-gap: 40px;
`;

export const TagsContainer = styled(Container)`
  margin-right: 32px;
  margin-top: 32px;
  background-color: #f5f5f5;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
