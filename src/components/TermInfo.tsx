import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";
import { TerminalPrompt } from "./styles/Terminal.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <TerminalPrompt>
        <User>agent</User>@<WebsiteName>bid.tensor</WebsiteName>:~$
      </TerminalPrompt>
    </Wrapper>
  );
};

export default TermInfo;
