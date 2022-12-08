import React, { useState } from "react";
import { makeActivity } from "../api/index";

function CreateActivity() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const newActivity = await makeActivity({
      name: name,
      description: description,
    });
    return newActivity;
  }

  async function handleNameChange(event) {
    setName(event.target.value);
  }

  async function handleDescChange(event) {
    setDescription(event.target.value);
  }

  return (
    <div>
      <form id='CreateActivity'onSubmit={handleSubmit}>
        <h3>Make an Activity</h3>
        <label htmlFor="name"> Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={handleDescChange}
          require
        />
        <button type="submit">Create Activity</button>
      </form>
    </div>
  );
}

export default CreateActivity;
