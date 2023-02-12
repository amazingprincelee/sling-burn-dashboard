import React from 'react';





const Dashboard = () => {
    return (
        <div>
            <h1>Burn & Supply</h1>
            <div className='container center'>
                <div className='price-box'>
                    <p className='price-box-text'>Price:</p>
                    <div className='price'>
                        <h1>$0.00002723</h1>
                        <p>( -5%)</p>
                    </div>
                    
                </div>
                <div className='price-box'>
                    <p className='price-box-text'>Marketcap:</p>
                    <div className='price'>
                        <h1>$17.77K</h1>
                        <p>( -9%)</p>
                    </div>
                    
                </div>
                <div className='price-box'>
                    <p className='price-box-text'>Volume:</p>
                    <div className='price'>
                        <h1>$101.33</h1>
                        <p>( +17%)</p>
                    </div>
                </div>
                <div className='price-box'>
                    <p className='price-box-text'>Burn Goal:</p>
                    <div className='chart-container'>
                        
                        
                    </div>
                </div>
            </div>
        </div>

        
    );
};

export default Dashboard;