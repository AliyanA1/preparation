import { useState } from "react"


const Card=({title, discription, imgUrl})=>{
    const [titles, setTitles]=useState(title)

    const handleBtn=()=>{
        setTitles('title updated')
    }
    return(
        <div className="m-2 bg-white shadow-lg rounded-md p-4 w-80 text-center">
            <img className="w-full object-cover h-40 rounded-md" 
            src={imgUrl}
             alt={title} />
            <h2 className="font-mono m-2 text-2xl">{titles}</h2>
            <h3 className="font-mono ">{discription}</h3>
            <button 
            className="px-2 py-2 m-2 bg-red-400 hover:bg-red-500"
            onClick={handleBtn}>change</button>
            <button
            className="px-2 py-2 bg-blue-400 hover:bg-blue-500"
             onClick={()=>setTitles(title)}>Resest</button>
        </div>
    )
}

export default Card