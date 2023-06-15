import axios from "axios";
import "../App.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Product_list(props) {
  const [allData, setAllData] = useState([]);
  const navigate = useNavigate();
  // const [cartData, setCartData] = useState([]);
  // console.log("cartdata", cartData);

  useEffect(() => {
    axios
      // .get("https://fakestoreapi.com/products")
      .get("http://localhost:5000/posts")
      .then((res) =>
        // console.log("res",res.data)
        setAllData(res.data)
      )
      .catch((error) => console.log(error));
  }, []);

  const addData = (data) => {
    console.log('data123', data)
    const obj= {...data,qty:1}
    props.setCartData((prev) => [...prev, obj]);
    // console.log(data);
    // navigate("/addtocart");
  };

   const isInCart = (id) => {
     return props.cartData.some((item) => item.id === id);
   };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        alignContent: "center",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      {allData.map((elem) => {
        return (
          <>
            <div
              style={{
                width: "33.33%",
                display: "flex",
                flexDirection: "column",
                marginTop: "30px",
              }}
            >
              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src={elem.image} className="imageStyle" />
                {/* <h3 style={{ height: "50px",width:'200px' }}> */}
                <h3 style={{ width: "200px" }}>
                  {elem.title.slice(0, 30)}
                  {elem.title.length > 30 ? "..." : null}
                </h3>

                {isInCart(elem.id) ? (
                  <button onClick={() => navigate("/addtocart")}>
                    go to cart
                  </button>
                ) : (
                  <button onClick={() => addData(elem)}>Add to Cart</button>
                )}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Product_list;
