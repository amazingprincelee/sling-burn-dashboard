import React from 'react';
import DataTable from 'react-data-table-component';



const Tables = () => {
    
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

            }
        ];




    return (
        <div className='data-container'>
                <div className='data-table'>

                <DataTable columns={columns}
                    data={data}
                    fixedHeader
                
                 />


               
            </div>


            </div>
    );
};


export default Tables;