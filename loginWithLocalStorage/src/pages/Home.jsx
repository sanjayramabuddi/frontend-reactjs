import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const userName = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem('loggedIn');
        navigate('/login');
    }
  return (
    <div>
    <h2>HomePage</h2>
    <p>Welcome - {userName.name}</p>
    <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default Home