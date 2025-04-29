import React, { useState } from 'react'

const Register = () => {
    const [mail, setmail]=useState('')
    const [mailError, setmailError]=useState('')
    const [name, setName]=useState('')
    const [nameErr, setNameErr]=useState('')
    const [password, setpassword]=useState('')
    const [passwordErr, setpasswordErr]=useState('')

    
   
    const vaildation=(e)=>{
        e.preventDefault();
        setNameErr('')
        setmailError('')
        setpasswordErr('')

        let vaild=true;
        if(!mail.includes('@')){
            setmailError("Email must include @")
            vaild=false;
        } 
        if(name.length < 4 ){
            setNameErr('Username must be at least 4 characters');
            vaild=false;
        }
        if(password.length <6 ){
            setpasswordErr('Password must be at least 6 characters')
            vaild=false;
        }


        if (vaild) {
            alert(`Registration Successful, Welcome ${name}!`);
            setName('');
            setmail('');
            setpassword('');
          }
    }

  return (
    <div className='p-6 bg-gray-800 text-white w-[400px] mx-auto rounded'>
        <h2 className='text-2xl text-bold font-mono'>Register</h2>
        <form className='flex flex-col gap-4' onSubmit={vaildation}>
            
            <div>
            <input value={name}
             onChange={(e)=> setName(e.target.value)}
             type="text" required
             placeholder='enter your name'
             className='w-full border-2 p-2 rounded text-white'
             />
             {nameErr && <p className='text-red-400'>{nameErr}</p>}
            </div>

            <div>
            <input value={mail}
             onChange={(e)=> setmail(e.target.value)}
             type='email' required
             placeholder='enter your email'
              className='w-full p-2 border-2 rounded text-white'
             />
             {mailError && <p className='text-red-400'>{mailError}</p>}
            </div>

            <div>
            <input value={password} 
             onChange={(e)=> setpassword(e.target.value)}
            type="password" required
            placeholder='set password'
             className='w-full border-2 p-2 rounded text-white'
            />
            {passwordErr && <p className='text-red-400'>{passwordErr}</p>}
            </div>

            <button
            className='p-2 bg-blue-600 rounded hover:bg-blue-600'
             type='submit'>
                Register
             </button>
        </form>

        
    </div>
  )
}

export default Register