import React from "react";

const DisplayBox = ({heading, value, children}) => {
  return (
    <>
      <div className="display-box">
        <p className="display-box-text">{heading}:</p>
        <div className="display-box-value">
          <h1>${value}</h1>
        </div>
        {children}
      </div>
    </>
  );
};

export default DisplayBox;
