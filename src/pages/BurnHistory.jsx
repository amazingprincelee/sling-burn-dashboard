import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { tableCustomStyles } from '../tableStyle';
import LineChart from '../components/LineChart';
import { SlingData } from "../Data";


const BurnHistory = () => {

    const columns = [
        {
            name: 'Time',
            selector: row => row.time
        },

        {
            name: 'From',
            selector: row => row.from
        },

        {
            name: 'Method',
            selector: row => row.method
        },

        {
            name: '$Sling',
            selector: row => row.sling
        }
    ];

        const data = [
            {
                id: 1,
                time: 'Yesterday',
                from: '23hjjjfkgjhjk4545jkkjkjk456',
                method: 'Sell',
                sling: '1.00'

            },

            {
                id: 2,
                time: '5 Hours Ago',
                from: '23hjjjfkgjhjk4545jkkjkjk456',
                method: 'Sell',
                sling: '1.00'

            },

            {
                id: 3,
                time: '8 Hours Ago',
                from: '23hjjjfkgjhjk4545jkkjkjk456',
                method: 'Sell',
                sling: '1.00'

            },

            {
                id: 4,
                time: '12 Hours Ago',
                from: '23hjjjfkgjhjk4545jkkjkjk456',
                method: 'Sell',
                sling: '1.00'

            },

            {
                id: 5,
                time: 'Yesterday',
                from: '23hjjjfkgjhjk4545jkkjkjk456',
                method: 'Sell',
                sling: '1.00'

            },

            {
                id: 6,
                time: 'Yesterday',
                from: '23hjjjfkgjhjk4545jkkjkjk456',
                method: 'Sell',
                sling: '1.00'

            },

            {
                id: 7,
                time: 'Yesterday',
                from: '23hjjjfkgjhjk4545jkkjkjk456',
                method: 'Sell',
                sling: '1.00'

            },

            {
                id: 8,
                time: 'Yesterday',
                from: '23hjjjfkgjhjk4545jkkjkjk456',
                method: 'Sell',
                sling: '1.00'

            },

            {
                id: 9,
                time: 'Yesterday',
                from: '23hjjjfkgjhjk4545jkkjkjk456',
                method: 'Sell',
                sling: '1.00'

            },

            {
                id: 10,
                time: 'Yesterday',
                from: '23hjjjfkgjhjk4545jkkjkjk456',
                method: 'Sell',
                sling: '1.00'

            },

            {
                id: 1,
                time: 'Yesterday',
                from: '23hjjjfkgjhjk4545jkkjkjk456',
                method: 'Sell',
                sling: '1.00'

            },

            {
                id: 2,
                time: '5 Hours Ago',
                from: '23hjjjfkgjhjk4545jkkjkjk456',
                method: 'Sell',
                sling: '1.00'

            },

            {
                id: 3,
                time: '8 Hours Ago',
                from: '23hjjjfkgjhjk4545jkkjkjk456',
                method: 'Sell',
                sling: '1.00'

            },

            {
                id: 4,
                time: '12 Hours Ago',
                from: '23hjjjfkgjhjk4545jkkjkjk456',
                method: 'Sell',
                sling: '1.00'

            },

            {
                id: 5,
                time: 'Yesterday',
                from: '23hjjjfkgjhjk4545jkkjkjk456',
                method: 'Sell',
                sling: '1.00'

            },

            {
                id: 6,
                time: 'Yesterday',
                from: '23hjjjfkgjhjk4545jkkjkjk456',
                method: 'Sell',
                sling: '1.00'

            }
        ];



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
                    data={data}
                    fixedHeader
                    pagination
                    customStyles={tableCustomStyles}
                 />      
            </div>
        </div>
    );
};

export default BurnHistory;