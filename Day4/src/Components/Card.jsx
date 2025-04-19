import React from 'react'

const Card = ({id, discription, title,imgUrl}) => {
  return (
    <div className='m-2 w-80 p-4 rounded-md text-center shadow-lg bg-white '>
       <img className='w-full object-cover h-40 rounded-md'
       src={imgUrl} alt={id} />
       <h2 className='font-mono text-2xl m-2'>{title}</h2>
       <h3 className='font-mono'>{discription}</h3>

    </div>
  )
}

export default Card