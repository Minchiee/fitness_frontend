const BASE = "https://fitnesstrac-kr.herokuapp.com/api";

export async function getAllRoutines() {
  try {
    const options = {
      headers: { "Content-Type": "application/json"},
    };
    const response = await fetch (`${BASE}/routines`, options);
    const routines = await response.json();

    return routines;
  } catch (error) {
    throw error;
  }
}

export async function getSingleRoutine() {
  try {
    const options = {
      headers: {"Content-Type": "application/json"},
    };
    const response = await fetch (`${BASE}/routines/${id}`, options);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function createNewRoutine() {
  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({

      })
    };
    const response = await fetch (`${BASE}/routines`, options);
    const result = await response.json();

    return result.data
  } catch (error) {
    throw error;
  }
}

export async function updateRoutine() {
  try {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({

      }),
    };
    const response = await fetch(`${BASE}/routines/${id}`, options);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function deleteRoutine() {
  try {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(`${BASE}/routines/${id}`, options);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}