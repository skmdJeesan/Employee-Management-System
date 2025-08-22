import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, pass);
    // console.log('Form submitted!');
    // console.log('Email is ', email);
    // console.log('password is ', pass);
    setEmail("");
    setPass("");
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-[#222]">
      <div className="h-[80vh] w-[350px] bg-zinc-800 rounded-2xl py-10 px-6 shadow-2xl">
        <form onSubmit={(e) => submitHandler(e)} className="flex flex-col">
          <div className="text-white font-bold text-2xl">Log In</div>
          <div className="mt-30">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="py-1 px-2 rounded-full border-red-400 border-1 text-white w-full text-md outline-none"
              type="email"
              placeholder="Email"
            />
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required
              className="py-1 px-2 rounded-full border-red-400 border-1 text-white w-full mt-2 mb-4 text-md outline-none"
              type="password"
              placeholder="Password"
            />
            <div className="flex justify-between mb-7 ml-2 mr-2">
              <label className="text-white text-xs">
                <input type="checkbox" /> Remember me
              </label>
              <a className="text-red-400 text-xs">Forgot Password</a>
            </div>
            <button className="bg-red-400 w-full py-3 text-center rounded-full cursor-pointer hover:bg-red-600 active:scale-95 transition-transform">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
