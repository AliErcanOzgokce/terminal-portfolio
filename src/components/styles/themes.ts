import { DefaultTheme } from "styled-components";

export type Themes = {
  [key: string]: DefaultTheme;
};

const theme: Themes = {
  cyberpunk: {
    id: "T_001",
    name: "cyberpunk",
    background: "#000000",
    primary: "#00ff41",
    colors: {
      body: "#000000",
      scrollHandle: "#ff00ff",
      scrollHandleHover: "#bf00ff",
      primary: "#00ff41",
      secondary: "#ff00ff",
      text: {
        100: "#00ff41",
        200: "#ff00ff",
        300: "#00ffff",
      },
    },
  },
};

export default theme;
