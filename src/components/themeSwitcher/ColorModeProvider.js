import { createContext, useState } from "react";

export const ColorModeContext = createContext({
  mode: "",
  toggleMode: () => {
    alert("Você precisa me configurar primeiro!");
  },
});

export default function ColorModeProvider({ initialMode, children }) {
  const [mode, setMode] = useState(initialMode);

  function toggleMode() {
    if (mode === "dark") setMode("light");
    if (mode === "light") setMode("dark");
  }

  return (
    <ColorModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ColorModeContext.Provider>
  );
}
