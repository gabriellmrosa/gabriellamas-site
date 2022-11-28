import { useContext, useRef } from "react";
import ContainerThemeSwitcher from "./style";
import { ColorModeContext } from "./ColorModeProvider";

function ThemeSwitcherComponent() {
  const contexto = useContext(ColorModeContext);
  return (
    <ContainerThemeSwitcher>
      <label className="theme-switcher">
        <input type="checkbox" onChange={contexto.toggleMode} />
        <div className="container">
          <div className="circle"></div>
          <img
            className="moon-icon"
            src="/moon-and-stars.png"
            alt="Moon and Star icon"
          />
          <img className="sun-icon" src="/sun.png" alt="sun icon" />
        </div>
      </label>
    </ContainerThemeSwitcher>
  );
}

export default ThemeSwitcherComponent;
