import ThemeSwitcherComponent from "../src/components/ThemeSwitcher";
import styled from "styled-components";

const FirstMessage = styled.label`
  background: ${({ theme }) => theme.backgroundBase};
`;

export function HomePage(props) {
  return (
    <>
      <FirstMessage>
        <p>{props.authorName}</p>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div className="social-links">
          <a href="">Linkedin</a>
          <a href="">Email</a>
          <a href="">Github</a>
          <a href="">Behance</a>
          <a href="">About me</a>
        </div>
      </FirstMessage>
      <ThemeSwitcherComponent />
    </>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      h1Title: "FRONTEND & UX/UI DESIGNER",
      authorName: "Gabriel Lamas",
      description:
        "Here you can see digital products I helped to build, my contacts, and some code projects",
    }, // will be passed to the page component as props
  };
}

export default HomePage;
