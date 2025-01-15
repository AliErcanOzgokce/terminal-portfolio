import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Welcome to <HighlightSpan>BID.Terminal</HighlightSpan> - Your Cyberpunk
        Trading Interface
      </p>
      <p>
        BID.Terminal is{" "}
        <HighlightAlt>a cutting-edge command-line interface</HighlightAlt>{" "}
        designed specifically for Creator.BID token traders and enthusiasts.
      </p>
      <p>Key Features:</p>
      <p>
        • Real-time market data tracking
        <br />
        • Top agent performance monitoring
        <br />
        • Cyberpunk-inspired interface
        <br />• Command-line efficiency
      </p>
      <p>
        Built by degens, for degens. Join us in revolutionizing the way we
        interact with Creator.BID's ecosystem.
      </p>
      <p>
        Version: 1.0.0
        <br />
        Created by: BID.Terminal Team
      </p>
    </AboutWrapper>
  );
};

export default About;
