import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: white;
  }
  *{
    font-family: 'Nunito Sans', sans-serif;

  }
  h3{
    font-family: 'Montserrat', sans-serif;
  }
  .main{
    display:flex;
    justify-content:center;
  }
  hr{
    width:95%;
    height: 1px;
    background-color: #D3D3D4;
    border: none;
  }

`;

export default GlobalStyle;
