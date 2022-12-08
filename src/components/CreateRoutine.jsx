import React, { useState } from "react";
import { addRoutine, getUserRoutines } from '../api/index'

const CreateRoutine = (props) => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState(false);


    async function handleSubmit(event) {
        event.preventDefault();
        const newRoutines = await addRoutine({
            name: name,
            goal: goal,
            isPublic: isPublic
        })
        return newRoutines;
    }

    async function handleNameChange(event){
        setName(event.target.value);
    };
    async function handleGoalChange(event){
        setGoal(event.target.value);
    };
    async function handleIsPublicChange(event){
        setIsPublic(event.target.value);
    };
    
    return (
    <form id="CreateRoutine" onSubmit={handleSubmit}>
        <label htmlFor="name">
            Name:
            <input type="text" name="name" value={name} onChange={handleNameChange} />
        </label>
        <label htmlFor="goal">
            Goal:
            <input type="text" name="goal" value={goal} onChange={handleGoalChange} />
        </label>
        <label htmlFor="isPublic">
            isPublic:
            <select defaultValue={isPublic} onChange={handleIsPublicChange} >
                <option value={false}>Private</option>
                <option value={true}>Public</option>
            </select>
        </label>
        <button type="submit">Create Routine</button>
    </form>
    )
    
}

export default CreateRoutine;