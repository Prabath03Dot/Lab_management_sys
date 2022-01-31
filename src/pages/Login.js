import '../css/login.css';
import { Link,useNavigate } from "react-router-dom";
import { auth } from './Firebase/Firebase';
import { signInWithPopup, GoogleAuthProvider ,signOut} from "firebase/auth";
import { useState } from 'react';

const Login = () => {

    const [googleSignIn, setGoogleSignIn] = useState(true);

    const signUpWithGoogle = () => {
        
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((re)=>{
            // console.log(re);
            // const user = re.user;
            // console.log(user);  
            setGoogleSignIn(true);  
        })
        // .then(
        //     navigate("/admin")
        // ) 
        .catch((err)=>{
            //console.log(err);
        })

        
    }

    const signOutWithGoogle = () => {
        
        signOut(auth).then((re) => {
            // Sign-out successful.
            console.log("outeddddd");
            // setGoogleSignIn(false);
          }).catch((error) => {
            // An error happened.
          });
          setGoogleSignIn(false);
    }

    return ( 
        <div className="logc">
            <div className="container login-container mx-auto pt-5 pb-4">
            <Link className="text-light" to='/'><i class="bi bi-arrow-left"></i> Back to home</Link>
            <h2 className="text-center text-light mt-1 mb-5">Meditech Portal Login</h2>

            <div className="row container mx-auto">
                <div className="col-md-6 login-form-1 rounded-start">
                    <h3>User/Patient Login</h3>
                    <div className=" container my-auto p-5 mt-5 mr-0">
                        {/* <div className="form-group mb-4">
                            <input type="text" className="form-control" placeholder="Your Email" value="" />
                        </div>
                        <div className="form-group my-4">
                            <input type="password" className="form-control" placeholder="Your Password" value="" />
                        </div>
                        <div className="form-group my-4">
                            <input type="submit" className="btnSubmit" value="Login" />
                        </div> 
                         <div className="form-group mb-4">
                            <a href="#" className="ForgetPwd">Forget Password?</a>
                        </div> */}

                        
                        
                        {googleSignIn ? <button className="btn btn-primary align-items-center mx-auto p-2 ml-3 btn-lg" onClick={signOutWithGoogle}>Sign Out</button> : <button className="btn btn-lg btn-primary align-items-center mx-auto p-2" onClick={signUpWithGoogle}>Sign up with Google</button>   
                        }
                    </div>
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
                            <input type="submit" className="btnSubmit rounded-1" value="Login" />
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