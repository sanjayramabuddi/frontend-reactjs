import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(input));
        navigate('/login');
    }

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <input
                        name='name'
                        value={input.name}
                        onChange={(e) =>
                            setInput({
                                ...input,
                                [e.target.name]: e.target.value
                            })}
                        type='text'
                        placeholder='Enter your name' />
                </div>
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
                <div><button>Register</button></div>
            </form>
        </div>
    )
}

export default Register