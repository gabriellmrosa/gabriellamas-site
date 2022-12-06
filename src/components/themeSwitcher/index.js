import { useContext } from "react";
import { ColorModeContext } from "./ColorModeProvider";
import Image from "next/image";
import ContainerThemeSwitcher from "./style";
import moonAndStars from "../../assets/icons/moon-and-stars.png";
import sun from "../../assets/icons/sun.png";

function ThemeSwitcherComponent() {
  const context = useContext(ColorModeContext);
  return (
    <ContainerThemeSwitcher>
      <label className="theme-switcher">
        <input type="checkbox" onChange={context.toggleMode} />
        <div className="container">
          <div className="circle"></div>
          <Image
            className="moon-icon"
            src={moonAndStars}
            alt="Moon and Star icon"
          />
          <Image className="sun-icon" src={sun} alt="sun icon" />
        </div>
      </label>
    </ContainerThemeSwitcher>
  );
}

export default ThemeSwitcherComponent;
