import React,{useContext} from 'react'
import {ImCross} from "react-icons/im"
import { DataProvider } from '../Contextapi/DataProvider'
import styles from "./Singlecartbox.module.css"
const Singlecartbox = ({ value }) => {
  const {dispatchcartfunc}=useContext(DataProvider)
  const handlecartdelete = (value) => {
    dispatchcartfunc("delete_cart",value)
  }
  const handlechange_cart_item_qty = (e, value) => {
    if (value.quantity < e.target.value) {
      alert(`Sorry ! only ${value.quantity} items are available in stock`)
    }
    else {
      dispatchcartfunc("direct_change_cartitem",{num:e.target.value,id:value.id})  
    }
    
  }
  return (
    <div className={styles.Singlecartbox_main_container}>
      <div>
        <img src={value.imageURL}></img>
      </div>
      <div  className={styles.cartbox_price_name_container}>
        <br></br>
        <b>{value.name}</b>
        <br/>
        <b>Rs. {value.price.toFixed(2)}</b>
      </div>
      <div className={styles.cartbox_qty_container}>
        <br></br>
       <label>Qty :<select value={value.item_incart} onChange={(e)=>handlechange_cart_item_qty(e,value)}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select></label> 
      </div>
      <div className={styles.delete_cart_item_button} onClick={()=>handlecartdelete(value)}>
        <ImCross/>
      </div>
    </div>
  )
}

export default Singlecartbox