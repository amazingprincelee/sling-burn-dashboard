import React from 'react';
import DisplayBoxes from '../components/DisplayBoxes';
import Tables from '../components/Tables';
import { HashLink as Link } from 'react-router-hash-link';

// import '../pages/BurnHistory'

const Dashboard = () => {

    return (
        <div className='dashboard-main'>
            <h1>Burn & Supply</h1>
            <DisplayBoxes />
            <div>
                <Tables
                    tableTitle="Latest History"

                >
                    <Link to="../BurnHistory" className='view-all-btn'>View All</Link>
                </Tables>
            </div>
            <div>
                <Tables
                    tableTitle="Burn Ranking"
                >
                    <Link to="../TopBurners" className='view-all-btn'>View All</Link>
                </Tables>
            </div>
        </div>
    );
};

export default Dashboard;