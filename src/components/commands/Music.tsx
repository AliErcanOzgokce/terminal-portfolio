import { useContext } from "react";
import { termContext } from "../Terminal";

const Music: React.FC = () => {
  const { arg } = useContext(termContext);
  const audioElement = document.querySelector("audio");

  if (!arg[0] || !["on", "off"].includes(arg[0])) {
    return <div>Usage: music [on|off]</div>;
  }

  if (audioElement) {
    if (arg[0] === "on") {
      audioElement.play();
      return <div>Music turned on</div>;
    } else {
      audioElement.pause();
      return <div>Music turned off</div>;
    }
  }

  return <div>Audio player not found</div>;
};

export default Music;
