import React, { useState, useEffect } from 'react';
import { getActivities } from '../api';

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const activityData = await getActivities();
      setActivities(activityData);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>All Public Activities List</h1>
      <div>
        {activities.map((activity) => (
          <div key={activity.id}>
            <p>Creator Name: {activity.name}</p>
            <p>Description: {activity.description}</p>
            <p>------------------------</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Activities;