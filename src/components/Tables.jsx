import moment from 'moment/moment';
import React, { useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import { tableCustomStyles } from '../tableStyle';

const Converter = require('timestamp-conv');


const transactionApi = 'https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x5a79be6cdce26bc853d72919bf98a0378641b607&address=0x000000000000000000000000000000000000dEaD&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=RM1PBIHRH9F5JVJYH7ENZI6SWZMGXU3FTY';


const Tables = (props) => {

    


    const [tableData, setTableData] = useState()


    
    const columns = [
        {
            name: 'Date',
            selector: row => row.timeStamp,
            
        },

        {
            name: 'Hash',
            selector: row => row.hash
        },

        {
            name: 'To',
            selector: row => row.to
        },

        {
            name: '$Sling',
            selector: row => row.sling
        }
    ];

       


        useEffect(() => {
            fetch(transactionApi)
               .then((response) => response.json())
               .then((response) => {
                 
                const apiData = response.result;

            // timeStamp conversion 
                const newApidata = apiData.map((data) => {
                const Date = new Converter.date(data.timeStamp);

            //value conversion    
            const value = Number(data.value) / 1000000000000000;
            const slingValue = value.toFixed(0);

                    
                    

                    const returningData = {
                        timeStamp: Date.formatDay,
                        hash: data.hash,
                        to: data.to,
                        sling: slingValue
                    }

                    return returningData;
                
                
                
                
                });

                  setTableData(newApidata);
                  
              
                
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
                        responsive
                        
                        
                    />

                </div>

            </div>

        </div>    
            
    );
};


export default Tables;