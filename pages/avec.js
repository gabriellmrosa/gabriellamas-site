import styled from "styled-components";

const Container = styled.div`
  border: 10px solid ${({ theme }) => theme.textColor900};
  width: 100%;
`;

export function AvecPage(props) {
  return (
    <Container>
      <h1>{props.h1Title}</h1>
    </Container>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      h1Title: "Avec Page",
    },
  };
}

export default AvecPage;
