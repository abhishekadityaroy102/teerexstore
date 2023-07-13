import React, { useState, useEffect, useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { FaFilter } from "react-icons/fa";
import { DataProvider } from "../Contextapi/DataProvider";
import styles from "./Searchbar.module.css";
export const Searchbar = () => {
  const { initialdata, dispatchdatafilterfunc } = useContext(DataProvider);
  const [initialinput, setinitialinput] = useState("");
  const handlechange = (e) => {
    setinitialinput(e.target.value);
  };
  const searchdata = () => {
    let query = initialinput.toLocaleLowerCase();
    let newarr = initialdata.productdata.filter((el) => {
      return (el.name.toLocaleLowerCase() || el.type.toLowerCase()).indexOf(
        query
      ) !== -1
        ? true
        : false;
    });
    console.log(newarr);
  };

  useEffect(() => {
    if (initialinput) {
      let timeid = setTimeout(() => {
        dispatchdatafilterfunc("search_filter", initialinput);
      }, 1300);
      return () => {
        clearTimeout(timeid);
      };
    } else {
      dispatchdatafilterfunc("no_search_filter");
    }
  }, [initialinput]);
  console.log(initialinput);
  return (
    <div className={styles.searchbar_main_container}>
      <label>
        <input
          placeholder="Search for brand name and another types"
          type="search"
          onChange={handlechange}
        ></input>
        <BsSearch />
      </label>
      <span className={styles.filtericon}>
        <FaFilter />
      </span>
    </div>
  );
};
