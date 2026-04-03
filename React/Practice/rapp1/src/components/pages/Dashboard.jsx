import React from 'react'
import '../../css/dashboard.css'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

  let navigate = useNavigate();
  let data = {
    'name': 'Tejesh'
  }

  return (
    <div className='text-center m-5'>
        <h3 className='fs-1'>Dashboard</h3>
        <button
        onClick={() =>{
            navigate("/logout", {state:data} )
        }}
        className='p-1 mt-5 fs-4'
        >Logout</button>
    </div>
  )
}

export default Dashboard