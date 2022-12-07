import { json } from "react-router-dom";
import { ActivityRoutine } from "../components"

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

export async function registerUser(username, password)