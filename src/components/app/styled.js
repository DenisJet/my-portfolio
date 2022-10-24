import { createGlobalStyle } from 'styled-components';
import { devices } from '../../consts';

export const GlobalStyle = createGlobalStyle`

  html {
    height: 100%;
    scroll-behavior: smooth;
  }

  body,
  html {
    margin: 0;
  }

  body {
    position: relative;
    min-width: 320px;
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: ${(props) => props.theme.lineHeightDefault};
    font-weight: ${(props) => props.theme.fontWeightDefault};
    color: ${(props) => props.theme.colorBlack};

    @media (${devices.MOBILE}) {
      font-size: ${(props) => props.theme.fontSizeMobile};
    }
  }
`;
