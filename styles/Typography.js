import { createGlobalStyle } from "styled-components";
import bg from "../public/images/textBG.png";

const Typography = createGlobalStyle`
  @font-face {
    font-family: "Fattern";
     src:  url("/fonts/Fattern-GO6zm.otf") ;
  }
  @font-face {
    font-family: "Pacifico";
     src:  url("/fonts/Pacifico.ttf") ;
  }

  @font-face {
    font-family: "mako";
    src: url("/fonts/Mako-Regular.ttf") ;
  }
  html {
    font-family:"Fattern",-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: var(--black);
  }

  p {
    font-size: 4.5vmin;
    font-style: italic;
    line-height: 5vmin;
    font-weight: 700;
    letter-spacing: 0.5vmin;
    font-family: Pacifico, -apple-system, BlinkMacSystemFont;
  }
  h1,h2,h3 {
    font-family: "Fattern", Arial, Helvetica, sans-serif;
    background: url(${bg.src});
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    background-position: center center;
    background-size: contain;

  }
  a {
    color: var(--black);
    text-decoration: none;
  }
  li {
    list-style: none;
  }

`;

export default Typography;
