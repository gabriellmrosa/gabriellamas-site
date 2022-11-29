import { createGlobalStyle } from "styled-components";

const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    font-size: 62.5%;
  }
  body {
    font-family: "Roboto", sans-serif;
    background: ${({ theme }) => theme.backgroundBase};
  }
  /* NextJS */
  body {
    display: flex;
    flex: 1;
  }
  #__next {
    display: flex;
    flex: 1;
  }
  /* Globals */
  button,
  a {
    text-decoration: none;
    opacity: 1;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .5;
    }
  }
  h1,h2,h3,h4,h5{
    line-height:120%;
  }
  h1,h2,h3,h4,h5 {
    color: ${({ theme }) => theme.textColor900};
  }
  h1{
    font-size: 17.74rem;
  }
  h2{
    font-size: 10.96rem;
  }
  h3{
    font-size: 6.77rem;
  }
  h4{
    font-size: 4.18rem;
  }
  h5{
    line-height: 150%;
    font-size: 2.58rem;
    font-weight: 400;
    color: ${({ theme }) => theme.textColor700};
  }
  p{
    line-height: 150%;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.textColor700};
  }
  .intern-link{
    color: ${({ theme }) => theme.textColor900};
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 150%;
    display:flex;
    align-items:center;
  }
`;

export default CSSReset;
