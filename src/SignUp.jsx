import './SignUp.css'; // Import the CSS file

function SignUp() {
  let { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const myFunc = (data) => {
    dispatch(registerUser(data));
    alert('Registration Successful!');
    navigate('/signin');
  };

  return (
    <div className="signup-container">
      <h2>Register Form</h2>
      <form onSubmit={handleSubmit(myFunc)}>
        <input type="text" placeholder="Username" {...register('username')} />
        <input type="password" placeholder="Password" {...register('password')} />
        <input type="email" placeholder="Email" {...register('email')} />
        <input type="number" placeholder="Mobile No" {...register('mobile')} />
        
        <div className="radio-group">
          <label>
            <input type="radio" value="Male" {...register('gender')} /> Male
          </label>
          <label>
            <input type="radio" value="Female" {...register('gender')} /> Female
          </label>
        </div>

        <select {...register('category')}>
          <option value="">Select Category</option>
          <option value="Veg">Veg</option>
          <option value="Non Veg">Non Veg</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
