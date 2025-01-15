import { useContext } from "react";
import { termContext } from "../Terminal";
import styled from "styled-components";

const TableContainer = styled.div`
  font-family: monospace;
  overflow-x: auto;
  width: 100%;

  @media (max-width: 768px) {
    overflow-x: hidden;
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Row = styled.div`
  display: flex;
  padding: 3px 0;
  border-bottom: 1px solid #222;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 10px 0;
  }
`;

const HeaderRow = styled(Row)`
  border-bottom: 1px solid #444;
  padding: 4px 0;
  color: #00ff00;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Cell = styled.span<{
  width?: string;
  align?: string;
  color?: string;
  mobileLabel?: string;
}>`
  display: inline-block;
  width: ${props => props.width || "auto"};
  text-align: ${props => props.align || "left"};
  color: ${props => props.color || "inherit"};

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    padding: 2px 0;

    &:before {
      content: "${props => props.mobileLabel || ""}";
      color: #666;
    }
  }
`;

const Top: React.FC = () => {
  const { topData } = useContext(termContext);

  if (!topData || topData.length === 0) {
    return <p>Error: No data available</p>;
  }

  return (
    <TableContainer>
      {/* Header */}
      <div style={{ marginBottom: "8px", color: "#888" }}>
        Top {topData.length} Agent Keys by Market Cap (USD)
      </div>

      {/* Table Header */}
      <HeaderRow>
        <Cell width="45px" align="right">
          #
        </Cell>
        <Cell width="200px" style={{ paddingLeft: "15px" }}>
          Name
        </Cell>
        <Cell width="150px" align="right">
          Price (ETH)
        </Cell>
        <Cell width="150px" align="right">
          Price (USD)
        </Cell>
        <Cell width="200px" align="right">
          Market Cap (USD)
        </Cell>
      </HeaderRow>

      {/* Table Body */}
      {topData.map((coin, index) => (
        <Row
          key={coin.id}
          style={{ backgroundColor: index % 2 === 0 ? "#111" : "transparent" }}
        >
          <Cell width="45px" align="right" color="#666" mobileLabel="Rank: ">
            {index + 1}
          </Cell>
          <Cell
            width="200px"
            style={{ paddingLeft: "15px" }}
            color={index < 3 ? "#00ff00" : "inherit"}
            mobileLabel="Name: "
          >
            {coin.name}
          </Cell>
          <Cell width="150px" align="right" mobileLabel="ETH Price: ">
            Ξ
            {Number(coin.price).toLocaleString(undefined, {
              minimumFractionDigits: 6,
              maximumFractionDigits: 6,
            })}
          </Cell>
          <Cell width="150px" align="right" mobileLabel="USD Price: ">
            $
            {Number(coin.priceUSD).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Cell>
          <Cell width="200px" align="right" mobileLabel="Market Cap: ">
            $
            {Number(coin.marketCapUSD).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Cell>
        </Row>
      ))}

      {/* Footer */}
      <div
        style={{
          marginTop: "8px",
          fontSize: "0.9em",
          color: "#666",
          borderTop: "1px solid #444",
          paddingTop: "8px",
        }}
      >
        Updated at: {new Date().toLocaleTimeString()}
      </div>
    </TableContainer>
  );
};

export default Top;
