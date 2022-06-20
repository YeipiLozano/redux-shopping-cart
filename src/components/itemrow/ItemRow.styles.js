import styled from 'styled-components';
import {Container} from '../../styles/shared/Container';

export const DetailsContainer = styled(Container)`
  flex-direction: row;
`;

export const DetailsTextContainer = styled(Container)`
  margin-left: 32px;
  flex-direction: column;
  max-width: 300px;
`;

export const QuantityContainer = styled(Container)`
  flex-direction: column;
  width: 50%;
  margin: auto;
`;

export const SpacedTd = styled.td`
  padding: 16px;
`;

export const ImgDiv = styled.div`
  max-width: 150px;
  display: flex;
  justify-content: center;
`;
