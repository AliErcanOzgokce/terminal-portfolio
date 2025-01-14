import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";
import { TerminalPrompt } from "./styles/Terminal.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <TerminalPrompt>
        <User>agent</User>@<WebsiteName>bid.terminal</WebsiteName>:~$
      </TerminalPrompt>
    </Wrapper>
  );
};

export default TermInfo;
