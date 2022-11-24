import { useContext } from "react";
import ThemeSwitcher from "./style";
import { ColorModeContext } from "./ColorModeProvider";

export default function ThemeSwitcherComponent() {
  const contexto = useContext(ColorModeContext);
  return (
    <ThemeSwitcher>
      <input type="checkbox" onChange={() => contexto.toggleMode()} />
      <div className="container">
        <div className="circle"></div>
        <img
          className="moon-icon"
          src="/moon-and-stars.png"
          alt="Moon and Star icon"
        />
        <img className="sun-icon" src="/sun.png" alt="sun icon" />
      </div>
    </ThemeSwitcher>
  );
}
