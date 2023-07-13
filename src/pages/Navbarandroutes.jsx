import React from "react";
import Navbar from "../Components/Navbar";
import MainRouters from "../Routes/MainRouters";
import styles from "./Navbarandroutes.module.css";
const Navbarandroutes = () => {
  return (
    <div className={styles.main_box}>
      <nav>
        <Navbar />
      </nav>
      <div className={styles.Routes_comp_box}>
        <MainRouters />
      </div>
    </div>
  );
};

export default Navbarandroutes;
