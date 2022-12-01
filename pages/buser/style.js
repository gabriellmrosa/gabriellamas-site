import styled from "styled-components";

const Container = styled.div`
  border: 10px solid ${({ theme }) => theme.textColor900};
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  .body {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 964px;
    width: 100%;
    margin: 0px auto;
    padding: 0px 32px;

    * {
      margin: 24px 0px;
    }
    .image-container {
      img {
        width: 100%;
        height: auto;
        margin: 0px;
      }
      p {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.textColor600};
        margin: 0px;
        text-align: center;
      }
    }

    h2 {
      max-width: 500px;
    }
  }
`;

export default Container;
