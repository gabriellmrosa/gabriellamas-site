import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 10px solid ${({ theme }) => theme.textColor900};
  height: 500px;
  cursor: pointer;
  .square {
    position: absolute;
    top: 50%;
    left: 0px;
    transform: translate(-10%, -50%);
    background: ${({ bgLogoColor }) => bgLogoColor};
    width: 55%;
    height: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px;
    img {
      max-width: 100%;
    }
  }
  .description {
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translate(10%, -50%);
    width: 55%;
    background: ${({ theme }) => theme.backgroundBase};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 24px;
    h5 {
      color: ${({ theme }) => theme.textColor900};
    }
    p {
      margin: 16px 0px;
    }
  }

  @media (max-width: 580px) {
    height: auto;
    flex-direction: column;
    .square,
    .description {
      position: relative;
      transform: translate(0, 0);
      width: 100%;
      top: 0;
      left: 0;
    }
    .square {
      height: 180px;
    }
  }
`;

export default Container;
