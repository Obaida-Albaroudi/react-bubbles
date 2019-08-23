import React, {useState } from "react";
import axios from "axios";




const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [state, setState] = useState({
    username: '',
    password: ''
  })

 
  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const login = e =>{
    e.preventDefault();
    axios.post('http://localhost:5000/api/login', state)
    .then(res =>{
      console.log("hello",res.data.payload)
      localStorage.setItem("token", res.data.payload)
      props.history.push("/BubblePages")
    })
    .catch (err => console.log(err.response))
  }

  return (
    <div>

      <form onSubmit={login}>

        <input type="text" name="username" value={state.username} onChange={handleChange}/>

        <input type="password" name="password" value={state.password} onChange={handleChange}/>

        <button>Log In</button>

      </form>

    </div>
  );
};

export default Login;
