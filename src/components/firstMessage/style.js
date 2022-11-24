import styled from "styled-components";

const FirstMessage = styled.div`
  background: ${({ theme }) => theme.backgroundBase};

  h1,
  p {
    color: ${({ theme }) => theme.textColor900};
  }
`;

export default FirstMessage;
