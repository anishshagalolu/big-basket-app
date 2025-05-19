import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { registerUser } from './store'
import { useForm } from 'react-hook-form'

function SignUp() {
    let{register,handleSubmit}=useForm();
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const myFunc=(data)=>{
        dispatch(registerUser(data));
        alert('Registration Successful!');
        navigate('/SignIn');
    }
  return (
    <>
    <h2>Register Form</h2>
      <form onSubmit={handleSubmit(myFunc)}>
       Username: <input type='text' placeholder='Username' {...register('username')}/>
       Password: <input type='password' placeholder='Password' {...register('password')}/>
       Email: <input type='email' placeholder='Email' {...register('email')}/>
       Mobile No <input type='number' placeholder='MobileNo' {...register('mobile')}/><br></br>
        <input type='radio' {...register('gender')}/> Male
         <input type='radio'  {...register('gender')}/>Female<br></br>
         <select>
            <option >Select Category</option>
            <option  {...register('category')}> Veg</option>
            <option {...register('category')}>Non Veg</option>
         </select>
         <button type='submit'>Submit</button>

      </form>
    </>
  )
}

export default SignUp;
