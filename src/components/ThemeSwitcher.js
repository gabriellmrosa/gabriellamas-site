import { useContext } from "react";
import styled from "styled-components";
import { ColorModeContext } from "./ColorModeProvider";

const ThemeSwitcher = styled.label`
  background: ${({ theme }) => theme.backgroundBase};
`;

export default function ThemeSwitcherComponent() {
  const contexto = useContext(ColorModeContext);
  return (
    <ThemeSwitcher>
      <input type="checkbox" onChange={() => contexto.toggleMode()} />
      <div className="circle"></div>
      <img src="/sun.png" alt="sun icon" />
      <img src="/moon-and-stars.png" alt="Moon and Star icon" />
    </ThemeSwitcher>
  );
}
