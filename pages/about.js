import styled from "styled-components";
import { InternLinkArrowLeft } from "../src/elements/InternLink";

const Container = styled.div`
  border: 10px solid ${({ theme }) => theme.textColor900};
  width: 100%;
`;

export function AboutPage(props) {
  return (
    <Container>
      <InternLinkArrowLeft text="HOME" href="/" />
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
