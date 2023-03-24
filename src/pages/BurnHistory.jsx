import React, { useState } from "react";
import Tables from "../components/Tables";
import Footer from "../components/Footer";
// import '../pages/BurnHistory'
import MobileTable from "../components/MobileTable";
import useTableData from "../utils/useTableData";
import { useMediaQuery } from "usehooks-ts";
import logo from "../logo.png";

const BurnHistory = () => {
  const { tableData } = useTableData();
  const matches = useMediaQuery("(max-width: 1000px)");

  // from mobiletable component ----------
  const [pageSize, setPageSize] = useState(80);

  const handlePageSizeChange = (e) => {
    setPageSize(parseInt(e.target.value, 10));
  };

  return (
    <div>

      

      <div className="p-4">
      <div className="logo-case">
        <img className="logo" src={logo} alt="logo" />
      </div>
        <div>
          {matches ? (
            <>
              <h1 className="text-center">Latest History</h1>
              <MobileTable
                data={tableData?.slice(0, pageSize)}
                pageSize={pageSize}
                handlePageSizeChange={handlePageSizeChange}
              />
            </>
          ) : (
            <div className="desktop-table">
              <Tables
                tableTitle={"Burn Transactions"}
                tableClass={"data-table-history"}
                pagination={true}
              />
              <div></div>
            </div>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default BurnHistory;
