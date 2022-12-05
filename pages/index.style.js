import styled from "styled-components";

const ContainerResponsive = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  padding: 0px 24px;
  margin: 0px auto;
  flex: 1;

  @media (max-width: 1115px) {
    flex-direction: column;
    gap: 80px;
    .floating-message {
      position: relative;
    }
  }
`;

export default ContainerResponsive;
