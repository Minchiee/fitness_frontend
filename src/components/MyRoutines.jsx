import React, {useState, useEffect} from 'react'
import { getMyRoutine } from "../api/index"

function MyRoutines(props) {
  const user = props.user;
  const [routineList, setRoutineList] = useState([]);

  useEffect(() => {
    if (user) {
      async function fetchData() {
        const userRoutine = await getMyRoutine(user);
        setRoutineList(userRoutine);
      }
      fetchData();
    }
  }, []);


  return (
    <div>
      {routineList && routineList.length
      ? routineList.map((routineInfo) => {
        return (
          <>
          <div id="singleRoutine">
            <p>Name: {routineInfo.name}</p>
            <p>Goal: {routineInfo.goal}</p>
            <p>isPublic: {routineInfo.isPublic}</p>
          </div>
          </>
        )
      })
    : null}
    </div>
  )
}

export default MyRoutines