import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    padding: 0;
    background-color: ${({ theme }) => theme.colors.grayLight};
    line-height: 1.5;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: normal;
  }

  a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.link};
  }

`;

export default GlobalStyle;
