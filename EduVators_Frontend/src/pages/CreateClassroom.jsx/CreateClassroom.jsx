

import React from 'react'
import "./CreateClassroom.scss"

const CreateClassroom = () => {
  return (
    <div>
      <label>Class</label>
      <input type="number" />
      <a href="/AssignStudent"><div>AssignStudent</div></a>
      <a href="/AssignPeriod"><div>AssignPeriods</div></a>
    </div>
  )
}

export default CreateClassroom
