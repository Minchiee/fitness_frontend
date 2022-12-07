import React, { useState } from "react";
import { addRoutine } from '../api/index'

const CreateRoutine = (props) => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        const newActivity = await addRoutine({
            name: name,
            goal: goal,
            isPublic: isPublic
        })
    }
    
    return (
    <div id="CreateRoutine"></div>
    )
    
}

export default CreateRoutine;