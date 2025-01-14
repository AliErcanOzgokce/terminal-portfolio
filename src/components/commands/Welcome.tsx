import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreImgMobile,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
  PurpleSpan,
  Spacer,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {` 
 __     __     __      __                           __                __ 
|  |--.|__|.--|  |    |  |_ .-----..----..--------.|__|.-----..---.-.|  |
|  _  ||  ||  _  | __ |   _||  -__||   _||        ||  ||     ||  _  ||  |
|_____||__||_____||__||____||_____||__|  |__|__|__||__||__|__||___._||__|
                                                                     
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`  
 __     __     __      __   
|  |--.|__|.--|  |    |  |_ 
|  _  ||  ||  _  | __ |   _|
|_____||__||_____||__||____|
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>
          Welcome to BID.Terminal - The Cyberpunk Trading Interface
          <Seperator>----</Seperator>
          Creator.BID Token's Official Terminal Interface. Built for degens, by
          degens.
          <Seperator>----</Seperator>
          Join the revolution:{" "}
          <Link
            href="https://twitter.com/bidterminal"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>{" "}
          |{" "}
          <Link
            href="https://creator.bid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creator.BID
          </Link>
          <Seperator>----</Seperator>
          "Let me tell you why you're here... <Spacer /> You're here because you
          know something. <Spacer />
          What you know you can't explain, but you feel it."
          <Seperator>----</Seperator>
          Type `<Cmd>help</Cmd>` to start hacking with{" "}
          <Link
            href="https://creator.bid/agents/67449f1e853e3027a53168a2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agent Algo
          </Link>
          .
          <Spacer />
        </div>
      </div>
      <div className="illu-section">
        <PreImg>
          {`
                        ,##,,ee
                      ,#########
                   a###############@
                 ^v7####^\`^"7W7^"@####
               &2w@#@b\`         ^@#@^#4?
                   ##^`}
          <PurpleSpan>,,,, ,,,,</PurpleSpan>
          {`^#^
                  `}
          <PurpleSpan>,,@######"#######=</PurpleSpan>
          {`
                   `}
          .<PurpleSpan>''555"\` '5555</PurpleSpan>b|
          {`
                   T"@  ,,,^,mg,@,*
                      %p||\`~~'.#\`
                       ^Wp  ,#T
                      :b''@@b^}
                   ,^     \` 'b 3-
               .<\` 'p   ^v   #   b   *.
             {      }   #"GpGb   [
             C      3 * @#######Nl      \`
            '            ^@##b     ($    !`}
        </PreImg>
        <PreImgMobile>
          {`
                                  ,##,,ee
                                ,#########
                            a###############@
                          ^v7####^\`^"7W7^"@####
                        &2w@#@b\`         ^@#@^#4?
                            ##^`}
          <PurpleSpan>,,,, ,,,,</PurpleSpan>
          {`^#^
                            `}
          <PurpleSpan>,,@######"#######=</PurpleSpan>
          {`
                            `}
          .<PurpleSpan>''555"\` '5555</PurpleSpan>b|
          {`
                            T"@  ,,,^,mg,@,*
                                %p||\`~~'.#\`
                                ^Wp  ,#T
                                :b''@@b^}
                            ,^     \` 'b 3-
                        .<\` 'p   ^v   #   b   *.
                      {      }   #"GpGb   [
                      C      3 * @#######Nl      \`
                      '            ^@##b     ($    !`}
        </PreImgMobile>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
