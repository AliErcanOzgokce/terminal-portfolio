import { createContext, useEffect, useState, useRef } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { useTheme } from "./hooks/useTheme";
import GlobalStyle from "./components/styles/GlobalStyle";
import Terminal from "./components/Terminal";
import LoadingScreen from "./components/LoadingScreen";
import { MusicButton } from "./components/styles/Terminal.styled";
import backgroundMusic from "/src/assets/background.mp3";

export const themeContext = createContext<
  ((switchTheme: DefaultTheme) => void) | null
>(null);

function App() {
  // themes
  const { theme, themeLoaded, setMode } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);
  const [isLoading, setIsLoading] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Loading screen
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 8000); // 12 saniye olarak güncelledik (tüm animasyonun tamamlanması için)
  }, []);

  // Disable browser's default behavior
  useEffect(() => {
    window.addEventListener(
      "keydown",
      e => {
        ["ArrowUp", "ArrowDown"].indexOf(e.code) > -1 && e.preventDefault();
      },
      false
    );
  }, []);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  // Update meta tag colors when switching themes
  useEffect(() => {
    const themeColor = theme.colors?.body;

    const metaThemeColor = document.querySelector("meta[name='theme-color']");
    const maskIcon = document.querySelector("link[rel='mask-icon']");
    const metaMsTileColor = document.querySelector(
      "meta[name='msapplication-TileColor']"
    );

    metaThemeColor && metaThemeColor.setAttribute("content", themeColor);
    metaMsTileColor && metaMsTileColor.setAttribute("content", themeColor);
    maskIcon && maskIcon.setAttribute("color", themeColor);
  }, [selectedTheme]);

  const themeSwitcher = (switchTheme: DefaultTheme) => {
    setSelectedTheme(switchTheme);
    setMode(switchTheme);
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  // Müzik kontrolü için useEffect
  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current) {
        audioRef.current.volume = 0.3;
        audioRef.current.play();
      }
    };

    // Sayfa yüklendiğinde müziği başlat
    startAudio();

    // Müziğin durması durumunda tekrar başlat
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        startAudio();
      }
    };

    // Sekme değiştiğinde müziği kontrol et
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Kullanıcı etkileşiminde müziği başlat
    const handleInteraction = () => {
      startAudio();
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };

    document.addEventListener("click", handleInteraction);
    document.addEventListener("keydown", handleInteraction);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("click", handleInteraction);
      document.removeEventListener("keydown", handleInteraction);
    };
  }, []);

  return (
    <>
      <h1 className="sr-only" aria-label="Terminal Portfolio">
        Terminal Portfolio
      </h1>
      <audio ref={audioRef} loop>
        <source src={backgroundMusic} type="audio/mp3" />
      </audio>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyle />
          <MusicButton onClick={toggleMusic} aria-label="Toggle music">
            {isMusicPlaying ? "[M:ON]" : "[M:OFF]"}
          </MusicButton>
          {isLoading ? (
            <LoadingScreen />
          ) : (
            <themeContext.Provider value={themeSwitcher}>
              <Terminal />
            </themeContext.Provider>
          )}
        </ThemeProvider>
      )}
    </>
  );
}

export default App;
