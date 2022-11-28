import styled from "styled-components";

const FirstMessageArea = styled.div`
  position: relative;
  flex: 1;
  border: 2px solid blue;
  .floatingMessage {
    position: absolute;
    top: calc(50% - 100px);
    left: 0px;
    background: ${({ theme }) => theme.backgroundBase};
    h1,
    p {
      color: ${({ theme }) => theme.textColor900};
    }
  }
`;

export default FirstMessageArea;
