import { createGlobalStyle } from "styled-components";

const CSSReset = createGlobalStyle`
  /* Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  }
  html {
    position:relative;
    display: flex;
    flex-direction: column;
    min-height: 100%;
    font-size: 62.5%;
  }
  body {
    font-family: "Roboto", sans-serif;
    min-height: 100%;
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
    font-weight: 600;
  }
  p{
    line-height:150%;
    font-size: 1.6rem;
    color: ${({ theme }) => theme.textColor700};
  }
  a:hover{
    opacity:1;
  }
  .bold{
    font-weight:900;
    color: ${({ theme }) => theme.textColor900};
  }
  .link-case-description{
    color: ${({ theme }) => theme.textColor900};
    text-decoration:underline;
    font-size: 1.6rem;
  }
  .link-social{
    color: ${({ theme }) => theme.textColor300};
    text-decoration:underline;
    font-size: 1.6rem;
    display:inline-flex;
  }
  .link-social {
    margin:0px 0px 0px 8px;
  }
  ul{
    font-size: 1.6rem;
    color: ${({ theme }) => theme.textColor700};
    padding-left: 32px;
    li{
      line-height:150%;
    }
  }
`;

export default CSSReset;
