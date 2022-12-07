import React, { useState, useEffect } from 'react';
import { getRoutines } from '../api';

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const routinesData = await getRoutines();
      setRoutines(routinesData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>All Public Routines List</h1>
      <div>
        {routines.map((routine) => (
          <div key={routine.id}>
            <p>Creator Name: {routine.creatorName}</p>
            <p>CreatorId: {routine.creatorId}</p>
            <p>Goal: {routine.goal}</p>
            <p>------------------------</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Routines;