import React, { useState } from 'react'

const Hooks = () => {
  const [islogged, setlogged]=useState(false);
  const toglefun=()=>{
    setlogged(!islogged)
  }
  return (
    <div>
      <button
      onClick={toglefun}
      className='p-2 bg-blue-400 text-black font-mono'>
        {islogged ? 'hide details': 'show Details'}
      </button>
      {islogged && 
      <h3 className='text-2xl font-mono text-white '>here the details about porsche g3 rs 911</h3>
      }
    </div>
  )
}

export default Hooks