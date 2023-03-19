import React from "react";

const MobileTable = ({ data }) => {
  return (
    <>
      <div>
        <table className="table align-middle">
          <thead>
            <tr className="table-warning">
              <th scope="col">Time</th>
              <th scope="col">Details</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((d) => (
              <tr className="table-row" key={d}>
                <td className="fw-semibold">{d.timeStamp}</td>
                <td>
                  <div className="p-2">
                    <span className="fw-semibold">Hash: </span>
                    <span className="fw-light fs-light">{d.hash}</span>
                  </div>
                  <div className="p-2">
                    <span className="fw-semibold">To: </span>
                    <span className="fw-light fs-light">{d.to}</span>
                  </div>
                  <div className="p-2">
                    <span className="fw-semibold">$Sling: </span>
                    <span className="fw-light fs-light">{d.sling}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default MobileTable;
