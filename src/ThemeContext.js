import { createContext, useContext, useState } from "react";

const ThemeContext = createContecxt();

const ThemeContextProvider = ({ children }) => {
  const [myTheme, setMyTheme] = useState("light");

  return (
    <ThemeContextProvider value={{ myTheme, setMyTheme }}>
      {" "}
      {children}{" "}
    </ThemeContextProvider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export default ThemeContextProvider;
