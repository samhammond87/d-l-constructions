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
        email: userEmail,
        password: userPassword,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/sign_in",
        config
      );
      console.log(response);
  
    } catch (e) {
      console.error(e)
  
    }
  }

  const [timesheet, setTimesheet] = useState([]);

  const handleClick = () => {
    fetch("http://localhost:3000/api/timesheets")
      .then((response) => response.json())
      .then((data) => setTimesheet(data))
      .catch((err) => console.log(err))
  }

  return (
    <>
    <form >
      <label>Email:</label>
      <input type='email' name='email' value={userEmail} onChange={handleChange} />
      <label>Password:</label>
      <input type='password' name='password' value={userPassword} onChange={handleChange} />
      <button onClick={(e) => handleSubmit(e, userEmail, userPassword)}>Login</button>
    </form>
  
  <button onClick={handleClick}>Get Timesheets</button>
  {timesheet.map((timesheet, index) => {
  return (
    <ul key={index}>
      <li>Name: {timesheet.name}</li>
      <li>Date: {timesheet.date}</li>
      <li>Start Time: {timesheet.start_time}</li>
      <li>End Time: {timesheet.end_time}</li>
      <li>Total Hours: {timesheet.total_hours}</li>
      <li>Comments: {timesheet.comments}</li>
      {/* <li>Posted: {timesheet.created_at}</li> */}
    </ul>
    )
  })}
  </>
  )
};

export default LoginUser
