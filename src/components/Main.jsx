import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Register, Activities, Routines } from "./";

const Main = () => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      async function saveUser() {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      }
      saveUser();
    }
  }, []);


  return (
    <div id="main">
      <BrowserRouter />>
    </div>
  );
};

export default Main;
