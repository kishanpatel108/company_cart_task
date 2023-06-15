import React, {useState } from "react";
import { useNavigate } from "react-router-dom";

const GetData = () => {
  let datah = localStorage.getItem("loginTask");
  if(datah){
    return JSON.parse(localStorage.getItem("loginTask"));
  }
  else{
    return [];
  }
}

function Login(props) {
  const [getData , setGetData] = useState(GetData());
  const [inputData , setInputData] = useState("");
  const [password , setPassword] = useState("");

  const navigate = useNavigate();

  const submitLogin = (e) => {
    e.preventDefault();
    const login_sub = getData.find((item)=>item.Email === inputData && item.Password === password);
    if(login_sub)
    {
      props.setIsLogged(true)
      localStorage.setItem("isLogin" ,true)
      navigate("/productlist")
    }
    else{
      alert("Invalid Password and Email")
    }
    setInputData("");
    setPassword("");
};

  return (
    <>
      <div style={{width:"40%",display:"inline-block"}}>
        <label className="form-label">Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter Your Email"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
          required
        />
        <label className="col-sm-2 col-form-label">password</label>
        <input
          className="form-control"
          type="password"
          placeholder="Enter Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br/>
        <button type="button" className="btn btn-primary" onClick={(e) => submitLogin(e)}>
          submit
        </button>
      </div>
    </>
  );
}

export default Login;
