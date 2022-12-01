import { useCallback, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 10px solid ${({ theme }) => theme.textColor900};
  width: 100%;
`;

export function BuserPage(props) {
  const verifyAccess = useCallback(async () => {
    fetch(location.origin + "/api/password", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify({ password: "xarope" }),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    verifyAccess();
  }, []);

  return (
    <Container>
      <h1>{props.h1Title}</h1>
    </Container>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      h1Title: "Buser Page",
    },
  };
}

export default BuserPage;
