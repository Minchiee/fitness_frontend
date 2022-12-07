
const BASE = "https://fitnesstrac-kr.herokuapp.com/api";

export async function getRoutines() {
    try {
        const response = await fetch (`${BASE}/rouitines`, {
            headers: {
                "Content-Type": "application/json",
            },
        });
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function getActivities() {
    try{
    const response = await fetch (`${BASE}/activities`, {
        headers: {
            "Content-Type": "application/json",
        },
    });
    const result = await response.json();
    return result;
} catch (error) {
    throw error;
}
}

export async function getActivityRoutines() {
    try {
        const response = await fetch (`${BASE}/routines`, {
            headers: {
                "Content-Type": "application/json",
            }
        });
        const result = await response.json();
        getActivityRoutines();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function registerUser(username, password) {
    try {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        };
        const response = await fetch (`${BASE}/users/register`, options);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function loginUser(username, password) {
    try {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        };
        const response = await fetch (`${BASE}/users/login`, options);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function getMyRoutine(username, token) {
    try {
        const response = await fetch(`${BASE}/users/${username}/routines`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                },
        });
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function addRoutine(token, name, goal, isPublic) {
    try {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                name,
                goal,
                isPublic
            }),
        };
        const response = await fetch (`${BASE}/routines`, options);
        const result = await response.json();
        return result;
    } catch (error) {
        
    }
}

export async function updateRoutine(token, routine, routineId) {
    try {
        const options = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(routine)
        };
        const response = await fetch (`${BASE}/routines/${routineId}`, options);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function deleteRoutine(token, routineId) {
    try {
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch (`${BASE}/routines/${routineId}`, options);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function addRoutineActivity(
    routineId,
    activityId,
    count,
    duration
) {
    try {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                activityId,
                count,
                duration
            }),
        };
        const response = await fetch (`${BASE}/routines/${routineId}/activities`, options);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function updateActivityRoutine(
    token,
    count,
    duration,
    routineActivityId
) {
    try {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ count, duration }),
        };
        const response = await fetch (`${BASE}/routine_activities/${routineActivityId}`, options);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function deleteActivityRoutine(token, routineActivityId) {
    try {
        const options = {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        };
        const response = await fetch (`${BASE}/routine_activities/${routineActivityId}`, options);
        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
}

export async function makeActivity(token, name, description) {
    try {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                name,
                description,
            }),
        };
        const response = await fetch (`${BASE}/activities`, options);
        const result = await response.json();
        return result;

    } catch (error) {
        throw error;
    }
}