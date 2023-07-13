import React, { useEffect, useState,useContext } from 'react';
import styles from "./Productspage.module.css"
import Singleproductbox from "../Components/Singleproductbox"
import { DataProvider } from '../Contextapi/DataProvider';
import notfoundimage from "../not_found.jpg"
const Productspage = () => {
  const { initialdata } = useContext(DataProvider);
  console.log("initail data cards",initialdata)
  
  return (
    <div className={styles.Productspage_main_container}>
      {
        initialdata.filterdata.length > 0 ? initialdata.filterdata.length > 0 && initialdata.filterdata.map((el) => <Singleproductbox key={el.id} value={el} />) : <img className={styles.imageof_nodatafound}  src={notfoundimage} />
      }
    </div>
  )
}

export default Productspage