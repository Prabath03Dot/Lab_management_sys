import { Link,Navigate,useNavigate } from "react-router-dom";
import '../css/signUp.css';
import { useState } from "react";
import { useContext } from "react";
import { userAuthContextProvider, useUserAuth } from "../Context/userAuthContext";

// top-50 start-50 translate-middle
const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {signUp} = useUserAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        try{
            await signUp(email, password);
            navigate("/home");
            
        }
        catch (err){
            setError(err.message);
        }
    }

    return (
        <div  className="logc pb-5">
        <div className="container ">
        <Link className="text-light" to='/'><i className="bi bi-arrow-left"></i> Back to home</Link>

            <div className="container d-flex justify-content-center align-content-center fg pb-5">

                <div className="container pb-1 bg-light w-50 pb-1 rounded border-0">
                        { error && <div className="alert alert-danger" role="alert">{error}</div>}
                        <h2 className="text-center mt-2 pt-4">Meditech User Registration</h2>
                        <form onClick={handleSubmit} className="py-4 mx-auto px-2">
                            <div className="form-group mb-4">
                                <input type="text" className="form-control w-100" placeholder="Your Email" value={email} 
                                    onChange={(e)=> setEmail(e.target.value) }
                                />
                            </div>
                            <div className="form-group my-4">
                                <input type="password" className="form-control" placeholder="Your Password" value={password}
                                    onChange={(e)=> setPassword(e.target.value) }
                                />
                            </div>
                            <div className="form-group my-4">
                                <input type="submit" className="btnSubmit btn-primary rounded-1" value="Sign Up" />
                            </div>
                            <div className="form-group my-4">
                                <Link className="pt-3 " to='/login'>Have an account?</Link>
                            </div>
                        </form>
       
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default SignUp;

