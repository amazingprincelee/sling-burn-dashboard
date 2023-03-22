import React, { useState } from "react";

const MobileTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
            {currentData?.map((d) => (
              <tr className="table-row" key={d}>
                <td className="fw-semibold">{d.timeStamp}</td>
                <td>
                  <div className="p-2">
                    <span className="fw-semibold">Hash: </span>
                    <span className="fw-light fs-light">{d.hash}</span>
                  </div>
                  <div className="p-2">
                    <span className="fw-semibold">To: </span>
                    <span className="fw-light fs-light">{"Dead Wallet"}</span>
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
        <nav aria-label="Page navigation">
          <ul className="pagination justify-content-center">
            {[...Array(totalPages)].map((_, index) => (
              <li
                key={index}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link orange-button"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default MobileTable;
