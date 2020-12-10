import * as React from "react";
import styled, {
  ThemeProvider,
  createGlobalStyle,
  DefaultTheme,
} from "styled-components";
import Header from "./Header";
import Meta from "./Meta";
import Footer from "./Footer";

//main theme
const theme: DefaultTheme = {
  maxWidth: "1600px",
  grey: "#2D2D2D",
  pink: "#FFA8C3",
  offWhite: "#FAEDE9",
  greenBlue: "#ADFFD5",
  border: "solid 2px #FFA8C3",
  marginFromFooter: "15rem",
};

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 10px;
        padding: 0 2rem;
        -webkit-tap-highlight-color:transparent;

        @media only screen and (max-width: 500px) {
          margin: 0 1rem;
        }
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        background-color: ${(props) => props.theme.grey};
        color: ${(props) => props.theme.offWhite};
        font-family: 'Nunito';
        padding: 0;
        margin: 0 auto;
        font-size: 1.5rem;
    }

    a {
        text-decoration: none;
        font-weight: 900;
        color: ${(props) => props.theme.greenBlue};
        transition: all .5s;
        &:visited {
        color: ${(props) => props.theme.greenBlue};
        }
        &:hover {
        color: ${(props) => props.theme.pink};
    }
  }
`;

class Page extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Meta />
        <Header />
        {this.props.children}
        <Footer />
      </ThemeProvider>
    );
  }
}

export default Page;
