import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { SignupForm, LoginForm, PasswordResetForm ,LogoutButton} from "../signUpIn/useFront";
import Userfront from "@userfront/react";
import { useState } from 'react';
import image2 from '../../images/img (35).webp';
import Footerr from './Footer';
import { Navbar } from 'react-bootstrap';
import NavBar from './Navbar';
import image3 from '../../images/girl_lab1.jpg';
import { Link,useNavigate } from "react-router-dom";
import '../../css/Home.css';

import Container from 'react-bootstrap/Container' 

export default function NavigationBar() {
    Userfront.init("6bgm6jgb");
    const navigate = useNavigate();
    //console.log(Userfront.user)
    const userFrontuser = Userfront.user;
  return (
    <div>

<div>
    <div className=" bg-primary text-light ">
    <div className="row border-primary">
        <div className="col-md-5">
            <div className="row">
                <div className="col text-start"><i class="bi bi-telephone ps-3"></i>0112222778</div>
                <div className="col text-start"><i class="bi bi-envelope pe-1"></i>meditech@gmail.com</div>
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
    <div className="text-secondary fs-4 px-2"> <Link className='text-secondary text-decoration-none' to='/'>MediTech</Link> </div>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <div className="d-flex justify-content-end">
        {!Userfront.tokens.accessToken ? <div>
            <button className="btn btn-primary btn-sm rounded-0 rounded-start px-2"> <Link className="text-light text-decoration-none" to='/useLogin'> Login </Link> </button>
         <button className="btn btn-primary btn-sm rounded-0 rounded-end px-2"> <Link className="text-light text-decoration-none" to='/useSignUp'> SignUp </Link> </button>
        </div> : <div className="d-flex justify-content ">
       <div className=' ms-5'><LogoutButton /></div> 
            
            
                 <div className='text-center pt-1'>

                    <div className="dropdown">
                    <div className="dropdown-toggle nav-link text-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static">
                        {userFrontuser.name}
                    </div>
                    <ul className="dropdown-menu p-2 dropdown-menu-end dropdown-menu-lg-start" aria-labelledby="dropdownMenuButton1">
                        <li><Link className="dropdown-item drp" to="/account">Account</Link></li>
                        <li><Link className="dropdown-item drp" to="/reports">Reports</Link></li>
                        
                    </ul>
                    </div>
                 </div> 

            </div> } 
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
                <li><Link className="dropdown-item drp" to="/blogEdit">Create Blog</Link></li>
            </ul>
            </li>
{/* 
            <li className="nav-item dropdown mx-2">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                News & Events
            </a>
            <ul className="dropdown-menu p-2" aria-labelledby="navbarDropdownMenuLink3">
                <li><Link className="dropdown-item drp" to="/news">News</Link></li>
                <li><Link className="dropdown-item drp" href="/events">Events</Link></li>
            </ul>
            </li> */}

            <Link className="nav-link mx-2" to="/news" role="button">
                News
            </Link>
            <Link className="nav-link mx-2" to="/careers" role="button">
               Careers
            </Link>

            {/* <li className="nav-item dropdown mx-2">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About
            </a>
            <ul className="dropdown-menu p-2" aria-labelledby="navbarDropdownMenuLink4">
                <li><a className="dropdown-item drp" href="#">Action</a></li>
                <li><a className="dropdown-item drp" href="#">Another action</a></li>
                <li><a className="dropdown-item drp" href="#">Something else here</a></li>
            </ul>
            </li> */}
            <Link className="nav-link mx-2" to="/about" role="button">
                About
            </Link>
        </ul>
        </div>
    </div>
    </nav>

</div> 
    </div>
  )
}
