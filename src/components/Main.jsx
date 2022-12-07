import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {
  Navbar,
  Register,
  Login,
  MyRoutines,
  Activities,
  Routines,
  Home,
  CreateRoutine
} from "./";
import { getActivities, addRoutine } from "../api";

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [activities, setActivities] = useState([]);
  const [routine, setRoutine] = useState([]);

  const getLoggedInUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getLoggedInUser();
    }
  }, []);

  useEffect(() => {
    async function fetchActivities() {
      const allActivities = await getActivities();
      setActivities(allActivities);
    }
    fetchActivities();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const createRoutines = await addRoutine();
      console.log(createRoutines)
      setRoutine(createRoutines);
    }
    fetchData();
  }, []);

  return (
    <div id="main">
      <BrowserRouter>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route
          path="login"
          element={
            <Login
              getLoggedInUser={getLoggedInUser}
              username={username}
              setUsername={setUsername}
              setLoggedIn={setLoggedIn}
            />
          }
        />
        <Route path="login/register" element={<Register />} />
        <Route
          path="activities"
          element={
            <Activities activities={activities} setActivities={setActivities} />
          }
        />
        <Route path="routines" element={<Routines />} />
        <Route
          path="/me"
          element={
            <MyRoutines
              username={username}
              activities={activities}
              setActivities={setActivities}
            />
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/create-routines" element={<CreateRoutine setRoutine={setRoutine}/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
