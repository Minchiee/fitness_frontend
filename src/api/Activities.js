const BASE = "https://fitnesstrac-kr.herokuapp.com/api";

export async function getAllActivities() {
  try {
    const options = {
      headers: { "Content-Type": "application/json"},
    };
    const response = await fetch (`${BASE}/activities`, options);
    const activities = await response.json();

    return activities;
  } catch (error) {
    throw error;
  }
}

export async function getSingleActivity() {
  try {
    const options = {
      headers: {"Content-Type": "application/json"},
    };
    const response = await fetch (`${BASE}/activities/${id}`, options);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function createNewActivity() {
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
    const response = await fetch (`${BASE}/activities`, options);
    const result = await response.json();

    return result.data
  } catch (error) {
    throw error;
  }
}

export async function updateActivity() {
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
    const response = await fetch(`${BASE}/activities/${id}`, options);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}

export async function deleteActivity() {
  try {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    const response = await fetch(`${BASE}/activities/${id}`, options);
    const result = await response.json();

    return result;
  } catch (error) {
    throw error;
  }
}