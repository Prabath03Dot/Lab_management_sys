import React from 'react'
import { Link,Navigate,useNavigate } from "react-router-dom";
import '../../css/signUp.css';
import { useState,useRef } from "react";
import { useContext } from "react";
import { userAuthContextProvider, useUserAuth } from "../../Context/userAuthContext";

export default function UserReset() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {signUp} = useUserAuth();
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate();
    const emailRef = useRef()
    const { resetPassword } = useUserAuth();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            setMessage("")
            setError("")
            //setLoading(true)
            console.log('wait')
            await resetPassword(emailRef.current.value)
            console.log('done')
            setMessage("Check your inbox for further instructions")
        } catch (error) {
            console.log(error)
            setError("Failed to reset password")
        }
    }
    
  return (
    <div  className="logc pb-5">
    <div className="container ">
    <Link className="text-light" to='/'><i className="bi bi-arrow-left"></i> Back to home</Link>

        <div className="container d-flex justify-content-center align-content-center fg pb-5">

            <div className="container pb-1 bg-light w-50 pb-1 rounded border-0">
                    { error && <div className="alert alert-danger" role="alert">{error}</div>}
                    { message && <div className="alert alert-success" role="alert">{message}</div>}
                    <h2 className="text-center mt-2 pt-4">Meditech User Reset</h2>
                    <form onClick={handleSubmit} className="py-4 mx-auto px-2">
                        <div className="form-group mb-4">
                            <input type="text" className="form-control " placeholder="Your Email"  
                                ref={emailRef}
                            />
                        </div>
                        {/* <div className="form-group my-4">
                            <input type="password" className="form-control " placeholder="Your Password" value={password}
                                onChange={(e)=> setPassword(e.target.value) }
                            />
                        </div> */}
                        <div className="form-group my-4">
                            <input type="submit" className="btnSubmit btn-primary rounded-1" value="Reset Password" />
                        </div>
                        <div className="form-group my-4">
                            <Link className="pt-3 " to='/login'>Have an account?</Link>
                        </div>
                    </form>
   
            </div>
        </div>
    </div>
    </div>
  )
}
