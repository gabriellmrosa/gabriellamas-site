import styled from "styled-components";

const ContainerThemeSwitcher = styled.div`
  border: 1px solid red;
  display: flex;
  justify-content: flex-end;
  label {
    background: ${({ theme }) => theme.backgroundBase};
    cursor: pointer;
    input[type="checkbox"] {
      display: none;
    }
    img {
      width: 20px;
      height: 20px;
      z-index: 2;
      pointer-events: none;
      user-select: none; /* Standard syntax */
    }
    .container {
      position: relative;
      background: ${({ theme }) => theme.backgroundBaseThemeSwitcher};
      border-radius: 24px;
      padding: 10px 9px;
      display: flex;
      gap: 16px;
      .moon-icon {
        opacity: 0.5;
      }
    }
    .circle {
      position: absolute;
      z-index: 1;
      top: 50%;
      right: 0px;
      transform: translate(-14%, -50%);
      background: #fff;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      transition: 300ms;
    }
    input[type="checkbox"]:checked + .container .circle {
      transform: translate(-132%, -50%);
    }
    input[type="checkbox"]:checked + .container {
      & .sun-icon {
        opacity: 0.5;
      }
      & .moon-icon {
        opacity: 1;
      }
    }
  }
`;

export default ContainerThemeSwitcher;
