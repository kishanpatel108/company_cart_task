import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Protected = ({ children }) => {
  const [isLogged, setIsLogged] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    let login = JSON.parse(localStorage.getItem("isLogin"));
    if (login) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  },[]);

  if(!isLogged)
  {
    return navigate("/")
  }
  else
  {
    return children
  }
};

export default Protected;