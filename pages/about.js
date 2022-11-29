import styled from "styled-components";

const Container = styled.div`
  border: 10px solid #000;
  width: 100%;
`;

export function AboutPage(props) {
  return (
    <Container>
      <h1>{props.h1Title}</h1>
    </Container>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      h1Title: "About Me",
    },
  };
}

export default AboutPage;
