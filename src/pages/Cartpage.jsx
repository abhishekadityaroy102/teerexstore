import React, { useContext } from "react";
import Allcartitem from "../Components/Allcartitem";
import Totalamountofcart from "../Components/Totalamountofcart";
import styles from "./Cartpage.module.css";
import Checkoutpage from "./Checkoutpage";
import nocart from "../nocart.webp";
import { DataProvider } from "../Contextapi/DataProvider";
const Cartpage = () => {
  const { initialdata } = useContext(DataProvider);
  return (
    <div className={styles.cartpage_main_container}>
      <h4 style={{ textAlign: "start", marginTop: "30px" }}>Shopping Cart</h4>
      {initialdata.cartitems.length > 0 ? (
        <>
          <Checkoutpage />
          <Allcartitem />

          <Totalamountofcart />
          
        </>
      ) : (
        <img className={styles.imageof_nocartitem} src={nocart}></img>
      )}
    </div>
  );
};

export default Cartpage;
