import React, { useState } from 'react'

const TextArea = () => {
    const [text, setText]=useState('')

    const fun=(e)=>{
        
        e.preventDefault();

        setText('')
        alert('your feedback is sumitted');
    }
  return (
    <div className='p-6 bg-slate-800 text-white w-[400px] rounded' >
        <h2 className='text-white font-mono font-bold'>Enter you feedback:</h2>
        <textarea className='w-full h-32 p-2 rounded bg-slate-700 text-white'
        placeholder='enter you tought'
        value={text}
        onChange={(e)=> setText(e.target.value)}
       
        />
        <h3 className='text-white'>{text.length}/150 chars</h3>

        <button 
  onClick={fun}
  disabled={text.length < 5 || text.length > 150}
  className={`p-3 rounded w-full mt-2 ${
    text.length >= 5 && text.length <= 150
      ? "bg-blue-500 hover:bg-blue-600"
      : "bg-gray-500 cursor-not-allowed"
  }`}
>
  Submit
</button>

        {text.length > 150 && 
         <p className='text-red-400 font-mono font-bold'>the length of characters should not be greater then 150</p>
        }
    </div>
  )
}

export default TextArea