import About from "./commands/About";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Education from "./commands/Education";
import Email from "./commands/Email";
import GeneralOutput from "./commands/GeneralOutput";
import Gui from "./commands/Gui";
import Help from "./commands/Help";
import Welcome from "./commands/Welcome";
import Projects from "./commands/Projects";
import Socials from "./commands/Socials";
import Themes from "./commands/Themes";
import Music from "./commands/Music";
import Top from "./commands/Top";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";
import { useContext } from "react";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specialCmds = [
    "projects",
    "socials",
    "themes",
    "echo",
    "music",
    "top",
    "trade",
    "analM",
    "analC",
    "buy",
    "sell",
  ];

  // return 'Usage: <cmd>' if command arg is not valid
  // eg: about tt
  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv data-testid="usage-output">Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer data-testid={index === 0 ? "latest-output" : null}>
      {
        {
          about: <About />,
          clear: <Clear />,
          echo: <Echo />,
          education: <Education />,
          email: <Email />,
          gui: <Gui />,
          help: <Help />,
          history: <GeneralOutput>live in the moment</GeneralOutput>,
          projects: <Projects />,
          pwd: <GeneralOutput>/home/fuck-off</GeneralOutput>,
          socials: <Socials />,
          themes: <Themes />,
          music: <Music />,
          welcome: <Welcome />,
          whoami: <GeneralOutput>anonymous</GeneralOutput>,
          top: <Top />,
          trade: <GeneralOutput>Coming soon...</GeneralOutput>,
          analM: <GeneralOutput>Coming soon...</GeneralOutput>,
          analC: <GeneralOutput>Coming soon...</GeneralOutput>,
          buy: <GeneralOutput>Coming soon...</GeneralOutput>,
          sell: <GeneralOutput>Coming soon...</GeneralOutput>,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
