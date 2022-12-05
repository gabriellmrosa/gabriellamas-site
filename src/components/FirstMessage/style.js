import styled from "styled-components";

const Container = styled.div`
  position: relative;
  flex: 1;
  .floating-message {
    position: fixed;
    top: 50%;
    transform: translate(0%, -50%);
  }
  .title {
    font-size: 9.42rem;
    line-height: 100%;
    max-width: 560px;
    margin-bottom: 24px;
  }
  .author {
    font-weight: 400;
    margin-bottom: 8px;
  }
  .description {
    max-width: 560px;
    font-weight: 400;
    color: ${({ theme }) => theme.textColor700};
  }
  .social-links {
    margin-top: 24px;
    display: flex;
    gap: 16px;
    align-items: center;
  }
  a {
    position: relative;
  }
  .icon .tooltip {
    transition: 300ms;
    transform: translate(-50%, 25%);
  }
  .icon:hover .tooltip {
    opacity: 1;
    transform: translate(-50%, 0%);
  }

  @media (max-width: 1115px) {
    .floating-message {
      position: relative;
    }
    .title {
      font-size: 16vw;
    }
  }
`;

export default Container;
