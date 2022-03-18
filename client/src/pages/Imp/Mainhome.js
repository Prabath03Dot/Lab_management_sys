import { useState } from 'react';
import image2 from '../../images/img (35).webp';
import Footerr from './Footer';
import { Navbar } from 'react-bootstrap';
import NavBar from './Navbar';
import image3 from '../../images/girl_lab1.jpg';
import { Link,useNavigate } from "react-router-dom";
import '../../css/Home.css';
import svg1 from '../../images/flask.png';
import svg2 from '../../images/trophy.png';
import svg3 from '../../images/test-tube.png';
import svg4 from '../../images/microscope (1).png';
import { useUserAuth } from '../../Context/userAuthContext';
import { onAuthStateChanged,getAuth } from "firebase/auth";
import Container from 'react-bootstrap/Container' 
import { useAuth0 } from "@auth0/auth0-react";
import { SignupForm, LoginForm, PasswordResetForm ,LogoutButton} from "../signUpIn/useFront";
import Userfront from "@userfront/react";
import NavigationBar from './NavigationBar';

const MainHome = () => {
    Userfront.init("6bgm6jgb");
    const navigate = useNavigate();
    const userFrontuser = Userfront.user;
    // console.log(Userfront.tokens.accessToken);
    // if(userFrontuser.email === 'admin@example.com' || Userfront.user.hasRole("admin")){
    //     console.log('fsfs');
    //     navigate('/appmnt')
    //     //Userfront.redirectIfLoggedIn('http://localhost:3000/appmnt');
    // }
    //console.log(Userfront.user.hasRole("admin"));

    // //Example with verified access token
    // var roles = verifiedAccessToken.authorization["6bgm6jgb"].roles;

    // if (roles.includes["admin"]) {
    // console.log(roles.includes["admin"]);
    // } else {
    // // Return 401 error
    // }

    // const auth = getAuth();
    // // const {user, logOut } = useUserAuth();
    // const { loginWithRedirect, isAuthenticated, logout, error, isLoading, user} = useAuth0();

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
    
    {/* Navigatio Bar */}
    <NavigationBar/>

    {/* 2nd NavBar */}
    <div className="container col-xxl-8 px-4 py-5">
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
        <img src={image3} className="d-block mx-lg-auto img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3">" We depends on the Quality "</h1>
        <p className="lead">With a fully equipped modern laboratory, and a team of staff working round the clock to provide high-quality laboratory investigations is available at Meditech laboratory. Recently our laboratory services have extended in such a way that the patient does not have to visit the hospital, which that lab service bring to your doorsteps.</p>
        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" className="btn btn-primary  px-4 me-md-2">Find Test</button>
            <button type="button" className="btn btn-outline-secondary  px-4">Make an appointment</button>
        </div>
        </div>
    </div>
    </div>

    {/* Alert */}
    <div className="alert alert-primary alert-dismissible fade show container my-1" role="alert">
        <div className="p-2">Advice for the public: <span><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public">Coronavirus disease (COVID-19)</a> </span></div> 
        <div className="p-2">Get More Updates about: <span><a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019">Coronavirus (COVID-19)</a></span> </div>
        <div className="p-2">Get More Updates about Coronavirus (COVID-19): <span><a href="https://covid19.trackvaccines.org/country/sri-lanka/">Vaccine  Sri Lanka</a></span> </div>
        
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>

    {/* Services */}
    <div className="container px-3 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom">Our Valuable Services</h2>
        <div>
            <div className="row text-light py-2">
                <div className="col-sm d-flex align-items-center py-2">
                    <div className="container ct1 rounded p-3 "> 
                        <h5 className=" mb-0 text-center">Chemical Pathology</h5>
                    </div> 
                </div>
                <div className="col-sm d-flex align-items-center py-2">
                    <div className="container ct2 rounded p-3 ">
                        <h5 className=" mb-0 text-center">Haematology </h5>
                    </div> 
                </div>
                <div className="col-sm d-flex align-items-center py-2">
                    <div className="container ct3 rounded p-3 ">
                    <h5 className=" mb-0 text-center">Flow cytometry</h5>
                    </div> 
                </div>
            </div>

            <div className="row text-light">
                <div className="col-sm d-flex align-items-center py-2">
                    <div className="container ct4 rounded p-3 ">
                    <h5 className=" mb-0 text-center">Histopathology</h5>
                    </div> 
                </div>
                <div className="col-sm d-flex align-items-center py-2">
                    <div className="container ct5 rounded p-3 ">
                    <h5 className=" mb-0 text-center">Microbiology</h5>
                    </div> 
                </div>
                <div className="col-sm d-flex align-items-center py-2">
                    <div className="container ct6 rounded p-3 ">
                    <h5 className=" mb-0 text-center">Cytogenetics</h5>
                    </div> 
                </div>
            </div>
            
        </div>        

    </div>


    {/* CountDown */}
    <div className="container px-4 py-3" id="featured-3">
        <h2 className="pb-2 border-bottom">Our Numbers</h2>

        <div className="card-group  text-center p-3">
        <div className="card ">
            <div className="card-body">
                <div className="card-title">
                    <img src={svg4} className="card-img-top w-50" alt="..."/>
                </div>
                <h1 className="card-title py-2 fw-bold ">4000+</h1>
                <p className="card-text">Customers</p>
            </div>
        </div>
        <div className="card ">
            <div className="card-body">
            <div className="card-title">
            <img src={svg1} className="card-img-top w-50" alt="..."/>
            </div>
            <h1 className="card-title py-2 fw-bold">1000+</h1>
            <p className="card-text">Lab Tests</p>
            </div>
        </div>
        <div className="card ">
            <div className="card-body">
            <div className="card-title">
            <img src={svg3} className="card-img-top w-50" alt="..."/>
            </div>
            <h1 className="card-title py-2 fw-bold">50+</h1>
            <p className="card-text">Members</p>
            </div>
        </div>
        <div className="card ">
            <div className="card-body">

            <div className="card-title">
            <img src={svg2} className="card-img-top w-50" alt="..."/>
            </div>
            <h1 className="card-title py-2 fw-bold">5</h1>
            <p className="card-text">Awards</p>
            </div>
        </div>
        </div>
  
    </div>

    {/* <hr className="pt-1 container my-2"></hr> */}



    {/* News & Events */}
    <div className="container py-2">
    <h2 className="pb-2 border-bottom ">News & Events</h2>
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner py-2">
        <div className="carousel-item active">
        <img src={image2} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block text-start">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
        </div>
        </div>
        <div className="carousel-item">
        <img src={image2} className="d-block w-100" alt="..." />
        <div className="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
        </div>
        </div>
        <div className="carousel-item">
        <img src={image2} className="d-block w-100" alt="..."/>
        <div className="carousel-caption d-none d-md-block text-end">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
        </div>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
        </div>
    </div>


    {/* Footer */}
    <Footerr></Footerr>


</div>
     );
}
 
export default MainHome;
