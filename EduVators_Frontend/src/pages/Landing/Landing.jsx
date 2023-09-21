//Shaina


import React from 'react'
import "./Landing.scss"

import { principalArray } from './Principal'
import { studentArray } from './Student'
import { teacherArray } from './Teacher'
import { supervisorArray } from './Supervisor'


import Navbar from '../../components/Navbar/Navbar'
import RoleBtn from '../../components/RoleBtn/RoleBtn'

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <div className="MainLanding">
        <div className="rightMainLanding">
           <h1>Name</h1>
           <h1>Email</h1>
           <h1>College</h1>
        </div>
        <div className="leftMainLanding">
           {principalArray.map((btns,id)=>{
              return <RoleBtn key={id} btns={btns}/>
           })}
        </div>
      </div>


    </div>
  )
}

export default Landing
