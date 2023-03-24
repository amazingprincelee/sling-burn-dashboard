import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const MobileTable = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  const currentData = data.slice(startIndex, endIndex);

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
            {currentData.map((d) => (
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
        <ReactPaginate
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          activeClassName={"active"}
          pageLinkClassName={"page-link orange-button"}
          previousLinkClassName={"page-link orange-button"}
          nextLinkClassName={"page-link orange-button"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link orange-button"}
          previousLabel={"«"}
          nextLabel={"»"}
        />
      </div>
    </>
  );
};

export default MobileTable;
