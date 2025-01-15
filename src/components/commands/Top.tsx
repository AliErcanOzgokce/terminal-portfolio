import { useContext } from "react";
import { termContext } from "../Terminal";

const Top: React.FC = () => {
  const { topData } = useContext(termContext);

  if (!topData || topData.length === 0) return <p>No data available</p>;

  return (
    <div style={{ fontFamily: "monospace" }}>
      {/* Header */}
      <div style={{ marginBottom: "8px", color: "#888" }}>
        Top {topData.length} Agent Keys by Market Cap
      </div>

      {/* Table Header */}
      <div
        style={{
          marginBottom: "8px",
          borderBottom: "1px solid #444",
          padding: "4px 0",
          color: "#00ff00",
        }}
      >
        <span
          style={{ display: "inline-block", width: "45px", textAlign: "right" }}
        >
          #
        </span>
        <span
          style={{
            display: "inline-block",
            width: "200px",
            paddingLeft: "15px",
          }}
        >
          Name
        </span>
        <span
          style={{
            display: "inline-block",
            width: "150px",
            textAlign: "right",
          }}
        >
          Price
        </span>
        <span
          style={{
            display: "inline-block",
            width: "200px",
            textAlign: "right",
          }}
        >
          Market Cap
        </span>
      </div>

      {/* Table Body */}
      {topData.map((coin, index) => (
        <div
          key={coin.id}
          style={{
            padding: "3px 0",
            borderBottom: "1px solid #222",
            backgroundColor: index % 2 === 0 ? "#111" : "transparent",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "45px",
              textAlign: "right",
              color: "#666",
            }}
          >
            {index + 1}
          </span>
          <span
            style={{
              display: "inline-block",
              width: "200px",
              paddingLeft: "15px",
              color: index < 3 ? "#00ff00" : "inherit",
            }}
          >
            {coin.name}
          </span>
          <span
            style={{
              display: "inline-block",
              width: "150px",
              textAlign: "right",
            }}
          >
            $
            {Number(coin.price).toLocaleString(undefined, {
              minimumFractionDigits: 6,
              maximumFractionDigits: 6,
            })}
          </span>
          <span
            style={{
              display: "inline-block",
              width: "200px",
              textAlign: "right",
            }}
          >
            $
            {Number(coin.marketCap).toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </span>
        </div>
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
    </div>
  );
};

export default Top;
