import React, { useState } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Data from './Data';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    const hardcodedUsername = 'user';
    const hardcodedPassword = 'password';
    
    if (username === hardcodedUsername && password === hardcodedPassword) {
      setLoggedIn(true);
    } else {
      toast.error('Invalid Credentials !', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  };
  return (
    <div >
      {loggedIn ? (
        <Data/>
        ) : (
          <>
          <Header/>
          <Navbar/>
          <div className="login-form">
          <h1 id='login-text'>Login</h1>
        <div>
          <label className='fw-bold ms-5'>
            Username <br />
            <input type="text" className='ms-5' value={username} onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br /><br />
          <label className='fw-bold ms-5'>
            Password <br />
            <input type="password" className='ms-5' value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br /><br />
          <div id='login-btn'>
          <button onClick={handleLogin} >Login</button>
          <ToastContainer />
          </div>
        </div>
    </div>
    <Footer/>
    </>
      )}
    </div>
  );
};

export default LoginForm;
