import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container' 
import '../../css/Navabr.css';
import {LogoutButton} from "../signUpIn/useFront";
import Userfront from "@userfront/react";

const NavBar = () => {
    const userFrontuser = Userfront.user;


    return (
        
<div>
    <div className=" bg-primary text-light ">
    <div className="row border-primary">
        <div className="col-md-5">
            <div className="row">
            <div className="col text-start ms-2"><i class="bi bi-telephone ps-5 ms-5"></i>0112222778</div>
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
    <Container >
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
                    <div className="dropdown-toggle nav-link text-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {userFrontuser.email}
                    </div>
                    <ul className="dropdown-menu p-2" aria-labelledby="dropdownMenuButton1">
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
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Education
            </Link>
            <ul className="dropdown-menu p-2" aria-labelledby="navbarDropdownMenuLink2">
                <li><Link className="dropdown-item drp" to="/blog">Blogs</Link></li>
                <li><Link className="dropdown-item drp" to="/blogEdit">Create Blog</Link></li>
            </ul>
            </li>


            <Link className="nav-link mx-2" to="/news" role="button">
               News
            </Link>
            <Link className="nav-link mx-2" to="/careers" role="button">
               Careers
            </Link>

            <Link className="nav-link mx-2" to="/about" role="button">
                About
            </Link>
        </ul>
        </div>
    </div>
    </nav>

</div>       
        );
}
 
export default NavBar;

