import React, { useState } from 'react';

const InputForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [discription, setDiscription] = useState('');

  const show = (e) => {
    e.preventDefault(); 
    setDiscription(`Hey ${name}, welcome back!`);
  };

  const gone=(e)=>{
    e.preventDefault()
    setEmail('')
    setName('')
    setDiscription('')
  }

  return (
    <div className="h-screen flex items-center justify-center bg-slate-100">
      <form className="flex flex-col gap-4 bg-white p-6 rounded shadow-md w-80">
        <input
          className="border border-gray-300 rounded p-2"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border border-gray-300 rounded p-2"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
          onClick={show}
        >
          Sign In
        </button>
        <button onClick={gone}
         className='bg-red-400 text-white rounded p-2 hover:bg-red-500'
        >Rest</button>
      </form>

      {discription && (
        <h2 className="mt-4 ml-2  text-xl font-mono text-green-700">{discription}</h2>
      )}
    </div>
  );
};

export default InputForm;
