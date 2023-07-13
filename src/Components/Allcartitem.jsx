import React, { useState, useEffect, useContext } from "react";
import Singlecartbox from "./Singlecartbox";
import styles from "./Allcartitem.module.css";
import { DataProvider } from "../Contextapi/DataProvider";
const Allcartitem = () => {
  const { initialdata } = useContext(DataProvider);

  return (
    <div className={styles.allcartitem_main_container}>
      {initialdata.cartitems.length > 0 &&
        initialdata.cartitems.map((el) => (
          <Singlecartbox key={el.id} value={el} />
        ))}
    </div>
  );
};

export default Allcartitem;
