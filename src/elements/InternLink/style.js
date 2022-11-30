import styled from "styled-components";

const Container = styled.div`
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

export default Container;
