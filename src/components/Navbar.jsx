import React, { useState, useEffect } from "react";
import { Login } from "./";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div id="navbar">
      <NavLink id="navLogin" to="Login">
        Login
      </NavLink>
      <NavLink id="navRegister" to="Register">
        Register
      </NavLink>
      <NavLink id="navRoutines" to="Routines">
        Routines
      </NavLink>
      <NavLink id="navActivities" to="Activities">
        Activities
      </NavLink>
      {props.isLogin ? (
        <button>
          id="logOut" onClick=
          {() => {
            props.SetLogin(false);
            localStorage.removeItem("token");
          }}
          Log Out
        </button>
      ) : null}
      <NavLink id="navCreateActivities" to="create-activities">
        Create your own activities!
      </NavLink>
      <NavLink id="navCreateRoutines" to="create-routines">
        Create your own routines!
      </NavLink>
    </div>
  );
};

export default Navbar;
