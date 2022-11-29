import styled from "styled-components";

const FirstMessageArea = styled.div`
  position: relative;
  flex: 1;
  .floatingMessage {
    position: absolute;
    top: 50%;
    transform: translate(0%, -50%);
    left: 0px;
    .author {
      font-weight: 400;
      margin-bottom: 8px;
    }
    .title {
      font-size: 9.42rem;
      line-height: 100%;
      width: 89%;
      margin-bottom: 24px;
    }
    .description {
      width: 89%;
    }
    .social-links {
      margin-top: 24px;
      display: flex;
      gap: 16px;
    }
  }
`;

export default FirstMessageArea;
