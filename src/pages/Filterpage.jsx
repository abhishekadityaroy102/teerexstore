import React, {useContext, useEffect, useState } from 'react'
import { DataProvider } from '../Contextapi/DataProvider';
import styles from "./Filterpage.module.css";

const Filterpage = () => {
  
  const {dispatchdatafilterfunc,initialdata}=useContext(DataProvider)
  // const [allfilterarr, setallfilterarr] = useState([])
  const [filterData, setFilterData] = useState({
    colors: [],
    gender: null,
    priceRange: null,
    type:[]
  });
  const [allcolor, setallcolor] = useState([]);
  const getallcolor = () => {
    let value = [];
    initialdata?.productdata.length > 0 &&
      initialdata.productdata.map((el) => {
        if (!value.includes(el.color)) {
          value.push(el.color);
        }
      });
    return value;
  };
  // const [colorfilterarr, setcolorfilterarr] = useState([]);
  // const [brandfilterarr, setbrandfilterarr] = useState([]);
  // const [genderfilterarr, setgenderfilterarr] = useState([]);
  // const [pricerangefilterarr,setpricerangefilterarr]=useState([])
  const handlecolor = (event) => {
    // console.log(e.target.value)
    if(!filterData.colors.includes(event.target.value)){
      setFilterData((prevState) => ({
        ...prevState,
        colors: [...filterData.colors,event.target.value],
      }));
    }
    else{
     let fiterarray=  filterData.colors.filter((el)=>el!=event.target.value)
     setFilterData((prev)=>({
       ...prev,colors:[...fiterarray]
     }))
    }
    // const checked = e.target.checked;
    // const { name, value } = e.target;
    // if (checked) {
    //   setcolorfilterarr([...colorfilterarr, value])
    // }
    // else {
    //   setcolorfilterarr(colorfilterarr.filter((el)=>(el.color!=value)))
    // }
  }
  const handlegender = (event) => {
    const selectedGender = event.target.value;
    setFilterData((prevState) => ({
      ...prevState,
      gender: selectedGender,
    }));
    
    
    
    // console.log(e.target.value)
  }
  // setallfilterarr([...colorfilterarr, ...genderfilterarr, ...pricerangefilterarr, ...brandfilterarr])
 
  const handlebrand = (event) => {
    if(!filterData.type.includes(event.target.value)){
      setFilterData((prevState) => ({
        ...prevState,
        type: [...filterData.type,event.target.value],
      }));
    }
    else{
     let fiterarray=  filterData.type.filter((el)=>el!=event.target.value)
     setFilterData((prev)=>({
       ...prev,type:[...fiterarray]
     }))
    }
    // console.log(e.target.value)
  }
  
  const handlepricesort = (event) => {
    const selectedPriceRange = event.target.value;
    setFilterData((prevState) => ({
      ...prevState,
      priceRange: selectedPriceRange,
    }));
  
  }
  // useEffect(() => {
  //   setallfilterarr([...colorfilterarr, ...genderfilterarr, ...pricerangefilterarr, ...brandfilterarr])

  // },[colorfilterarr,genderfilterarr,pricerangefilterarr,brandfilterarr])
  // useEffect(() => {
  //   // console.log(allfilterarr)
  //   console.log("inside useffect", allfilterarr)
  //   if (allfilterarr.length > 0) {
  //     dispatchdatafilterfunc("checkboxfilter",allfilterarr)
  //   }
  // }, [colorfilterarr, genderfilterarr, pricerangefilterarr, brandfilterarr])
  useEffect(() => {
    let value = getallcolor();
    setallcolor(value);
  }, [initialdata.productdata]);
  console.log("filterdata", filterData)
  useEffect(() => {
    dispatchdatafilterfunc("checkboxfilter",filterData)
  },[filterData])
  // console.log(genderfilterarr,brandfilterarr,colorfilterarr,pricerangefilterarr)
  return (
    <div className={styles.filterpage_main_container}>
      <b>Color</b>
      {
        allcolor.length>0&&allcolor.map((el)=> <><br></br>
          <label><input type="checkbox" value={el} name="color" onChange={handlecolor}></input> { el}</label></>)
      }
      <br></br>
      <b>Gender</b>
      <br></br>
      <label><input type="radio" name="gender" value="Men" onChange={handlegender}></input> Men</label>
      <br></br>
      <label><input type="radio" name="gender" value="Women" onChange={handlegender}></input> Women</label>
      <br></br>
      <b>Price</b>
      <br></br>
      <label><input type="radio" name="price" value={250} onChange={handlepricesort}></input> 0 - Rs 250</label>
      <br></br>
      <label><input type="radio" name="price" value={450} onChange={handlepricesort}></input> Rs 251 - 450</label>
      <br></br>
      <label><input type="radio" name="price" value={500} onChange={handlepricesort}></input> Rs 450 +</label>
      <br></br>
      <b>Type</b>
      <br></br>
      <label><input type="checkbox" name='type' value="Polo" onChange={handlebrand}></input> Polo</label>
      <br></br>
      <label><input type="checkbox" name="type" value="Hoodie" onChange={handlebrand}></input> Hoodie</label>
      <br></br>
      <label><input type="checkbox" name="type" value="Basic" onChange={handlebrand}></input>  Basic</label>
    </div>
  )
}

export default Filterpage