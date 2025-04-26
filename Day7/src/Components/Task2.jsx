import React, { useState } from 'react';

const Task2 = () => {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  const isDisabled = name.length < 4 || pass.length < 4;

  const handleLogin = (e) => {
    e.preventDefault();
    setLogin(true);
  };

  const handleLogout = () => {
    setName('');
    setPass('');
    setLogin(false);
  };

  return (
    <div className='p-6 bg-slate-800 w-[400px] rounded text-white font-mono'>
      {!login && (
        <form onSubmit={handleLogin} className='flex flex-col gap-4'>
          <input
            className='rounded p-2 border border-gray-400 bg-slate-700'
            value={name}
            placeholder='Enter username'
            onChange={(e) => setName(e.target.value)}
            type='text'
            required
          />
          <input
            className='rounded p-2 border border-gray-400 bg-slate-700'
            value={pass}
            placeholder='Enter password'
            onChange={(e) => setPass(e.target.value)}
            type='password'
            required
          />
          <button
            type='submit'
            disabled={isDisabled}
            className={`p-2 rounded transition ${
              isDisabled
                ? 'bg-gray-500 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            Login
          </button>
        </form>
      )}

      {login && (
        <div className='text-center'>
          <h3 className='text-lg mb-4'>Welcome back, {name}!</h3>
          <button
            className='p-2 bg-red-500 hover:bg-red-600 rounded'
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Task2;
