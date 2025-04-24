import { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState(false);
  const [name, setname]=useState('')

  const handleLogin = (e) => {
    e.preventDefault();
    setLogin(true);
  };

  const handleLogout = () => {
    setLogin(false);
  };

  return (
    <div className="text-white font-mono w-80 p-5 bg-slate-800 border-2 border-gray-300 rounded-md mx-auto mt-20">
      {
        login ? (
          <div className="text-center space-y-4">
            <h1 className="text-lg font-semibold">Welcome back {name}</h1>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 p-2 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="username">Username:</label>
              <input
                required
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                className="p-2 rounded text-white bg-gray-700"
                value={name}
                onChange={(e)=> setname(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="password">Password:</label>
              <input
                required
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="p-2 rounded text-white bg-gray-700"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 p-2 rounded"
            >
              Login
            </button>
          </form>
        )
      }
    </div>
  );
};

export default Login;
