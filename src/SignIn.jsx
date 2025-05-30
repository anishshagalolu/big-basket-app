import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from './store';
import './SignIn.css';

function SignIn() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myFunc = (data) => {
    dispatch(loginUser(data));
    navigate('/Veg');
  };

  return (
    <div className="container">
      <h2>User Sign In</h2>
      <form onSubmit={handleSubmit(myFunc)}>
        <input
          type="text"
          placeholder="Username"
          {...register('username')}
         
        />
        <input  className='input'
          type="password"
          placeholder="Password"
          {...register('password')}
          
        />
        <button type="submit" className="button">
          Sign In
        </button>
      </form>
      <p className="text">
        New User? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}

export default SignIn;
