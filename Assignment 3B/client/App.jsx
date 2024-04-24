import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home'; // Import the Home component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  // Callback function to handle successful login
  const handleLoginSuccess = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Register' element={<Signup />} />
        <Route path='/login' element={<Login onLoginSuccess={handleLoginSuccess} />} />
        {/* Conditional rendering of Home component */}
        {isLoggedIn && <Route path='/' element={<Home username={username} />} />}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
