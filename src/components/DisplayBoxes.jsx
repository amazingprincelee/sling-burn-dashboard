import { toNumber } from "ethers";
import React, { useState, useEffect } from "react";
import ReviewsBar from "../components/progressbar/reviewsBar";
import DisplayBox from "./DisplayBox";

const DisplayBoxes = (props) => {
  // usestate for the progress and rewiewsBar component
  const [rewiewScore, setRewiewScore] = useState(35.66);

  //APi Point endpoint consumables

  const [price, setPrice] = useState("***");
  const [marketCap, setMarketCap] = useState("***");
  const [volume, setVolume] = useState("***");
  // const [priceChange, setPriceChange] = useState("***");

  useEffect(() => {
    fetch(
      "https://api.dev.dex.guru/v1/chain/1/tokens/0x5a79be6cdce26bc853d72919bf98a0378641b607/market/?api-key=i0Pxxb4APurIDf9E8LcVKK0GYjRVjpa2w4h_5tgZeJk"
    )
      .then((response) => response.json())
      .then((data) => {
        setPrice(data.price_usd.toFixed(8));
        setMarketCap(
          Math.round(data.price_usd.toFixed(8) * 643940000)
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
        const num = BurnData.result;

        const newNum = num.substring(0, 2);

        setRewiewScore(newNum);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="">
      <DisplayBox heading={"Price"} value={price} />
      <DisplayBox heading={"Marketcap"} value={marketCap} />
      <DisplayBox heading={"24h Volume"} value={volume} />
      <DisplayBox heading={"Total token Burn"} value={volume}>
        <div className="display-box-chart">
          <ReviewsBar score={rewiewScore} />
        </div>
      </DisplayBox>
    </div>
  );
};

export default DisplayBoxes;
