import React, { useState, useEffect } from "react";
import ReviewsBar from "../components/progressbar/reviewsBar";
import {DisplayBox, RewiewScore} from "./DisplayBox";

const DisplayBoxes = (props) => {
  // usestate for the progress and rewiewsBar component
  const [rewiewScore, setRewiewScore] = useState(0);

  //APi Point endpoint consumables

  const [price, setPrice] = useState(0);
  const [marketCap, setMarketCap] = useState(0);
  const [volume, setVolume] = useState(0);
  // const [priceChange, setPriceChange] = useState("***");

  useEffect(() => {
    fetch(
      "https://api.dev.dex.guru/v1/chain/1/tokens/0x5a79be6cdce26bc853d72919bf98a0378641b607/market/?api-key=i0Pxxb4APurIDf9E8LcVKK0GYjRVjpa2w4h_5tgZeJk"
    )
      .then((response) => response.json())
      .then((data) => {
        setPrice(data.price_usd.toFixed(8));
        setMarketCap(
          Math.round(data.price_usd.toFixed(8) * 636000000)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
        setVolume(
          data.volume_24h_usd
            .toFixed(0)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
        //   setPriceChange(data.pairs[0].priceChange.h24);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0x5a79be6cdce26bc853d72919bf98a0378641b607&address=0x000000000000000000000000000000000000dEaD&tag=latest&apikey=2KBH34YNQ4QHV4E5RHF5Y4QBCDWG5RJ5IP"
    )
      .then((response) => response.json())
      .then((BurnData) => {
        
        const result = BurnData.result;
        const formattedResult = (result / 10000000000000000000000000).toFixed(2);
        console.log(formattedResult); // Output: "362548956891132981.09"

        // const newNum = num.substring(0, 2);

        setRewiewScore(formattedResult);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      <div className="d-flex flex-wrap justify-content-center">
      <RewiewScore heading={"Total Burn"} value={rewiewScore} >
          <div className="display-box-chart">
            <ReviewsBar score={rewiewScore} />
          </div>
        </RewiewScore>
        <DisplayBox heading={"Price"} value={price} />
        <DisplayBox heading={"Marketcap"} value={marketCap} />
        <DisplayBox heading={"24h Volume"} value={volume} />
        
      </div>
    </div>
  );
};

export default DisplayBoxes;
