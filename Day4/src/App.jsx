import React from 'react'
import Card from './Components/Card'
import { data } from './Data/Data'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-900 flex flex-row flex-wrap items-center justify-center gap-4 p-4'>
    {
      data.map((card)=>(
        <Card  key={card.id}
         id={card.id} title={card.title} discription={card.discription} 
        imgUrl={card.imgUrl}
        />
      ))
    }
    </div>
  )
}

export default App