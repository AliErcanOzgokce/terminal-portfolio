import {
  Cmd,
  // CmdDesc,
  // CmdList,
  // HelpWrapper,
  // KeyContainer,
  Title,
  Row,
  TabSpace,
  Description,
  Seperator,
  Key,
} from "../styles/Help.styled";
import { commands } from "../Terminal";

const Help: React.FC = () => {
  return (
    <div>
      <div>
        <Title>BID.Terminal Commands:</Title>
        {commands
          .filter(cmd => cmd.category === "bid")
          .map(({ cmd, desc, tab }) => (
            <Row key={cmd}>
              <Cmd>{cmd}</Cmd>
              <TabSpace tab={tab} />
              <Description>{desc}</Description>
            </Row>
          ))}
      </div>

      <Seperator>----</Seperator>

      <div>
        <Title>System Commands:</Title>
        {commands
          .filter(cmd => cmd.category === "system")
          .map(({ cmd, desc, tab }) => (
            <Row key={cmd}>
              <Cmd>{cmd}</Cmd>
              <TabSpace tab={tab} />
              <Description>{desc}</Description>
            </Row>
          ))}
      </div>

      <Seperator>----</Seperator>

      <div>
        <Row>
          <Key>Tab or Ctrl + i</Key>
          <TabSpace tab={3} />
          <Description>autocompletes the command</Description>
        </Row>
        <Row>
          <Key>Up Arrow</Key>
          <TabSpace tab={6} />
          <Description>go back to previous command</Description>
        </Row>
        <Row>
          <Key>Ctrl + l</Key>
          <TabSpace tab={7} />
          <Description>clear the terminal</Description>
        </Row>
      </div>
    </div>
  );
};

export default Help;
