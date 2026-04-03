import React from 'react'
import { useLocation } from 'react-router-dom';

const Logout = () => {
    
    let location = useLocation();

  return (
    <div className='text-center m-5'>  
        <h3 className='fs-1'> {location.state.name} Logout Done Successfuly !</h3>
    </div>
  )
}

export default Logout;