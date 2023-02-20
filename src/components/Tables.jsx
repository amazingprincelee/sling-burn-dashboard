import React, { useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import { tableCustomStyles } from '../tableStyle';




const Tables = (props) => {


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
            <div className='data-container'>
            <h3>{props.tableTitle}</h3>
                <div className='data-table'>
                
                
                    <DataTable columns={columns}
                        data={tableData}
                        fixedHeader
                        customStyles={tableCustomStyles}
                        
                    />

                </div>

            </div>

        </div>    
            
    );
};


export default Tables;