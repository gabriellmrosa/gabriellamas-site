import styled from "styled-components";

const Container = styled.div`
  border: 10px solid ${({ theme }) => theme.textColor900};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  .unpublic {
    display: none;
  }
  .container-form {
    position: fixed;
    z-index: 10;
    bottom: 0px;
    left: 0px;
    background: ${({ theme }) => theme.textColor900};
    width: 100%;
    height: auto;
    padding: 40px 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 220px;
      height: auto;
      object-fit: cover;
      transform: translate(0px, 10px);
    }
    form {
      display: flex;
      flex-direction: column;
      max-width: 450px;
      width: 100%;
      p {
        color: ${({ theme }) => theme.textColor300};
        font-size: 1.6rem;
        max-width: 350px;
      }
      label {
        position: relative;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 300px;
        margin: 32px 0px 8px;
        color: ${({ theme }) => theme.textColor300};
        span {
          position: absolute;
          font-size: 1.6rem;
          top: 50%;
          left: 8px;
          transform: translate(0%, -50%);
          margin-bottom: 8px;
          opacity: 0.6;
          transition: 300ms;
        }
        input {
          padding: 8px 8px;
          font-size: 1.6rem;
          background: none;
          border: 1px solid ${({ theme }) => theme.textColor300};
          color: ${({ theme }) => theme.textColor300};
          border-radius: 4px;
        }
        svg {
          position: absolute;
          top: 50%;
          right: 8px;
          width: 24px;
          height: auto;
          transform: translate(0%, -50%);
          opacity: 0.4;
          transition: 300ms;
        }

        input:focus ~ svg {
          opacity: 1;
        }
        input:focus + span {
          opacity: 1;
          transform: translate(0%, -100%);
          top: -10%;
          left: 0px;
          font-size: 1.2rem;
        }
      }
      button {
        width: 100%;
        max-width: 300px;
        border: none;
        background: ${({ theme }) => theme.textColor300};
        color: ${({ theme }) => theme.textColor900};
        padding: 12px 8px;
        cursor: pointer;
        font-size: 1.6rem;
        border-radius: 4px;
      }
    }
  }
  .back-link {
    margin: 32px;
  }
  .body {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 964px;
    width: 100%;
    margin: 32px auto;
    padding: 0px 32px;
    gap: 32px;
    h2 {
      max-width: 500px;
      margin-bottom: 80px;
    }
    li + li {
      margin-top: 24px;
    }
    figure {
      width: 100%;
      img {
        width: 100%;
        height: auto;
        margin: 0px;
      }
      figcaption {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.textColor600};
        margin: 0px;
        text-align: center;
      }
    }
  }

  @media (max-width: 1115px) {
    h2 {
      font-size: 17vw;
    }
  }

  @media (max-width: 476px) {
    .container-form {
      flex-direction: column;
      img {
        width: 150px;
      }
    }
    form {
      align-items: center;
      text-align: center;
    }
  }
`;

export default Container;
