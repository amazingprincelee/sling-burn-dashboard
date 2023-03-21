import { useState, useEffect } from "react";
import moment from "moment";
import Converter from "timestamp-conv";
import convert from "ethereum-unit-converter";

const transactionApi =
  "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x5a79be6cdce26bc853d72919bf98a0378641b607&address=0x000000000000000000000000000000000000dEaD&page=1&offset=10000&startblock=0&endblock=40000000&sort=desc&apikey=2KBH34YNQ4QHV4E5RHF5Y4QBCDWG5RJ5IP";

const useTableData = (pageNumber, pageSize) => {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${transactionApi}&page=${pageNumber}&offset=${pageSize}`)
      .then((response) => response.json())
      .then((response) => {
        const apiData = response.result;

        // timeStamp conversion
        const newApidata = apiData.map((data) => {
          moment.defaultFormat = "DD.MM.YYYY HH:mm";
          const dateFromTimeStamp = new Converter.date(data.timeStamp);

          // format dateTime to moment.js understandable format
          const formattedDateFromTimeStamp =
            dateFromTimeStamp.formatHour.replace(",", "");

          // conversion from wei to eth value
          const toEthValue = convert(data.value, "wei", "ether");
          const slingValue = Number(toEthValue)
            .toFixed(0)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

          const returningData = {
            timeStamp: moment(
              formattedDateFromTimeStamp,
              moment.defaultFormat
            ).fromNow(),
            hash: data.hash,
            to: data.to,
            sling: slingValue,
          };
          return returningData;
        });
        // sort data in descending order
        setTableData(newApidata);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setIsLoading(false);
      });
  }, [pageNumber, pageSize]);

  return { tableData, isLoading };
};

export default useTableData;
