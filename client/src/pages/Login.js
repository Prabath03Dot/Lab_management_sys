import '../css/login.css';
import { Link,useNavigate } from "react-router-dom";
import { auth } from './Firebase/Firebase';
import { signInWithPopup, GoogleAuthProvider ,signOut} from "firebase/auth";
import { useState } from 'react';
import { userAuthContextProvider, useUserAuth } from "../Context/userAuthContext";
import firebase from "firebase/app";

const Login = () => {

    // const [googleSignIn, setGoogleSignIn] = useState(true);

    // const signUpWithGoogle = () => {
        
    //     const provider = new GoogleAuthProvider();
    //     signInWithPopup(auth, provider)
    //     .then((re)=>{
    //         // console.log(re);
    //         const user = re.user;
    //         // console.log(user);  
    //         setGoogleSignIn(true);  
    //     })
    //     // .then(
    //     //     navigate("/admin")
    //     // ) 
    //     .catch((err)=>{
    //         //console.log(err);
    //     })

        
    // }

    // const signOutWithGoogle = () => {
        
    //     signOut(auth).then((re) => {
    //         // Sign-out successful.
    //         console.log("outeddddd");
    //         // setGoogleSignIn(false);
    //       }).catch((error) => {
    //         // An error happened.
    //       });
    //       setGoogleSignIn(false);
    // }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {logIn} = useUserAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        setError("");
        try{
            await logIn(email, password);
            navigate("/home");
        }
        catch (err){
            setError(err.message);
        }
    }





    return ( 
        <div className="logc ">
            <div className="container login-container mx-auto pt-5 pb-4">
            <Link className="text-light" to='/'><i class="bi bi-arrow-left"></i> Back to home</Link>
            <h2 className="text-center text-light mt-1 mb-5">Meditech Portal Login</h2>

            <div className="row container mx-auto">
                <div className="col-md-6 login-form-1 rounded-start">
                    <h3 className="text-light">User/Patient Login</h3>
                    { error && <div className="alert alert-danger" role="alert">{error}</div>}


                    <form onSubmit={handleSubmit}>
                        <div className="form-group mb-4">
                            <input type="text" className="form-control" placeholder="Your Email" value={email} 
                                onChange={(e)=> setEmail(e.target.value) }
                            />
                        </div>
                        <div className="form-group my-4">
                            <input type="password" className="form-control" placeholder="Your Password" 
                            value={password} onChange={(e)=> setPassword(e.target.value) }/>
                        </div>
                        <div className="form-group my-4">
                            <input type="submit" className="btnSubmit rounded-1" value="Login" />
                        </div>
                        <div className="form-group">

                            <Link className="text-light" to="/signup">Don't have an account?</Link>
                        </div>
                    </form>
                    
                        {/* {googleSignIn ? <button className="btn btn-primary align-items-center mx-auto p-2 ml-3 btn-lg" onClick={signOutWithGoogle}>Sign Out</button> : <button className="btn btn-lg btn-primary align-items-center mx-auto p-2" onClick={signUpWithGoogle}>Sign up with Google</button>   
                        } */}
                </div>
                <div className="col-md-6 login-form-2 rounded-end bg-light">
                    <h2 className="text-center text-dark">Expert Login</h2>
                    <form>
                        <div className="form-group mb-4">
                            <input type="text" className="form-control" placeholder="Your Email" value="" />
                        </div>
                        <div className="form-group my-4">
                            <input type="password" className="form-control" placeholder="Your Password" value="" />
                        </div>
                        <div className="form-group my-4">
                            <input type="submit" className="btnSubmit btn-primary rounded-1" value="Login" />
                        </div>
                        <div className="form-group">

                            <a href="#" className="ForgetPwd mb-4" value="Login">Forget Password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Login;