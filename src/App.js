import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import styled, { createGlobalStyle } from "styled-components";
import { Container } from "@bootstrap-styled/v4";
import Header from "./Core/Header";
import FeatureList from "./Core/FeatureList";
import Footer from "./Core/Footer";
import COLORS from "./Core/Colors";
import { loadContent } from "./Redux/Actions/contentActions";
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

const Title = styled.h2`
  font-size: 3.3333333333em;
  font-weight: 300;
  letter-spacing: -0.05em;
  line-height: 1em;
  color: ${COLORS.siteGreen};
  text-align: center;
`;
const Strong = styled.strong`
  font-weight: 800;
`;
const Subtitle = styled.h3`
  font-size: 1.7777777778em;
  font-weight: 300;
  letter-spacing: -0.0625em;
  line-height: 1.1875em;
  color: ${COLORS.siteGrey};
  text-align: center;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
`;
const Color = styled.span`
  display: inline-block;
  background: ${(props) => props.color};
  border-radius: 50%;
  height: 15px;
  width: 15px;
  vertical-align: middle;
  margin-bottom: 7px;
  margin-right: 7px;
`;

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
    ${(props) =>
      !props.blackFriday &&
      `
      background-image: url(${Background});
    `};
    ${(props) =>
      props.blackFriday &&
      `
      background-color: ${COLORS.black};
    `};
    font-family: "Open Sans", Helvetica, sans-serif, arial;
    text-shadow: 1px 1px 0px #fff;
    font-size:18px;
  }
`;

function App({ content, loadContent }) {
  const [blackFriday, setBlackFriday] = useState(false);
  useEffect(() => {
    if (
      content.pages.length === 0 ||
      content.pages.features === 0 ||
      content.brands.length === 0
    ) {
      loadContent().catch((error) => {
        alert("Loading courses failed:" + error);
      });
    }
  }, [loadContent, content]);
  const handleBlackFriday = (event) => {
    if (event) {
      event.preventDefault();
    }
    setBlackFriday(!blackFriday);
  };
  return (
    <Container>
      <GlobalStyle blackFriday={blackFriday} />
      {content.pages.length > 0 ? <Header list={content.pages} /> : ""}
      <Title>
        Crie este site <Strong>responsivo</Strong> com <Strong>REACT</Strong>{" "}
        utilizando <Strong>styled-components</Strong>
      </Title>
      <Subtitle>
        A fonte utilizada é a Open Sans de 300 a 800. exemplo: "Open Sans",
        Helvetica, sans-serif, arial; Já as cores são:{" "}
        <Color color={COLORS.siteGreen} />
        #007f56, <Color color={COLORS.siteGrey} />
        #868686,
        <Color color={COLORS.siteRed} />
        #FE9481, <Color color={COLORS.siteYellow} />
        #FCDA92 e <Color color={COLORS.sitePurple} />
        #9C8CB9
      </Subtitle>
      {content.features.length > 0 ? (
        <FeatureList
          list={content.features}
          blackFridayFunc={handleBlackFriday}
        />
      ) : (
        ""
      )}
      {content.brands.length > 0 ? <Footer list={content.brands} /> : ""}
    </Container>
  );
}

App.propTypes = {
  content: PropTypes.object.isRequired,
  loadContent: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    content: state.content,
  };
}

const mapDispatchToProps = {
  loadContent,
};

//Loading full content in the root app just to exemplify redux implementations
export default connect(mapStateToProps, mapDispatchToProps)(App);
