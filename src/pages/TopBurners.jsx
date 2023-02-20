import React, { useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import { tableCustomStyles } from '../tableStyle';


const TopBurners = () => {

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
            selector: row => row.tokenSymbol
        }
    ];

    useEffect(() => {
        fetch('https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x5a79be6cdce26bc853d72919bf98a0378641b607&address=0x000000000000000000000000000000000000dEaD&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=2KBH34YNQ4QHV4E5RHF5Y4QBCDWG5RJ5IP')
           .then((response) => response.json())
           .then((response) => {
              setTableData(response.result);
              

            
           })
           .catch((err) => {
              console.log(err.message);
           });
     }, []);

    return (
        <div>
            <h1>Top Burners</h1>
            <h3>Burn Ranking</h3>
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


export default TopBurners;