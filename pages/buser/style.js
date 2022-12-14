import styled from "styled-components";

const Container = styled.div`
  border: 10px solid ${({ theme }) => theme.textColor900};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(0%, 50%);
    }
    to {
      opacity: 1;
      transform: translate(0%, 0);
    }
  }
  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translate(0%, 0%);
    }
    to {
      opacity: 0;
      transform: translate(0%, 50%);
    }
  }
  .container-form {
    position: fixed;
    z-index: 10;
    bottom: 0px;
    left: 0px;
    background: ${({ theme }) => theme.textColor900};
    pointer-events: ${({ access }) => (access === "false" ? "auto" : "none")};
    width: 100%;
    height: auto;
    padding: 40px 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${({ access }) => console.log("styled access", access)}
    animation: ${({ access }) =>
      access === "false" ? "fadeIn 600ms both" : "fadeOut 600ms both"};
    .loading-svg {
      position: absolute;
      z-index: 20;
      width: 100%;
      height: 100%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 100px;
      }
    }
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

        input:focus ~ svg,
        input:not(:placeholder-shown) ~ svg {
          opacity: 1;
        }
        input:focus + span,
        input:not(:placeholder-shown) + span {
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
      input {
        min-height: 40px;
      }
    }
  }
`;

export default Container;
