import styled from "styled-components";

const Container = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-top: ${({ topDistance }) => topDistance - 100 + "px"};
  padding-bottom: 250px;
`;

export default Container;
