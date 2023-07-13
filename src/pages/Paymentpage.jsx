import React, { useEffect, useContext, useState } from "react";
import styles from "./Paymentpage.module.css";
import { DataProvider } from "../Contextapi/DataProvider";
const PaymentForm = () => {
  const { initialdata, orderconfirmedstate } = useContext(DataProvider);
  const [loading, setloading] = useState(true);
  function getdirecttohomepage() {
    setTimeout(() => {
      // window.location.reload();
      setloading(false);
      orderconfirmedstate();
    }, [3000]);
  }
  useEffect(() => {
    getdirecttohomepage();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>Please Wait , Order confirmation in progress....</h2>
      ) : (
        <div>
          <img
            width="300px"
            height="300px"
            src="data:image/png;base64,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"
          ></img>
          <h2>Order Confirmed Successfully</h2>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
