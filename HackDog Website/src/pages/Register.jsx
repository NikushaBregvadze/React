import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useRecoilState } from 'recoil';
import {emailState,passState} from '../states'

export default function Register() {
    const [name, setName] = useState('');
    const [email,setEmail] = useRecoilState(emailState)
    const [pass,setPass] = useRecoilState(passState)
   
    const [disable, setDisabled] = useState(true);
    const [redirectTo, setRedirectTo] = useState(null);

    const onChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        localStorage.setItem('name', name)
        localStorage.setItem('email', email)
        localStorage.setItem('password', passState)
        e.preventDefault();
        if (!disable) {
            // Redirect to '/' when the form is submitted
            setRedirectTo('/Login');
        }
    };

    useEffect(() => {
        if (name.trim() !== '' && email.trim() !== '' && pass.trim() !== '') {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [name, email, pass]);

    const onChange1 = (e) => {
        setName(e.target.value);
    };

    const onChange2 = (e) => {
        setPass(e.target.value);
    };

    // Redirect if redirectTo is set
    if (redirectTo) {
        return <Navigate to={redirectTo} />;
    }

    return (
      <div>

    
      <Navbar/>
        <div className='flex justify-center items-center h-screen bg-gray-900'>
          
            <div className="bg-white shadow-md rounded px-12 pt-8 pb-20 mb-4">
                <h2 className="text-2xl mb-6 text-center text-gray-800">Register</h2>
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input value={name} onChange={onChange1} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input value={email} onChange={onChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input value={pass} onChange={onChange2} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button disabled={disable} onClick={handleSubmit} className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    );
}
