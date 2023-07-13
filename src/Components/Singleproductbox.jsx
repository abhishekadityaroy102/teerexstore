import React, { useContext } from 'react'
import { DataProvider } from '../Contextapi/DataProvider'
import styles from "./Singleproductbox.module.css"
const Singleproductbox = ({ value }) => {
  
  const { dispatchcartfunc, initialdata } = useContext(DataProvider)

  const handleaddcart = (value) => {
    if (value.quantity == 0) {
      alert("Sorry ! this item is not in stock")
    }
    else {
      dispatchcartfunc("add_cart",value)
    }
  
  }
  const handleinccart = (value) => {
    if (value.item_incart == value.quantity) {
      alert(`Sorry ! only ${value.quantity} items are available in stock`)
    }
    else {
      dispatchcartfunc("inc_cart",value)
    }
  }
  const handledeccart = (value) => {
    if (value.item_incart == 1) {
      dispatchcartfunc("delete_cart",value)
    }
    else {
      dispatchcartfunc("dec_cart",value)
    }
  }
  return (
    <div className={styles.singleproduct_main_container}>
      <h3>{ value.name}</h3>
      <div className={styles.singleproduct_img_box}>
        <img src={value.imageURL}></img>
      </div>
      <div className={styles.singleproduct_price_cart_container}>
        <b>Rs {value.price}</b>
        {
          value.item_incart == 0 ? <button onClick={() => handleaddcart(value)}>{ value.quantity==0?"Out of Stock":"Add to Cart"}</button> : <div>
            <button onClick={()=>handleinccart(value)}>+</button>
            <span> { value.item_incart} </span>
            <button onClick={()=>handledeccart(value)}>-</button>
          </div>
       }
      </div>
    </div>
  )
}

export default Singleproductbox