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
  CreateRoutine,
} from "./";
import { getActivities, addRoutine, getUser } from "../api";
import CreateActivity from "./CreateActivity";

const Main = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [activities, setActivities] = useState([]);
  const [routine, setRoutine] = useState([]);
  const [user, setUser] = useState(null);

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
      console.log(createRoutines);
      setRoutine(createRoutines);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        async function userLogged() {
          const currentUser = await getUser();
          setUser(currentUser);
        }
      }
      fetchData();
    };
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
          <Route path="register" element={<Register />} />
          <Route
            path="activities"
            element={
              <Activities
                activities={activities}
                setActivities={setActivities}
              />
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
                user={user}
              />
            }
          />
          <Route path="/" element={<Home />} />
          <Route
            path="/create-routines"
            element={<CreateRoutine setRoutine={setRoutine} />}
          />
          <Route path='/create-activities'
        element={<CreateActivity />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
