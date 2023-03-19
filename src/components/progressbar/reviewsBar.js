import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import RewiewsProvider from "./reviewsProvider";

const RewiewsBar = (props) => {
  const { score } = props;

  // function for calculating the progressbar color
  const calcColor = (percent, start, end) => {
    let a = percent / 100,
      b = (end - start) * a,
      c = b + start;

    return "hsl(" + c + ", 100%, 50%)";
  };

  return (
    <RewiewsProvider valueStart={0} valueEnd={score}>
      {(value) => (
        <CircularProgressbar
          value={value}
          text={`${value} %`}
          circleRatio={0.7}
          styles={{
            trail: {
              strokeLinecap: "butt",
              transform: "rotate(-126deg)",
              transformOrigin: "center center",
            },

            path: {
              strokeLinecap: "butt",
              transform: "rotate(-126deg)",
              transformOrigin: "center center",
              stroke: calcColor(value, 0, 120),
            },

            text: {
              fill: "#808080",
            },
          }}
          strokeWidth={10}
        />
      )}
    </RewiewsProvider>
  );
};

export default RewiewsBar;
