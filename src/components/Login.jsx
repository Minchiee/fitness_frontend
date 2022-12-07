import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";

const Login = (props) => {
    const [username, setUsername] = useState([]);
    let navigate = useNavigate();
    async function handleSubmit(event) {
        event.preventDefault();
        const username = event.target[0].value;
        const password = event.target[1].value;
        const loggedInUser = await loginUser(username, password);
        const token = loggedInUser.token;
        props.setLogin(true);
        localStorage.removeItem("token");
        localStorage.setItem("token", token);
        localStorage.removeItem("username");
        localStorage.setItem("username", username);
        setUsername(username);
        props.userLogin();
        navigate("/MyRoutines")
    }
    return(
        <div>
            <div id="logIn">Log In</div>
            <div className="loginForm">
                <form onSubmit={handleSubmit}>
                    <label id="user" htmlFor="password">
                        Username:{" "}
                    </label>
                    <input id="username" type="text" required />
                    <label id="pass" htmlFor="password">
                        Password:{" "}
                    </label>
                    <input id="password" type="password" />
                    <button id="loginBtn" type="submit">
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;