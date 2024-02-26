import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import LoginForm from './pages/Login';
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import { DarkModeProvider } from './DarkModeContext';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
   
 <DarkModeProvider>
  <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<LoginForm />} />
        </Routes>
      </Router>
    </DarkModeProvider>
   
   
    
    
  );
}

export default App;
