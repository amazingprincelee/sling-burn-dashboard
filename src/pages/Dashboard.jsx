import React from "react";
import DisplayBoxes from "../components/DisplayBoxes";
import Tables from "../components/Tables";
import { HashLink as Link } from "react-router-hash-link";
import Footer from "../components/Footer";

// import '../pages/BurnHistory'
import MobileTable from "../components/MobileTable";
import useTableData from "../utils/useTableData";
import { useMediaQuery } from "usehooks-ts";
import logo from "../logo.png";

const Dashboard = () => {
  const { tableData } = useTableData();
  const matches = useMediaQuery("(max-width: 1000px)");

  return (
    <div>
      <div className="display-boxes">
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <DisplayBoxes />
      </div>
      <div>
        <div className="p-4">
          <div>
            {matches ? (
              <>
                <h1 className="text-center">Latest History</h1>
                <MobileTable data={tableData?.slice(0, 4)} showPagination={false} />
                <Link to="../BurnHistory">
                  <button className="view-btn">View All</button>
                </Link>
              </>
            ) : (
              <Tables tableTitle="Latest History">
                
              </Tables>
            )}
          </div>
          <div>
      
      </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
