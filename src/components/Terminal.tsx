import React, {
  createContext,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import _ from "lodash";
import Output from "./Output";
import TermInfo from "./TermInfo";
import {
  CmdNotFound,
  Empty,
  Form,
  Hints,
  Input,
  MobileBr,
  MobileSpan,
  Wrapper,
} from "./styles/Terminal.styled";
import { argTab } from "../utils/funcs";

type Command = {
  cmd: string;
  desc: string;
  tab: number;
  category: string;
}[];

export const commands: Command = [
  // System Commands
  { cmd: "clear", desc: "clear the terminal", tab: 8, category: "system" },
  { cmd: "echo", desc: "print out anything", tab: 9, category: "system" },
  { cmd: "help", desc: "check available commands", tab: 9, category: "system" },
  { cmd: "history", desc: "view command history", tab: 6, category: "system" },
  { cmd: "pwd", desc: "print working directory", tab: 10, category: "system" },
  { cmd: "welcome", desc: "display hero section", tab: 6, category: "system" },
  { cmd: "whoami", desc: "about current user", tab: 7, category: "system" },
  { cmd: "music", desc: "control music (on/off)", tab: 8, category: "system" },
  { cmd: "top", desc: "get top coins info", tab: 10, category: "bid" },

  // BID.Terminal Commands
  { cmd: "about", desc: "about Creator Bid", tab: 8, category: "bid" },
];

interface AgentKey {
  id: string;
  name: string;
  creator: string;
  totalSupply: string;
  price: string;
  marketCap: string;
  createdAtBlockTimestamp: string;
  priceUSD: string;
  marketCapUSD: string;
}

type Term = {
  arg: string[];
  history: string[];
  rerender: boolean;
  index: number;
  clearHistory?: () => void;
  topData?: AgentKey[];
};

export const termContext = createContext<Term>({
  arg: [],
  history: [],
  rerender: false,
  index: 0,
  topData: [],
});

const Terminal = () => {
  const containerRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [inputVal, setInputVal] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>(["welcome"]);
  const [rerender, setRerender] = useState(false);
  const [hints, setHints] = useState<string[]>([]);
  const [pointer, setPointer] = useState(-1);
  const [topData, setTopData] = useState<AgentKey[]>([]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setRerender(false);
      setInputVal(e.target.value);
    },
    [inputVal]
  );

  const fetchTopData = async (limit: number) => {
    try {
      const API_KEY = "9421affaf21b1ad617a0bdee0e3ad815";
      const SUBGRAPH_ID = "8f1XAvLcseuxGvme1EYCSCoRnpfDPa6D5jHB914gEM3L";
      const API_URL = `https://gateway.thegraph.com/api/${API_KEY}/subgraphs/id/${SUBGRAPH_ID}`;

      // İlk sorgu: Agent Keys
      const agentKeysQuery = `{
        agentKeys(first: ${limit}, orderBy: marketCap, orderDirection: desc) {
          id
          name
          creator
          totalSupply
          price
          marketCap
          createdAtBlockTimestamp
        }
      }`;

      // İkinci sorgu: ETH Price (farklı subgraph'ten)
      const ethPriceResponse = await fetch(
        `https://gateway.thegraph.com/api/${API_KEY}/subgraphs/id/HUZDsRpEVP2AvzDCyzDHtdc64dyDxx8FQjzsmqSg4H3B`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `{
            bundles(first: 1) {
              id
              ethPriceUSD
            }
          }`,
            operationName: "Subgraphs",
            variables: {},
          }),
        }
      );

      // Agent Keys verilerini çek
      const agentKeysResponse = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: agentKeysQuery,
          operationName: "Subgraphs",
          variables: {},
        }),
      });

      const agentKeysData = await agentKeysResponse.json();
      const ethPriceData = await ethPriceResponse.json();

      console.log("Agent Keys Data:", agentKeysData); // Debug için
      console.log("ETH Price Data:", ethPriceData); // Debug için

      if (agentKeysData.errors) {
        throw new Error(agentKeysData.errors[0].message);
      }
      if (ethPriceData.errors) {
        throw new Error(ethPriceData.errors[0].message);
      }

      const ethPrice = Number(ethPriceData.data.bundles[0].ethPriceUSD);

      // USD değerlerini hesaplıyoruz
      const agentKeysWithUSD = agentKeysData.data.agentKeys.map(
        (key: AgentKey) => ({
          ...key,
          priceUSD: (Number(key.price) * ethPrice).toString(),
          marketCapUSD: (Number(key.marketCap) * ethPrice).toString(),
        })
      );

      console.log("Processed Data:", agentKeysWithUSD); // Debug için
      setTopData(agentKeysWithUSD);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const commandArray = inputVal.trim().split(" ");
    if (commandArray[0] === "top") {
      const limit = commandArray[1] ? parseInt(commandArray[1]) : 10;
      await fetchTopData(limit);
    }
    setCmdHistory([...cmdHistory, inputVal]);
    setInputVal("");
    setRerender(true);
    setHints([]);
    setPointer(-1);
  };

  const clearHistory = () => {
    setCmdHistory([]);
    setHints([]);
  };

  // focus on input when terminal is clicked
  const handleDivClick = () => {
    inputRef.current && inputRef.current.focus();
  };
  useEffect(() => {
    document.addEventListener("click", handleDivClick);
    return () => {
      document.removeEventListener("click", handleDivClick);
    };
  }, [containerRef]);

  // Keyboard Press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setRerender(false);
    const ctrlI = e.ctrlKey && e.key.toLowerCase() === "i";
    const ctrlL = e.ctrlKey && e.key.toLowerCase() === "l";

    // if Tab or Ctrl + I
    if (e.key === "Tab" || ctrlI) {
      e.preventDefault();
      if (!inputVal) return;

      let hintsCmds: string[] = [];
      commands.forEach(({ cmd }) => {
        if (_.startsWith(cmd, inputVal)) {
          hintsCmds = [...hintsCmds, cmd];
        }
      });

      const returnedHints = argTab(inputVal, setInputVal, setHints, hintsCmds);
      hintsCmds = returnedHints ? [...hintsCmds, ...returnedHints] : hintsCmds;

      // if there are many command to autocomplete
      if (hintsCmds.length > 1) {
        setHints(hintsCmds);
      }
      // if only one command to autocomplete
      else if (hintsCmds.length === 1) {
        const currentCmd = _.split(inputVal, " ");
        setInputVal(
          currentCmd.length !== 1
            ? `${currentCmd[0]} ${currentCmd[1]} ${hintsCmds[0]}`
            : hintsCmds[0]
        );

        setHints([]);
      }
    }

    // if Ctrl + L
    if (ctrlL) {
      clearHistory();
    }

    // Go previous cmd
    if (e.key === "ArrowUp") {
      if (pointer >= cmdHistory.length) return;

      if (pointer + 1 === cmdHistory.length) return;

      setInputVal(cmdHistory[pointer + 1]);
      setPointer(prevState => prevState + 1);
      inputRef?.current?.blur();
    }

    // Go next cmd
    if (e.key === "ArrowDown") {
      if (pointer < 0) return;

      if (pointer === 0) {
        setInputVal("");
        setPointer(-1);
        return;
      }

      setInputVal(cmdHistory[pointer - 1]);
      setPointer(prevState => prevState - 1);
      inputRef?.current?.blur();
    }
  };

  // For caret position at the end
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef?.current?.focus();
    }, 1);
    return () => clearTimeout(timer);
  }, [inputRef, inputVal, pointer]);

  return (
    <Wrapper data-testid="terminal-wrapper" ref={containerRef}>
      {hints.length > 1 && (
        <div>
          {hints.map(hCmd => (
            <Hints key={hCmd}>{hCmd}</Hints>
          ))}
        </div>
      )}

      {cmdHistory.map((cmdH, index) => {
        const commandArray = _.split(_.trim(cmdH), " ");
        const validCommand = _.find(commands, { cmd: commandArray[0] });
        const contextValue = {
          arg: _.drop(commandArray),
          history: cmdHistory,
          rerender,
          index,
          clearHistory,
          topData,
        };
        return (
          <div key={_.uniqueId(`${cmdH}_`)}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <TermInfo />
              <MobileBr />
              <MobileSpan>&#62;</MobileSpan>
              <span style={{ marginLeft: "8px" }} data-testid="input-command">
                {cmdH}
              </span>
            </div>
            {validCommand ? (
              <termContext.Provider value={contextValue}>
                <Output index={index} cmd={commandArray[0]} />
              </termContext.Provider>
            ) : cmdH === "" ? (
              <Empty />
            ) : (
              <CmdNotFound data-testid={`not-found-${index}`}>
                command not found: {cmdH}
              </CmdNotFound>
            )}
          </div>
        );
      })}

      <Form onSubmit={handleSubmit}>
        <label htmlFor="terminal-input">
          <TermInfo /> <MobileBr />
          <MobileSpan>&#62;</MobileSpan>
        </label>
        <Input
          title="terminal-input"
          type="text"
          id="terminal-input"
          autoComplete="off"
          spellCheck="false"
          autoFocus
          autoCapitalize="off"
          ref={inputRef}
          value={inputVal}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
        />
      </Form>
    </Wrapper>
  );
};

export default Terminal;
