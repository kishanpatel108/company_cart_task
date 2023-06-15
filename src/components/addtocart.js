import React, { useState } from "react";

function Addtocart(props) {
  const [qty, setQty] = useState(1);
  // console.log("qty",qty);

  const handleMinush = (elem) => {
    // console.log('elemasd', elem)
    const data = props.cartData?.map((item) => {
      if(elem?.id === item?.id){
        return {
          ...item,
          qty: item.qty - 1
        } 
      }else {
        return item
      }
    })
    // setQty((prevQty) => prevQty + 1); 
    console.log('cartData', props.cartData)
    props.setCartData(data)
  };

  const handlePlush = (elem) => {
    console.log('elemasd', elem)
    const data = props.cartData?.map((item) => {
      if(elem?.id === item?.id){
        return {
          ...item,
          qty: item.qty + 1
        } 
      }else {
        return item
      }
    })
    // setQty((prevQty) => prevQty + 1); 
    // console.log('cartData', props.cartData)
    props.setCartData(data)

  };

  console.log("cartdata2", props.cartData);
  return (
    <div>
      <section className="h-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-10">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
              </div>

              {props?.cartData?.map((elem) => {
                console.log(elem)
                return (
                  <div className="card rounded-3 mb-4">
                    <div className="card-body p-4">
                      <div className="row d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                          <img
                            src={elem.image}
                            className="img-fluid rounded-3"
                            alt="Cotton T-shirt"
                          />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                          <p className="lead fw-normal mb-2">{elem.title}</p>
                          <p>
                            <span className="text-muted">
                              {elem.description.slice(0, 30)}
                              {elem.description.length > 30 ? "..." : null}
                            </span>
                          </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                          <h5 className="mb-0">{elem.price * elem.qty}</h5>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                          <button disabled={elem.qty === 1} onClick={() => handleMinush(elem)}>-</button>

                          <input
                            id="form1"
                            min="0"
                            name="quantity"
                            value={elem.qty}
                            type="number"
                            className="form-control form-control-sm"
                            disabled
                          />

                          <button onClick={()=>handlePlush(elem)}>+</button>
                        </div>

                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                          <a href="#!" className="text-danger">
                            <i className="fas fa-trash fa-lg"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="card">
                <div className="card-body">
                  <button
                    type="button"
                    className="btn btn-warning btn-block btn-lg"
                  >
                    Proceed to Pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Addtocart;
