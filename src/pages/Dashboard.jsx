import React from 'react';
import DisplayBoxes from '../components/DisplayBoxes';
import Tables from '../components/Tables';





const Dashboard = () => {

    return (
        <div className='dashboard-main'>
            <h1>Burn & Supply</h1>
           <DisplayBoxes />

            {/* trasaction history area 1 */}
            <h3>Lastest Burns</h3>
            <Tables />

            <button className='view-all-btn'>View All</button> 

            {/* trasaction history area 2 */}
            <h3>Burners Ranking</h3>
            <Tables />
            <button className='view-all-btn'>View All</button> 
        </div>

        
    );
};

export default Dashboard;