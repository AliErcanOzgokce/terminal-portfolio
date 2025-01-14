import { useContext } from "react";
import { termContext } from "../Terminal";
import { Row, Description, Cmd, TabSpace } from "../styles/Help.styled";

const Socials: React.FC = () => {
  const { rerender } = useContext(termContext);

  return (
    <div data-testid="socials">
      {rerender && (
        <>
          <Row>
            <Cmd>github</Cmd>
            <TabSpace tab={7} />
            <Description>https://github.com/bidterminal</Description>
          </Row>
          <Row>
            <Cmd>twitter</Cmd>
            <TabSpace tab={7} />
            <Description>https://twitter.com/bidterminal</Description>
          </Row>
        </>
      )}
    </div>
  );
};

export default Socials;
