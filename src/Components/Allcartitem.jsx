import React, { useState, useEffect, useContext } from 'react';
import Singlecartbox from "./Singlecartbox"
import styles from "./Allcartitem.module.css"
import { DataProvider } from '../Contextapi/DataProvider';
const Allcartitem = () => {
  const {initialdata}=useContext(DataProvider)
  // const [data, setdata] = useState([]);
  // async function getalldata() {
  //   let resj = await fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json");
  //   let res = await resj.json();
  //   setdata(res)
  // }
  // useEffect(() => {
  //   getalldata()
  // },[])
  return (
    <div className={styles.allcartitem_main_container}>{
      initialdata.cartitems.length > 0 && initialdata.cartitems.map((el) => <Singlecartbox key={el.id} value={el} />)
      }
         
      </div>
  )
}

export default Allcartitem