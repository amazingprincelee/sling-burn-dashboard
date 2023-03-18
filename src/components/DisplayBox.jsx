import React from "react";

const DisplayBox = ({heading, value, children}) => {
  return (
    <>
      <div className="display-box">
        <div className="flex">
          <div>
            <p className="display-box-text">{heading}:</p>
            <div className="display-box-value">
              <h1>${value}</h1>
            </div>
          </div>
          <div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayBox;
