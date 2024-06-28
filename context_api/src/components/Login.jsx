import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <>
      <div className="h-96 flex items-center justify-center">
        <div className="bg-zinc-800 w-1/2 p-4 rounded-lg absolute">
          <div id="form" className="flex flex-col gap-2 text-white">
            <input
              className="w-full bg-zinc-600 px-4 py-1 rounded outline-none"
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="w-full bg-zinc-600 px-4 py-1 rounded outline-none"
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-full bg-blue-600 text-white px-4 py-1 rounded"
              onClick={handleSubmit}
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
