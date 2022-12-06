import React, { useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Register, Activities, Routines } from "./";

const Main = () => {

  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  
  const userLogin = async () => {
    const user = await getUserInfo(localStorage.getItem("token"));
    setUserLoggedIn(user);
    SetLogin(true);
  };



  return (
    <div id="main">
      
    </div>
  );
};

export default Main;
