import React, { useState } from 'react';
import { updateActivityRoutine } from '../api'

function EditActivity(props) {
    const setEditActivity = props.setEditActivity
    const user = props.user
    const activityBeingEdited = props.activityBeingEdited

    async function closeEditActivityMenu(){
        setEditActivity(false)
    }

    const [editActivityInfo, setEditActivityInfo] = useState({
        name: activityBeingEdited.name,
        description: activityBeingEdited.description
    })

    async function handleSubmit(event) {
        event.preventDefault();
        const name = activityBeingEdited.name
        const description = activityBeingEdited.description

        const response = await updateActivityRoutine(name, description)

        setEditActivity(false)
    }
  return (
    <div id="editActivity">
        <div className="popupMenu">
            <h3>Edit Activity</h3>
            <span
                className="material-symbols-outlined x"
                onClick={closeEditActivityMenu}
                alt="Close Menu"
                >
                    close
                </span>
                <form onSubmit={handleSubmit}>
                    <span>
                        <label htmlFor="name">Name: </label>
                        <input id="name" onChange={(e)=>
                        setEditActivityInfo({...editActivityInfo, name: e.target.value})
                        } value={editActivityInfo.name} required/>
                    </span>
                    <br />

                    <span>
                        <label htmlFor="description">Description: </label>
                        <input id="name" onChange={(e)=>
                        setEditActivityInfo({...editActivityInfo, description: e.target.value})
                    } value={editActivityInfo.description} required/>
                    </span>
                    <br />

                    <button className="submitButton" type="submit">
                        SUBMIT
                    </button>
                </form>
        </div>
    </div>
    
  )
}

export default EditActivity