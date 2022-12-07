const BASE = "https://fitnesstrac-kr.herokuapp.com/api";


export async function loginUser({ username, password }) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
    }),
  };
  try {
    const response = await fetch(BASE + "/users/login", options);
    const result = await response.json();

    if (result.error) {
      return result;
    } else {
      const token = result.token;
      localStorage.removeItem("token");
      localStorage.setItem("token", token);
      return result.user;
    }
  } catch (error) {
    console.error(error);
  }
}

export async function registerUser({ username, password }) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password
        })
    }

    try {
        const response = await fetch(BASE + '/users/register', options)
        const result = await response.json()

        if (result.error) {
            return result
        } else {
            const token = result.token
            localStorage.removeItem("token")
            localStorage.setItem("token", token)
            return result.user
        }
    } catch (error) {
        console.error(error)
    }
}


export async function getCurrentUser() {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    try {
        const local = localStorage.getItem("token")
        if (local){
            options.headers["Authorization"] = "Bearer" + local;
        }
        const response = await fetch(BASE + '/users/me', options)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}