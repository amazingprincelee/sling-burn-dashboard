import { useState, useEffect } from "react";
import moment from "moment/moment";
import Converter from "timestamp-conv";
import convert from "ethereum-unit-converter";

const transactionApi =
  "https://api.etherscan.io/api?module=account&action=tokentx&contractaddress=0x5a79be6cdce26bc853d72919bf98a0378641b607&address=0x000000000000000000000000000000000000dEaD&page=1&offset=100&startblock=0&endblock=27025780&sort=asc&apikey=RM1PBIHRH9F5JVJYH7ENZI6SWZMGXU3FTY";

const useTableData = () => {
  const [tableData, setTableData] = useState();

  useEffect(() => {
    fetch(transactionApi)
      .then((response) => response.json())
      .then((response) => {
        const apiData = response.result;

        // timeStamp conversion
        const newApidata = apiData.map((data) => {
          moment.defaultFormat = "DD.MM.YYYY HH:mm";
          const dateFromTimeStamp = new Converter.date(data.timeStamp);

          // format dateTime to moment.js understandably format
          const formattedDateFromTimeStamp =
            dateFromTimeStamp.formatHour.replace(",", "");

          // value conversion
          const slingValue = convert(data.value, "wei", "ether")
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
        setTableData(newApidata.reverse());
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return { tableData };
};

export default useTableData;
