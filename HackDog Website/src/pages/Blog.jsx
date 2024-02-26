import React from 'react';
import Navbar from '../components/Navbar';
import { blogPosts } from '../BlogPost';
const Blog = () => {


  const colors = [
    'bg-yellow-100',
    'bg-green-100',
    'bg-blue-100',
    'bg-purple-100',
    'bg-pink-100',
    'bg-red-100',
  ];

  return (
    <div>
      <Navbar/>
   
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post, index) => (
          <div key={post.id} className={`rounded-lg p-4 ${colors[index % colors.length]}`}>
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-lg text-gray-800">{post.content}</p>
            <div className="h-12 w-12 bg-gray-500 rounded-full mt-4 flex justify-center items-center text-white text-bold">{post.id}</div> 
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Blog;
