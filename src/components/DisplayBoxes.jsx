import React, { useState, useEffect} from 'react';
import ReviewsBar from '../components/progressbar/reviewsBar';



const DisplayBoxes = (props) => {

    const [rewiewScore, setRewiewScore] = useState(35.52);

    return (
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
            <p className='burn-goal'>Total token Burn: </p>
            <div className='chart-container'>
                <div className='row mt-3'>
                <div className='row mt-2'>
                    <ReviewsBar score={rewiewScore} />
                </div>
                
                </div>
                
            </div>
        </div>
    </div>
    );
};


export default DisplayBoxes;