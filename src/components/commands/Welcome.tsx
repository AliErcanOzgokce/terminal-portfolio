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

▀█████████▄   ▄█  ████████▄           ███        ▄████████ ███▄▄▄▄      ▄████████  ▄██████▄     ▄████████
  ███    ███ ███  ███   ▀███      ▀█████████▄   ███    ███ ███▀▀▀██▄   ███    ███ ███    ███   ███    ███
  ███    ███ ███▌ ███    ███         ▀███▀▀██   ███    █▀  ███   ███   ███    █▀  ███    ███   ███    ███
 ▄███▄▄▄██▀  ███▌ ███    ███          ███   ▀  ▄███▄▄▄     ███   ███   ███        ███    ███  ▄███▄▄▄▄██▀
▀▀███▀▀▀██▄  ███▌ ███    ███          ███     ▀▀███▀▀▀     ███   ███ ▀███████████ ███    ███ ▀▀███▀▀▀▀▀  
  ███    ██▄ ███  ███    ███          ███       ███    █▄  ███   ███          ███ ███    ███ ▀███████████
  ███    ███ ███  ███   ▄███          ███       ███    ███ ███   ███    ▄█    ███ ███    ███   ███    ███
▄█████████▀  █▀   ████████▀          ▄████▀     ██████████  ▀█   █▀   ▄████████▀   ▀██████▀    ███    ███
                                                                                               ███    ███
              

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
          Welcome to BID.Tensor - The Cyberpunk Trading Interface
          <Seperator>----</Seperator>
          Creator.BID Token's Official Terminal Interface. Built for degens, by
          degens.
          <Seperator>----</Seperator>
          Join the revolution:{" "}
          <Link
            href="https://x.com/BidTensor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </Link>{" "}
          |{" "}
          <Link
            href="https://creator.bid/agents/67857c870e2b1c22e3e4890c"
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
          Type `<Cmd>help</Cmd>` to see available commands or try `
          <Cmd>top</Cmd>` to view top agents with{" "}
          <Link
            href="https://creator.bid/agents/675b3a0eba87b87ac56ba1d3"
            target="_blank"
            rel="noopener noreferrer"
          >
            AION 5100
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
