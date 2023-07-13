import React, { useContext, useState } from "react";
import { DataProvider } from "../Contextapi/DataProvider";
import styles from "./Totalamountofcart.module.css";
const Totalamountofcart = () => {
  const { initialdata } = useContext(DataProvider);
  let newvalue = initialdata.cartitems.reduce(
    (prev, curr) => prev + curr.price * curr.item_incart,
    0
  );
  return (
    <div className={styles.Totalamount_container}>
      <div
        style={{
          width: "100%",
          border: "1.5px solid black",
          backgroundColor: "black",
          borderRadius: "7px",
          marginTop: "20px",
        }}
      ></div>
      <b style={{ textAlign: "center" }}>
        Total amount :<span> Rs. {newvalue.toFixed(2)}</span>
      </b>
    </div>
  );
};

export default Totalamountofcart;
