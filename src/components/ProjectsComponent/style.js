import styled from "styled-components";

const Container = styled.div`
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

export default Container;
