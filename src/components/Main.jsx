import React, { useState, useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getCurrentUser } from "../api/User";
import { Navbar, Register, Activities, Routines } from "./";

const Main = () => {

  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  
  const userLogin = async () => {
    const user = await getUserInfo(localStorage.getItem("token"));
    setUserLoggedIn(user);
    setIsLogin(true);
  };

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      async function loggedIn() {
        const currentUser = await getCurrentUser();
        setUser(currentUser)
      }
      loggedIn();
    }
  }, []);

  return (
    <div id="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
