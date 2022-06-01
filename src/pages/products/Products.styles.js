import styled from 'styled-components';
import {Container} from '../../styles/shared/Container';

export const ProductsContainer = styled(Container)`
margin-top:32px;
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
column-gap:40px;
row-gap:40px
`;
