import styled from 'styled-components';
import {Container} from '../../styles/shared/Container';

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
  white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;


    @supports (-webkit-line-clamp: 3) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
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
export const ImgDiv = styled.div`
  max-height: 150px;
  display: flex;
  justify-content: center;
`;
