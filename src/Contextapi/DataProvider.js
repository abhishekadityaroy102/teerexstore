import React, { createContext, useEffect, useState } from "react";
export const DataProvider = createContext();
const initialstate = {
  productdata: [],
  filterdata: [],
  cartitems: [],
  order_success: false,
};
export const DataProviderwrapper = ({ children }) => {
  const [initialdata, setinitialdata] = useState(initialstate);
  const getalldata = async () => {
    let res = await fetch(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    );
    let value = await res.json();
    if (value) {
      let newarr = value.map((el) => (el = { ...el, item_incart: 0 }));
      setinitialdata({
        ...initialdata,
        productdata: newarr,
        filterdata: newarr,
        cartitems: [],
        order_success: false,
      });
    }
  };
  //  This reducer is for cart handlling
  const dispatchcartfunc = (type, payload) => {
    switch (type) {
      case "add_cart": {
        let newarr = initialdata.productdata.map((el) =>
          el.id == payload.id
            ? { ...el, item_incart: Number(el.item_incart) + 1 }
            : el
        );
        let newfilterarr = initialdata.filterdata.map((el) =>
          el.id == payload.id
            ? { ...el, item_incart: Number(el.item_incart) + 1 }
            : el
        );
        let newcartitems = newarr.filter((el) => el.id == payload.id);
        // le.log("add_cart", payloaconsod);
        setinitialdata({
          ...initialdata,
          productdata: newarr,
          filterdata: newfilterarr,
          cartitems: [...initialdata.cartitems, ...newcartitems],
        });
        return {
          initialdata,
        };
      }
      case "direct_change_cartitem": {
        const newcartitems = initialdata.cartitems.map((el) =>
          el.id == payload.id ? { ...el, item_incart: Number(payload.num) } : el
        );
        const newarr = initialdata.productdata.map((el) =>
          el.id == payload.id ? { ...el, item_incart: Number(payload.num) } : el
        );
        setinitialdata({
          ...initialdata,
          cartitems: newcartitems,
          productdata: newarr,
          filterdata: newarr,
        });
        return {
          initialdata,
        };
      }
      case "delete_cart": {
        // console.log("delete_cart", payload);
        let newarr = initialdata.productdata.map((el) =>
          el.id == payload.id ? { ...el, item_incart: 0 } : el
        );
        let newfilterarr = initialdata.filterdata.map((el) =>
          el.id == payload.id ? { ...el, item_incart: 0 } : el
        );
        let newcartitems = initialdata.cartitems.filter(
          (el) => el.id !== payload.id
        );
        // console.log("cartitemsafter0", newcartitems);
        setinitialdata({
          ...initialdata,

          productdata: newarr,
          filterdata: newfilterarr,
          cartitems: newcartitems,
        });
        return {
          initialdata,
        };
      }
      case "inc_cart": {
        let newarr = initialdata.productdata.map((el) =>
          el.id == payload.id
            ? { ...el, item_incart: Number(el.item_incart) + 1 }
            : el
        );

        let newfilterarr = initialdata.filterdata.map((el) =>
          el.id == payload.id
            ? { ...el, item_incart: Number(el.item_incart) + 1 }
            : el
        );
        let newcartitems = initialdata.cartitems.map((el) =>
          el.id == payload.id
            ? { ...el, item_incart: Number(el.item_incart) + 1 }
            : el
        );
        setinitialdata({
          ...initialdata,
          productdata: newarr,
          filterdata: newfilterarr,
          cartitems: newcartitems,
        });
        // console.log("inc_cart", payload);
        return {
          initialdata,
        };
      }
      case "dec_cart": {
        let newarr = initialdata.productdata.map((el) =>
          el.id == payload.id
            ? { ...el, item_incart: Number(el.item_incart) - 1 }
            : el
        );
        let newfilterearr = initialdata.filterdata.map((el) =>
          el.id == payload.id
            ? { ...el, item_incart: Number(el.item_incart) - 1 }
            : el
        );
        let newcartitems = initialdata.cartitems.map((el) =>
          el.id == payload.id
            ? { ...el, item_incart: Number(el.item_incart) - 1 }
            : el
        );
        setinitialdata({
          ...initialdata,
          productdata: newarr,
          filterdata: newfilterearr,
          cartitems: newcartitems,
        });
        // console.log("dec_cart", payload);
        return {
          initialdata,
        };
      }
      default:
        setinitialdata({ ...initialdata, filterdata: initialdata.productdata });
        return {
          initialdata,
        };
    }
  };

  // dispatchcartfunc reducer  has ended here

  // This function is for getting information about has user's orders confirmed or not

  const orderconfirmedstate = () => {
    setinitialdata({
      ...initialdata,
      order_success: true,
    });
  };

  // This Reducer will be run when user will search or filter the data

  const dispatchdatafilterfunc = (type, payload) => {
    switch (type) {
      case "checkboxfilter": {
        console.log(payload);
        const filteredData = initialdata.productdata.filter((product) => {
          // Filter based on price
          if (payload.priceRange) {
            if (payload.priceRange == 250 && product.price > 250) {
              return false;
            }
            if (
              payload.priceRange == 450 &&
              (product.price <= 250 || product.price > 450)
            ) {
              return false;
            }
            if (payload.priceRange == 500 && product.price <= 450) {
              return false;
            }
          }

          // Filter based on color
          if (
            payload.colors.length > 0 &&
            !payload.colors.includes(product.color)
          ) {
            return false;
          }

          // Filter based on gender
          if (payload.gender && product.gender !== payload.gender) {
            return false;
          }
          // Filter based on brandType
          if (payload.type.length > 0 && !payload.type.includes(product.type)) {
            return false;
          }

          return true;
        });
        console.log(filteredData);
        setinitialdata({ ...initialdata, filterdata: filteredData });
        return {
          initialdata,
        };
      }

      // Filter data when user will search something in search bar
      case "search_filter": {
        let query = payload.toLocaleLowerCase();
        let newarr = initialdata.productdata.filter((el) => {
          return (el.name.toLocaleLowerCase() || el.type.toLowerCase()).indexOf(
            query
          ) !== -1
            ? true
            : false;
        });
        setinitialdata({
          ...initialdata,
          filterdata: newarr,
        });
        return {
          initialdata,
        };
      }
      case "no_search_filter": {
        setinitialdata({ ...initialdata, filterdata: initialdata.productdata });
        return {
          initialdata,
        };
      }
      default:
        return {
          initialdata,
        };
    }
  };

  //  dispatchdatafilterfunc reducer has ended here

  // this effect will run when user will enter at first time on website or reload the page

  useEffect(() => {
    console.log("i am running every render for getting first time data");
    getalldata();
  }, []);

  // this effect will run when order will be confirmed by user

  useEffect(() => {
    if (initialdata.order_success) {
      getalldata();
    }
  }, [initialdata.order_success]);

  return (
    <DataProvider.Provider
      value={{
        initialdata,
        dispatchcartfunc,
        dispatchdatafilterfunc,
        orderconfirmedstate,
      }}
    >
      {children}
    </DataProvider.Provider>
  );
};
