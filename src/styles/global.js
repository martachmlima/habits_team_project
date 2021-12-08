import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        box-sizing:border-box;
        outline:0;
    }
    :root{
      --branco: #FFFFFF;
      --roxo: #B13AC6;
      --rosa-pink: #CC68BE;
      --rosa: #EE92B9;
      --rosa-claro: #E7ABAB;
      --roxo-escuro: #9320C2
      --cinza: #C1D1E8;
      --cinza-claro: #E0E9F8;
      --preto-opacity: rgba(0, 0, 0, 0.25);
      --cinza-placeholder: #867F7F;
      --white: #f2f2f2;
      --purple: #DFC2EB;
      --dark-purple: #9320C2;
      --secondary-purple: #d8bbe3;
      --light-purple: #E8D8F1;
      --very-ligtht-purle: #EEE3F3;
      --pink: #FFB8B8;
      --light-pink:#E9D5F1;
      --very-light-pink:#EDDFF2;
      --dark-pink: #cc68be;
      --fuscia: #b54bfa;
      --gray: #CCCCCC;
      --dark-gray: #867f7f;
      }

    h1, h2, h3, h4, h5, h6{
        font-weight: 700;
    }
    
    button{
        cursor: pointer;
    }

    a{
        text-decoration:none;
    }
`;

export default GlobalStyle;
