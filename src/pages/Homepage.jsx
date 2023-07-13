import React from "react";
import Navbar from "../Components/Navbar";
import Filterpage from "./Filterpage";
import Productspage from "./Productspage";
import styles from "./Homepage.module.css";
import { Searchbar } from "../Components/Searchbar";
const Homepage = () => {
  return (
    <div className={styles.homepage_main_container}>
      <Searchbar />
      <div className={styles.homepage_aftersearch_box}>
        <div className={styles.Filterpage_box}>
          <Filterpage />
        </div>

        <div className={styles.Productspage_box}>
          <Productspage />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
