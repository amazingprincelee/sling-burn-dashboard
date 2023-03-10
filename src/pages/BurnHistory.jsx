import React, { useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import { tableCustomStyles } from '../tableStyle';
import LineChart from '../components/LineChart';
import { SlingData } from "../Data";


const BurnHistory = () => {

    const [tableData, setTableData] = useState()

    const columns = [
        {
            name: 'Time',
            selector: row => row.timeStamp
            
        },

        {
            name: 'From',
            selector: row => row.from
        },

        {
            name: 'To',
            selector: row => row.to
        },

        {
            name: '$Sling',
            selector: row => '1'
        }
    ];

    useEffect(() => {
        fetch('https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x5a79be6cdce26bc853d72919bf98a0378641b607&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=RM1PBIHRH9F5JVJYH7ENZI6SWZMGXU3FTY')
           .then((response) => response.json())
           .then((response) => {
              setTableData(response.result);
              

            
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);



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

    return (
        <div>
            <h1>Burn History</h1>
            <div className='container center'>
              <div style={{width: 700 }}>
                <LineChart 
                    chartData={slingData}
                />
              </div>  
            </div>
            <h3>Burn Transactions</h3>
            <div className='data-table-history'>
            
                <DataTable columns={columns}
                    data={tableData}
                    fixedHeader
                    pagination
                    customStyles={tableCustomStyles}
                 />      
            </div>
        </div>
    );
};

export default BurnHistory;