import styled from "styled-components";

const Tooltip = styled.div`
  position: absolute;
  z-index: 2;
  font-size: 1.2rem;
  top: -40px;
  left: 50%;
  padding: 8px 8px;
  background: ${({ theme }) => theme.textColor900};
  color: ${({ theme }) => theme.textColor300};
  border-radius: 4px;

  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    height: 10px;
    width: 10px;
    bottom: 1px;
    left: 50%;
    transform: translate(-50%, 50%) rotate(45deg);
    background: ${({ theme }) => theme.textColor900};
    border-radius: 2px;
  }
`;

export default Tooltip;
