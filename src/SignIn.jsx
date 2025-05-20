import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './store';
import styles from './SignIn.css'; // Import as module

function SignIn() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myFunc = (data) => {
    dispatch(loginUser(data));
    navigate('/Veg');
  };

  return (
    <div className={styles.container}>
      <h2>User Sign In</h2>
      <form onSubmit={handleSubmit(myFunc)}>
        <input
          type="text"
          placeholder="Username"
          {...register('username')}
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          {...register('password')}
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Sign In
        </button>
      </form>
      <p className={styles.text}>
        New User? <a href="SignUp" className={styles.link}>Sign Up</a>
      </p>
    </div>
  );
}

export default SignIn;
