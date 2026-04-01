import React from 'react'

const Fcomp4 = (props) => {
    console.log(props)
  return (
    <div className='Fcomp4 m-3'>
        <h3 className='mt-2'>Fcomp4</h3>
        <p>SID: {props.sid}</p>
        <p>SName: {props.sname}</p>
    </div>
  )
}

export default Fcomp4