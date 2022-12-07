const BASE = 'https://fitnesstrac-kr.herokuapp.com/api'

function isLogged(param) {
    const localToken = localStorage.getItem("token")
    if (localToken){
        param.headers["Authorization"] = "Bearer" + localToken
    }
}

export async function getUserRoutines({username, id}) {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    if (id){
        isLogged(id)
    }

    try {
        const response = await fetch(BASE + `/users/${username}/routines`, options)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}

export async function getPublicRoutines() {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    try {
        const response = await fetch(BASE + '/routines', options)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}

export async function postRoutine({ name, goal, isPublic }) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            goal: goal,
            isPublic: (isPublic || null)
        })
    }
    isLogged(options)

    try {
        const response = await fetch(BASE + '/routines', options)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}

export async function deleteRoutine({ id }) {
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    }

    try {
        const response = await fetch(BASE + `/routines/${id}`, options)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}

export async function updateRoutine({ id, name, goal, isPublic }) {
    const options = {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            goal: goal,
            isPublic: isPublic
        })
    }
    isLogged(options)

    try {
        const response = await fetch(BASE + `/routines/${id}`, options)
        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
    }
}