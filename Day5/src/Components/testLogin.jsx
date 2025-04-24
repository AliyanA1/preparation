import { useState } from 'react';

const LoginCard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-slate-100">
      <div className="p-6 bg-white rounded shadow-lg text-center">
        <h1 className="text-2xl font-semibold mb-4">
          {isLoggedIn ? "Welcome, Aliyan!" : "Please log in"}
        </h1>

        {isLoggedIn && (
          <p className="text-gray-700 mb-4">You are now logged in. Enjoy your stay!</p>
        )}

        <button
          onClick={toggleLogin}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default LoginCard;
