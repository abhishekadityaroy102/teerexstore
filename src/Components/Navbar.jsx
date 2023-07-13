import React, { useContext } from 'react'
import styles from "./Navbar.module.css"
import {GrCart} from "react-icons/gr"
import { NavLink } from 'react-router-dom'
import { DataProvider } from '../Contextapi/DataProvider'
const activestyle = {
    color: "red",
    backgroundColor: "whitesmoke",
    // textDecoration:"none"
}
const notactivestyle = {
    color: "black",
    backgroundColor: "white",
    
}
const Navbar = () => {
  const { initialdata } = useContext(DataProvider)
  let allcartitems=initialdata.cartitems.reduce((prev,curr)=>prev+Number(curr.item_incart),0)
  return (
      <div className={styles.navbar_box}>
          <div className={styles.componylogo}>
              <NavLink to="/"  style={{textDecoration:"none"}}>
              <i>TeeRex Store</i>
              </NavLink>

          </div>
          <div className={styles.navbar_menu}>
              <ul>
                 <li><NavLink to="/"  style={isActive => ({
    color: isActive ? "black" : "blue",textDecoration:"none"
  })}>Products</NavLink></li>

                  <li><NavLink to="/cart"  style={isActive => ({
    color: isActive ? "black" : "blue",textDecoration:"none"
          })}><GrCart />
            <span>{ allcartitems}</span></NavLink></li>
              </ul>
          </div>
    </div>
  )
}

export default Navbar