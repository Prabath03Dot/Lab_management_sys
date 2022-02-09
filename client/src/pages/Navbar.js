import { Link, useNavigate } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container' 
import '../css/Navabr.css';
import { useUserAuth } from "../Context/userAuthContext";
import { useState } from "react";
import { onAuthStateChanged,getAuth } from "firebase/auth";
import Button from 'react-bootstrap/Button'

const NavBar = () => {
    // const navigate = useNavigate();
    // const auth = getAuth();
    // const {user, logOut } = useUserAuth();
    
    // const handleLogout =  async () => {
    //     try{
    //         await logOut();
    //         navigate("/signup");
            
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
        {/* <Navbar.Brand> <Button variant="dark">Meditech Labs</Button></Navbar.Brand> */}
        <button className="btn btn-dark"><Link to="/" className="text-decoration-none text-light px-2"> Meditech Labs</Link></button>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <div className="d-flex">
        
            {/* {auth.currentUser? <button type="button" onClick={handleLogout} className="btn btn-secondary mx-2 border border-0">Log Out</button> : <button type="button" className="btn btn-secondary mx-2 border border-0"><Link className="text-light text-decoration-none" to="/login" >Log In
            </Link></button>
            } */}
            <button type="button" className="btn btn-secondary mx-2 border border-0"><Link className="text-light text-decoration-none" to="/login" >Log In
            </Link></button>
            
            {/* <form className="d-flex">
                <input className="form-control me-2 border-0" type="search" placeholder="Search" aria-label="Search" /> 
                {user && user.email}
                
                <button className="btn btn-outline-success border border-0" type="submit"><i class="bi bi-search"></i></button>
            </form> */}
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
        <ul className="navbar-nav mx-auto  ">

            <li className="nav-item dropdown mx-2">
            <a className="nav-link dropdown-toggle " href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Tests
            </a>
            <ul className="dropdown-menu p-2 " aria-labelledby="navbarDropdownMenuLink">
                <li><Link className="dropdown-item drp " to="/findtest">Find Test</Link></li>
                <li><Link className="dropdown-item drp" to="/appmnt">Make Appoitment</Link></li>
                <li><a className="dropdown-item drp" href="#">Bulk Test</a></li>
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
                <li><a className="dropdown-item drp" href="#">Action</a></li>
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