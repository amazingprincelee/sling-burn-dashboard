import React, { useState } from 'react';
import LineChart from '../components/LineChart';
import { SlingData } from "../Data";
import Tables from '../components/Tables';
import { HashLink as Link } from "react-router-hash-link";

// import '../pages/BurnHistory'
import MobileTable from "../components/MobileTable";
import useTableData from "../utils/useTableData";
import { useMediaQuery } from "usehooks-ts";



const BurnHistory = () => {
    const [slingData, setSlingData] = useState({
        labels: SlingData.map((data) => data.percentage),

        datasets: [
            {
                label: "Burn Gained",
                data: SlingData.map((data) => data.burntAmount),
                backgroundColor: ["red"]
            }
        ]
    })


    const { tableData } = useTableData();
  const matches = useMediaQuery("(max-width: 1000px)");

    return (
        <div>
        <div className="p-4">
          <div>
            {matches ? (
              <>
                <h1 className="text-center">Latest History</h1>
                <MobileTable data={tableData?.slice(0, 4)} />
                <Link to="../BurnHistory">
                  <button className="btn btn-warning">View All</button>
                </Link>
              </>
            ) : (
              <Tables tableTitle="Latest History" pagination={true} />
                
              
            )}
          </div>
        </div>
        
      </div>
    );
};

export default BurnHistory;