import React, {useState} from 'react';
import axios from 'axios';

const LoginUser = () => {
  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserPassword] = useState('')

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      setUserEmail(e.target.value)
    }

    if (e.target.name === 'password') {
      setUserPassword(e.target.value)
    }
  }

  const handleSubmit = async (e, userEmail, userPassword) => {
    e.preventDefault()
    // console.log(userEmail, userPassword)
    const config = {
      auth: {
        email: "basic@test.com",
        password: "password",
      },
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/sign_up",
        config
      );
      console.log(response);
  
    } catch (e) {
      console.error(e)
  
    }
  }

  // function handleChange(event) {
	// 	setFormState({
	// 		...formState,
	// 		[event.target.name]: event.target.value
	// 	})
	// }

	// function handleSubmit(event) {
	// 	event.preventDefault()
	// 	signIn(formState)
	// 	.then(({username,jwt}) => {
	// 		console.log(username, jwt);
	// 		dispatch({type: 'setLoggedInUser', data: username})
	// 		dispatch({type: 'setToken', data: jwt})
	// 		history.push('/')
	// 	})
  //   .catch((error) => console.log(error))

  



  return (
    <form >
      <label>Email:</label>
      <input type='email' name='email' value={userEmail} onChange={handleChange} />
      <label>Password:</label>
      <input type='password' name='password' value={userPassword} onChange={handleChange} />
      <button onClick={handleSubmit}>Login</button>
    </form>
  )
};

export default LoginUser
