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
    margin:0px 0px 0px 8px;
    &:hover{
      opacity:.5;
    }
  }
 
  ul{
    font-size: 1.6rem;
    color: ${({ theme }) => theme.textColor700};
    padding-left: 32px;
    li{
      line-height:150%;
    }
  }


  //DEFAULT CSS FOR CASE PROJECTS ALL INSIDE DE "BODY" CLASS DIV
  .body-case {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 964px;
    width: 100%;
    margin: 32px auto;
    padding: 0px 32px;
    gap: 32px;
    h2 {
      max-width: 500px;
      margin-bottom: 80px;
    }
    li + li {
      margin-top: 24px;
    }
    figure {
      width: 100%;
      img {
        width: 100%;
        height: auto;
        margin: 0px;
      }
      figcaption {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.textColor600};
        margin: 0px;
        text-align: center;
      }
    }
    @media (max-width: 1115px) {
      h2 {
        font-size: 17vw;
      }
    }

  }
`;

export default CSSReset;
