import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 10px solid ${({ theme }) => theme.textColor900};
  width: 100%;
`;

function useForm(propsFromForm) {
  const [values, setValues] = useState(propsFromForm.initialValues);

  return {
    values,
    handleChange: (event) => {
      const value = event.target.value;
      const name = event.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
      setValues({});
    },
  };
}

export function BuserPage(props) {
  const formTryAccess = useForm({ initialValues: { password: "" } });

  const verifyAccess = useCallback(async (event, password) => {
    event.preventDefault();
    fetch(location.origin + "/api/password", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify({ password: password }),
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <h1>{props.h1Title}</h1>
      <form
        onSubmit={(event) => verifyAccess(event, formTryAccess.values.password)}
      >
        <input
          type="password"
          name="password"
          value={formTryAccess.values.password}
          onChange={formTryAccess.handleChange}
          required
        />
        <button>Tentar</button>
      </form>
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
