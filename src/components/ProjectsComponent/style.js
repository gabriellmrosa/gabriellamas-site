import styled, { ThemeContext } from "styled-components";

const ContainerProjectsComponent = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 80px;
  .moldure {
    display: flex;
    border: 10px solid ${({ theme }) => theme.textColor900};
    height: 400px;
  }
  .square {
    background: #f11075;
  }
`;

export default ContainerProjectsComponent;
