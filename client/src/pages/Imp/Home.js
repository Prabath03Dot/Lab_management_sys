/* eslint-disable no-lone-blocks */
import image from '../../images/bootstrap-themes.png';
import { useState } from 'react';
import image2 from '../../images/img (35).webp';
import Footerr from './Footer';
import NavBar from './Navbar';
import image3 from '../../images/girl_lab1.jpg';
import { Link } from "react-router-dom";
import '../../css/Home.css';
import svg1 from '../../images/flask.png';
import svg2 from '../../images/trophy.png';
import svg3 from '../../images/test-tube.png';
import svg4 from '../../images/microscope (1).png';
import '../../css/Home.css'
import CountUp from 'react-countup';
import NavigationBar from './NavigationBar';

const Home = () => {
  
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
            <button type="button" className="btn btn-primary  px-4 me-md-2"> <Link className='text-light text-decoration-none' to='/findtest'>Find Test</Link> </button>
            <button type="button" className="btn btn-outline-secondary  px-4"> <Link className=' text-decoration-none' to='/appmnt' id='make'> Make An Appointment</Link></button>
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
        <h2 className="pb-4 border-bottom">Our Valuable Services</h2>
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
        <h2 className="pb-4 border-bottom">Our Numbers</h2>

        <div className="card-group  text-center p-3">
        <div className="card ">
            <div className="card-body">
                <div className="card-title">
                    <img src={svg4} className="card-img-top w-50" alt="..."/>
                </div>
                <h1 className="card-title py-2 fw-bold "> <CountUp  delay={2} suffix="+" end={4000} /></h1>
                <p className="card-text">Customers</p>
            </div>
        </div>
        <div className="card ">
            <div className="card-body">
            <div className="card-title">
            <img src={svg1} className="card-img-top w-50" alt="..."/>
            </div>
            <h1 className="card-title py-2 fw-bold"><CountUp  delay={2} suffix="+" end={1000} /></h1>
            <p className="card-text">Lab Tests</p>
            </div>
        </div>
        <div className="card ">
            <div className="card-body">
            <div className="card-title">
            <img src={svg3} className="card-img-top w-50" alt="..."/>
            </div>
            <h1 className="card-title py-2 fw-bold"><CountUp  delay={2} suffix="+" end={50} /></h1>
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


    {/* News & Events */}
    <div className="container py-2">
    <h2 className="py-4 border-bottom ">Customer Testimonial</h2>
    
        <div id="carouselExampleCaptions" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    </div>
    <div className="carousel-inner py-2 ">
        <div className="carousel-item active">

        <div className="card-group mx-5">
        <div className="card">
            <img src='https://www.seekpng.com/png/small/202-2024695_how-to-set-use-profile-icon-clipart.png' className="card-img-top " alt='https://www.seekpng.com/png/small/202-2024695_how-to-set-use-profile-icon-clipart.png' />
            <div className="card-body ">
            
            <p className="card-text mt-5 p-3">“Very friendly and helpful. Turnaround time exceeded expectations. Stayed in contact before and after analysis. The report was just what we wanted.”</p>
            </div>
            <div className="card-footer text-end py-4">
      <small className="text-muted text-end fst-italic"> - Ajith Kumara</small>
        </div>
        </div>
        <div className="card">
            <img src='https://www.seekpng.com/png/small/202-2024695_how-to-set-use-profile-icon-clipart.png' className="card-img-top" alt={image2}/>
            <div className="card-body">
            
            <p className="card-text mt-5 p-3">“ I greatly appreciate the communication on the process, what we needed to do in terms of providing samples, what to expect. MediTech Labs provided what we needed in terms of certification that we can use with our customers.”</p>
            </div>
            <div className="card-footer text-end py-4">
      <small className="text-muted text-end fst-italic"> - Rajitha Perera</small>
    </div>

        </div>
        <div className="card">
            <img src='https://www.seekpng.com/png/small/202-2024695_how-to-set-use-profile-icon-clipart.png' className="card-img-top" alt={image2}/>
            <div className="card-body">
            <p className="card-text mt-5 p-3">“Provides an excellent customer service that I saw in my life regarding laboratory services.”</p>
             </div>
             <div className="card-footer text-end py-4">
      <small className="text-muted text-end fst-italic"> - Nipuna Fernando</small>
    </div>
        </div>
        </div>
        
        </div>
        <div className="carousel-item">

        <div className=" card-group mx-5">
        <div className="card">
            <img src='https://www.seekpng.com/png/small/202-2024695_how-to-set-use-profile-icon-clipart.png' className="card-img-top" alt={image2}/>
            <div className="card-body ">
            
            <p className="card-text mt-5 p-3">“Supportive staff and has most of the common laboratory services including blood and urine tests.”</p>
            </div>
            <div className="card-footer text-end py-4">
      <small className="text-muted text-end fst-italic"> - Supun Gamge</small>
    </div>
        </div>

        <div className="card">
            <img src='https://www.seekpng.com/png/small/202-2024695_how-to-set-use-profile-icon-clipart.png' className="card-img-top" alt={image2}/>
            <div className="card-body">
            
            <p className="card-text mt-5 p-3">“Amazing experience. Reliable, convenient and fast.”</p>
            </div>
            <div className="card-footer text-end py-4">
      <small className="text-muted text-end fst-italic"> - Ravi Jacob</small>
    </div>


        </div>

        <div className="card">
            <img src='https://www.seekpng.com/png/small/202-2024695_how-to-set-use-profile-icon-clipart.png' className="card-img-top" alt={image2}/>
            <div className="card-body ">
            
            <p className="card-text  mt-5 p-3">“Place that provides better results & quick service.”</p>
            </div>
            <div className="card-footer text-end py-4">
      <small className="text-muted text-end fst-italic"> - Vinayamurthy R.</small>
    </div>
        </div>
        </div>

        </div>
 
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span> */}
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        {/* <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span> */}
    </button>
        </div>
    </div>


    {/* Footer */}
    <Footerr></Footerr>


</div>
     );
}
 
export default Home;

