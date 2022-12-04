import styled from "styled-components";

export const ContainerRight = styled.div`
  color: ${({ theme }) => theme.textColor900};
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 150%;
  display: flex;
  align-items: center;
  padding: 4px 0px;
  transition: 300ms;
  svg {
    transition: 300ms;
  }
  &:hover {
    background: ${({ theme }) => theme.textColor300};
    padding: 4px 12px;
    & svg {
      transform: translate(20%, 0);
    }
  }
`;

export const ContainerLeft = styled.div`
  color: ${({ theme }) => theme.textColor900};
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 150%;
  display: flex;
  align-items: center;
  padding: 4px 0px;
  transition: 300ms;
  svg {
    transition: 300ms;
    transform: rotate(180deg);
  }
  &:hover {
    background: ${({ theme }) => theme.textColor300};
    padding: 4px 12px;
    & svg {
      transform: translate(-20%, 0) rotate(180deg);
    }
  }
`;
