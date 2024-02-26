import React from 'react';
import Navbar from '../components/Navbar';

const Contact = () => {
  const onClick = (e) => {
    e.preventDefault()
  }
  return (
    <div>

    <Navbar/>
    <div className="bg-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-800 mb-6">
        Please fill out the form below to get in touch with us.
      </p>
      <form className="w-full max-w-lg bg-gray-200 rounded-lg p-8">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={onClick}
          >
            Send
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Contact;
