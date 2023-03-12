import React from 'react';
import Tables from '../components/Tables';

const TopBurners = () => {

    return (
        <div>
            <h1>Top Burners</h1>
            <div className="container center">
                <Tables tableTitle={'Burn Ranking'} tableClass={'data-table-history'} pagination={true} />
            </div>
        </div>
    );
};


export default TopBurners;