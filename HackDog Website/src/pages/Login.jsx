import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useRecoilState } from 'recoil';
import { Navigate, useNavigate } from 'react-router-dom';
import {emailState,passState} from '../states'
import Home from './Home';
import Register from './Register';
const LoginForm = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [email1,setEmail1] = useRecoilState(emailState)
  const [pass1,setPass1] = useRecoilState(passState)
  
  const [reg,setReg] = useState('')
  const handleSubmit = (e) => {
    // setEmail1(email)
    // setPass1(password)
  
    e.preventDefault();

    // console.log('Email:', email);
    // console.log(pass1)
    // console.log(email1)
    // console.log('Password:', password);
    if(email.trim() === email1.trim() && password.trim() === pass1.trim())  {
     
      navigate('/')
    }else {
      navigate('/Register')

    }
    
  };

  return (
    <div>

      <Navbar/> 
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-3xl font-semibold text-center mb-6 text-white">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">Email</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded border border-gray-600 focus:outline-none focus:border-purple-500 bg-gray-800 text-white"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-semibold mb-2 text-white">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded border border-gray-600 focus:outline-none focus:border-purple-500 bg-gray-800 text-white"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded bg-gradient-to-r from-yellow-400 via-green-400 to-blue-500 text-white font-semibold hover:from-green-500 hover:via-blue-500 hover:to-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginForm;
