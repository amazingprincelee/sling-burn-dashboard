import React, {useState} from "react";
import Tables from "../components/Tables";
import Footer from "../components/Footer";
// import '../pages/BurnHistory'
import MobileTable from "../components/MobileTable";
import useTableData from "../utils/useTableData";
import { useMediaQuery } from "usehooks-ts";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

const BurnHistory = () => {
  const data = {
    labels: ["Jan", "Feb", "March", "April"],
    datasets: [
      {
        label: "Total Burn",
        data: [10, 20, 30.6, 36.3],
        backgroundColor: "red",
        borderColor: "red",
        pointBorderColor: "aqua",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },

    scales: {
      y: {
        // min: 3,
        // max: 6
      },
    },
  };

  const { tableData } = useTableData();
  const matches = useMediaQuery("(max-width: 1000px)");


  // from mobiletable component ----------
  const [pageSize, setPageSize] = useState(50);

const handlePageSizeChange = (e) => {
  setPageSize(parseInt(e.target.value, 10));
};

  return (
    <div>
      <div className="chart-container desktop-chart">
                <Line data={data} options={options}></Line>
              </div>

      <div className="p-4">
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
              <div>
                
              </div>
            </div>
          )}
        </div>
      </div>
      <div >
      <Footer />
      </div>
      
    </div>
  );
};

export default BurnHistory;
