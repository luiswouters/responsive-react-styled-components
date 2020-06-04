import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createGlobalStyle } from "styled-components";
import Background from "./Assets/Img/background.jpg";
import OpenSansBold from "./Assets/Fonts/Open_Sans/OpenSans-Bold.ttf";
import OpenSansExtraBold from "./Assets/Fonts/Open_Sans/OpenSans-ExtraBold.ttf";
import OpenSansLight from "./Assets/Fonts/Open_Sans/OpenSans-Light.ttf";
import OpenSansSemiBold from "./Assets/Fonts/Open_Sans/OpenSans-SemiBold.ttf";
import OpenSansRegular from "./Assets/Fonts/Open_Sans/OpenSans-Regular.ttf";
import OpenSansExtraBoldItalic from "./Assets/Fonts/Open_Sans/OpenSans-ExtraBoldItalic.ttf";
import OpenSansBoldItalic from "./Assets/Fonts/Open_Sans/OpenSans-BoldItalic.ttf";
import OpenSansLightItalic from "./Assets/Fonts/Open_Sans/OpenSans-LightItalic.ttf";
import OpenSansItalic from "./Assets/Fonts/Open_Sans/OpenSans-Italic.ttf";
import OpenSansSemiBoldItalic from "./Assets/Fonts/Open_Sans/OpenSans-SemiBoldItalic.ttf";

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: url(${OpenSansLight}) format('truetype');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }  

  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 300;
    font-display: swap;
    src: url(${OpenSansLightItalic}) format('truetype');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${OpenSansRegular}) format('truetype');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }  

  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url(${OpenSansItalic}) format('truetype');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url(${OpenSansSemiBold}) format('truetype');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }  

  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 600;
    font-display: swap;
    src: url(${OpenSansSemiBoldItalic}) format('truetype');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url(${OpenSansBold}) format('truetype');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }  

  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url(${OpenSansBoldItalic}) format('truetype');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 800;
    font-display: swap;
    src: url(${OpenSansExtraBold}) format('truetype');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }  

  @font-face {
    font-family: 'Open Sans';
    font-style: italic;
    font-weight: 800;
    font-display: swap;
    src: url(${OpenSansExtraBoldItalic}) format('truetype');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  body {
    background-image: url(${Background});
    font-family: 'Open Sans';
    text-shadow: 1px 1px 0px #fff;
    font-size:18px;
  }
`;

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </React.Fragment>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
