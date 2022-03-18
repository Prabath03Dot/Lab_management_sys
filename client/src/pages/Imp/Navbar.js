import { Link, useNavigate } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container' 
import '../../css/Navabr.css';
import { useUserAuth } from "../../Context/userAuthContext";
import { useState } from "react";
import { onAuthStateChanged,getAuth } from "firebase/auth";
import Button from 'react-bootstrap/Button'
import { useAuth0 } from "@auth0/auth0-react";
import { SignupForm, LoginForm, PasswordResetForm ,LogoutButton} from "../signUpIn/useFront";
import Userfront from "@userfront/react";

const NavBar = () => {
    const userFrontuser = Userfront.user;
    const navigate = useNavigate();
    const auth = getAuth();
    // const {user, logOut } = useUserAuth();
    const { loginWithRedirect, isAuthenticated, logout, error, isLoading, user} = useAuth0();
    // Log out a user
//Userfront.logout();
    // const res = await Userfront.logout(...);
    // console.log(res);
    // const handleLogout =  async () => {
    //     try{
    //         await logOut();
    //         navigate('/');
            
    //     }catch(err){
    //         console.log(err.message)
    //     }
    // }

    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //       console.log("user signed In");
    //     } else {
    //         console.log("user signed Out");
    //     }
    //   });

    return (
        
<div>
    <div className=" bg-primary text-light ">
    <div className="row border-primary">
        <div className="col-md-5">
            <div className="row">
                <div className="col text-center"><i class="bi bi-telephone px-2"></i>0112222777</div>
                <div className="col"><i class="bi bi-envelope px-1"></i>meditech.cn@gmail.com</div>
            </div>
        </div>
        <div className="col-md-4 ms-auto text-sm-end px-5 text-center">
            <i className="bi bi-twitter px-2"></i>
            <i className="bi bi-instagram px-2"></i>
            <i className="bi bi-facebook px-2"></i>
        </div>
    </div>
    </div>


    <Navbar >
    <Container>
        <div className="text-secondary fs-4 px-2"> MediTech Labs</div>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <div className="d-flex">
        
         <button className="btn btn-primary btn-sm rounded-0 rounded-start px-2"> <Link className="text-light text-decoration-none" to='/useLogin'> Login </Link> </button>
         <button className="btn btn-primary btn-sm rounded-0 rounded-end px-2"> <Link className="text-light text-decoration-none" to='/useSignUp'> SignUp </Link> </button>
         {/* <LogoutButton /> */}
            {/* { error && <div>Authetication Error...</div> }
            { !error && isLoading && <button className="btn btn-primary" type="button" disabled><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>Authenticating...</button> }
            { !error && !isLoading && (
                <>
                   {!isAuthenticated && (
                <button className="btn btn-primary" type="button" onClick={() => loginWithRedirect()}>Log In</button>
            ) }
            {isAuthenticated && (
                <button className="btn btn-primary" type="button" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</button>
            ) } 
                </>
            ) } */}

            
            
            <form className="d-flex">
                {/* <input className="form-control me-2 border-0" type="search" placeholder="Search" aria-label="Search" />  */}
                 <div className='text-center pt-1'>
                 {/* {user && user.email} */}

                 {/* {isAuthenticated && (
                <div> {user.email} </div>
                ) }
                 */}
{/* {  Userfront.tokens.accessToken && userFrontuser.email} */}

                 </div> 
                
                {/* <button className="btn btn-outline-success border border-0" type="submit"><i class="bi bi-search"></i></button> */}
            </form>
        </div>
        
        </Navbar.Collapse>
    </Container>
    </Navbar>


    <nav className="navbar navbar-expand-lg navbar-light border">
    <div className="container-fluid">
        <Link className="navbar-brand" to="#"></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mx-auto">

            <li className="nav-item dropdown mx-2">
            <a className="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tests
            </a>
            <ul className="dropdown-menu p-2 " aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item drp " to="/findtest">Find Test</Link></li>
                <li><Link className="dropdown-item drp" to="/appmnt">Make Appoitment</Link></li>
                <li><Link className="dropdown-item drp" to="/bulk">Bulk Test</Link></li>
            </ul>
            </li>

            <li className="nav-item dropdown mx-2">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Ask Experts
            </a>
            <ul className="dropdown-menu p-2" aria-labelledby="navbarDropdownMenuLink1">
                <li><a className="dropdown-item drp" href="#">Action</a></li>
                <li><a className="dropdown-item drp" href="#">Another action</a></li>
                <li><a className="dropdown-item drp" href="#">Something else here</a></li>
            </ul>
            </li>

            <li className="nav-item dropdown mx-2">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Education
            </a>
            <ul className="dropdown-menu p-2" aria-labelledby="navbarDropdownMenuLink2">
                <li><Link className="dropdown-item drp" to="/blog">Blogs</Link></li>
                <li><a className="dropdown-item drp" href="#">Another action</a></li>
                <li><a className="dropdown-item drp" href="#">Something else here</a></li>
            </ul>
            </li>

            <li className="nav-item dropdown mx-2">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                News & Events
            </a>
            <ul className="dropdown-menu p-2" aria-labelledby="navbarDropdownMenuLink3">
                <li><a className="dropdown-item drp" href="#">Action</a></li>
                <li><a className="dropdown-item drp" href="#">Another action</a></li>
                <li><a className="dropdown-item drp" href="#">Something else here</a></li>
            </ul>
            </li>

            <li className="nav-item dropdown mx-2">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About
            </a>
            <ul className="dropdown-menu p-2" aria-labelledby="navbarDropdownMenuLink4">
                <li><a className="dropdown-item drp" href="#">Action</a></li>
                <li><a className="dropdown-item drp" href="#">Another action</a></li>
                <li><a className="dropdown-item drp" href="#">Something else here</a></li>
            </ul>
            </li>
        </ul>
        </div>
    </div>
    </nav>

</div>       
        );
}
 
export default NavBar;

{/* {
          if(user){
            return <button type="button" className="btn btn-secondary mx-2 border border-0"><Link className="text-light text-decoration-none" to="login" onClick={handleLogout} >
            </Link></button>
          } else{
            return <button>Login</button>
          }
        }
            <button type="button" className="btn btn-secondary mx-2 border border-0"><Link className="text-light text-decoration-none" to="login" onClick={handleLogout} >
            </Link></button> */}

            {/* {auth.currentUser? <button type="button" className="btn btn-secondary mx-2 border border-0"><Link className="text-light text-decoration-none" onClick={handleLogout} >Log Out
            </Link></button>: 
            <button type="button" className="btn btn-secondary mx-2 border border-0"><Link className="text-light text-decoration-none" to="/login" >Log In
            </Link></button>
            } */}