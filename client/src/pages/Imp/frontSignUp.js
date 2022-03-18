import React, { useState } from 'react'
import Userfront from "@userfront/react";

// Initialize Userfront Core JS
Userfront.init("demo1234");

export default function frontSignUp() {
    const [state, setState] = useState({
        email: "",
        accountName: "",
        password: "",
        passwordVerify: "",
        alertMessage: ""
    });
    const [alertMessage, setalertMessage] = useState();

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setAlertMessage = this.setAlertMessage.bind(this);

      // Whenever an input changes value, change the corresponding state variable
  const handleInputChange = (e) => {
    e.preventDefault();
    const target = e.target;
    setState({
      [target.name]: target.value
    });
  };

    // Handle the form submission by calling Userfront.signup()
const handleSubmit = (event) => {
        event.preventDefault();
        // Reset the alert to empty
        setAlertMessage();
        // Verify that the passwords match
        // if (state.password !== this.state.passwordVerify) {
        //   return this.setAlertMessage('Passwords must match');
        // }

        // Call Userfront.signup()
        Userfront.signup({
          method: "password",
          email: state.email,
          password: state.password,
          data: {
            accountName: state.accountName
          }
        }).catch((error) => {
          setAlertMessage(error.message);
        });
      }
    
      setAlertMessage(message) {
        setState({ alertMessage: message });
      }

      
    
  return (
<div>
<div>
        <Alert message={state.alertMessage} />
        {/* {if (!message) return ""
    return <div id="alert">{message}</div>} */}
    
        <form onSubmit={handleSubmit}>
          <label>
            Email address
            <input
              name="email"
              type="email"
              value={state.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Account name (custom field)
            <input
              name="accountName"
              type="text"
              value={state.accountName}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              value={state.password}
              onChange={handleInputChange}
            />
          </label>
          {/* <label>
            Verify password
            <input
              name="passwordVerify"
              type="password"
              value={state.passwordVerify}
              onChange={handleInputChange}
            />
          </label> */}
          <button type="submit">Sign up</button>
        </form>

      </div>
</div>
  )
}
