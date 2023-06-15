import "./App.css";
import Product_list from "./components/product_list";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import Addtocart from "./components/addtocart";
import { useEffect, useState } from "react";
import SideBar from "./components/sidebar";
import Register from "./components/register";
import Protected from "./components/protect";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const [cartData, setCartData] = useState([]);

  let login = JSON.parse(localStorage.getItem("isLogin"));
  useEffect(() => {
    if (login) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [login]);

  return (
    <BrowserRouter>
      <div className="App">
        <SideBar isLogged={isLogged} setIsLogged={setIsLogged} />
        <Routes>
          <>
            <Route path="/" element={<Login setIsLogged={setIsLogged} />} />
            <Route
              path="/productlist"
              element={
                <Protected>
                  <Product_list setCartData={setCartData} cartData={cartData} />
                </Protected>
              }
            />
            <Route
              path="/addtocart"
              element={
                <Protected>
                  <Addtocart cartData={cartData} setCartData={setCartData} />
                </Protected>
              }
            />
            <Route path="/register" element={<Register />} />
          </>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
