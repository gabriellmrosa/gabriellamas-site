import { createContext, useState } from "react";

export const ColorModeContext = createContext({
  mode: "",
  toggleMode: () => {
    alert("Você precisa me configurar primeiro!");
  },
});

export default function ColorModeProvider(props) {
  const [mode, setMode] = useState(props.initialMode);

  function toggleMode() {
    if (mode === "dark") setMode("light");
    if (mode === "light") setMode("dark");
  }

  return (
    <ColorModeContext.Provider value={{ mode, toggleMode }}>
      {props.children}
    </ColorModeContext.Provider>
  );
}
