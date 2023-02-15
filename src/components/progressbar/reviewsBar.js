import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RewiewsProvider from './reviewsProvider';


const RewiewsBar = (props) => {

    const {score} = props;

    return (
       <RewiewsProvider valueStart={0} valueEnd={score}>
            {(value) => (
        <CircularProgressbar 
        value = {value}
        text = {`${value} %`}
        circleRatio = {0.7}
        styles = {{
            trail: {
                strokeLinecap: "butt",
                transform: "rotate(-126deg)",
                transformOrigin: "center center"
                
            },

            path: {
                strokeLinecap: "butt",
                transform: "rotate(-126deg)",
                transformOrigin: "center center",
                stroke: "#FF0000"
            },

            text: {
                fill: "#808080"
            }
        }}

        strokeWidth = {10}

       />
            )}
       </RewiewsProvider>
    );
};


export default RewiewsBar;