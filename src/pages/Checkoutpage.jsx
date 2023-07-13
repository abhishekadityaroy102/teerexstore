import React from "react";
import styles from "./Checkoutpage.module.css";
import { Link } from "react-router-dom";
const Checkoutpage = () => {
  return (
    <div className={styles.checkoutdiv}>
      <Link to="/checkout">
        <button className={styles.checkout_button}>Confirm Order</button>
      </Link>
    </div>
  );
};

export default Checkoutpage;
