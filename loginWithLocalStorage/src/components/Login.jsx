import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();
        const loggedUser = JSON.parse(localStorage.getItem('user'));
        if (input.email === loggedUser.email && input.password === loggedUser.password) {
            localStorage.setItem('loggedIn', true);
            navigate('/');
        }
        else {
            alert('Wrong User or Passoword')
        }
    }

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={loginHandler}>
                <div>
                    <input
                        name='email'
                        value={input.email}
                        onChange={(e) =>
                            setInput({
                                ...input,
                                [e.target.name]: e.target.value
                            })}
                        type='email'
                        placeholder='Enter your email' />
                </div>
                <div>
                    <input
                        name='password'
                        value={input.password}
                        onChange={(e) =>
                            setInput({
                                ...input,
                                [e.target.name]: e.target.value
                            })}
                        type='password'
                        placeholder='Enter your password' />
                </div>
                <div><button>Login</button></div>
            </form>
        </div>
    )
}

export default Login