import React,{useEffect} from 'react'
import Footerr from './Footer'
import NavigationBar from './NavigationBar'
import img from '../../images/chemistry.jpg'
import NavBar from './Navbar'
import Axios  from 'axios'
import { Link } from 'react-router-dom'


export default function Events() {


  return (
<div>
<NavigationBar/>

<div className='container  mt-5 p-4'>
<div className='text-secondary fs-1  '>Available Jobs With MediTech</div>


<div className=' bg-light p-4 mt-5 rounded'>
<div className="accordion accordion-flush container " id="accordionFlushExample">
  <div className="accordion-item rounded">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      In Charge – Laboratory
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      <h4>Job Description</h4>
      Dynamic candidate with Degree/Diploma or Professional Qualification in MLT. SLMC registration will be an added advantage. <br />
      An individual with more than 05 years of experience as a MLT along with sound technical, commercial acumen and leadership skills. <br /><br />
      <h4>Apply Job</h4>
If you are interested please send in your detailed CV along with names and contact details to: Head of MediTech Labs (PVT) LTD. No 258,Daniyester Mawatha,Kohuwala. or  Email: careers@meditech.gmail.com; For More Inquiries Tel: +94-112 789 589 

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      SENIOR MLT / MLT
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      <h4>Job Description</h4>
      The ideal candidate should have either a B.Sc. Degree in Biological Science with Biochemistry as a subject from a recognized university or a Diploma in Medical Laboratory Technology from a recognized university / Institute with more than 3 years of experience in reputed Laboratory. <br /><br />
      <h4>Desired Candidate Profile</h4>
      B.Sc. Degree in Biological Science with Biochemistry as a subject from a recognized university or a Diploma in Medical Laboratory Technology from a recognized university / Institute
Over 3 years of experience in reputed Laboratory<br /><br />
      <h4>Apply Job</h4>
If you are interested please send in your detailed CV along with names and contact details to: Head of MediTech Labs (PVT) LTD. No 258,Daniyester Mawatha,Kohuwala. or  Email: careers@meditech.gmail.com; For More Inquiries Tel: +94-112 789 589 

      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      Senior Laboratory Technologist
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      <h4>Job Description</h4>
      Supervise the Medical Laboratory Technologists in all departments and assist the Laboratory Director in the coordination of Laboratory activities.Provide accurate, timely and cost effective testing of patient samples to aid in the diagnostic and treatment of disease in compliance and harmony with the quality management system. <br /><br />
      <h4>Desired Candidate Profile</h4>
Bachelor of Science in Medical Laboratory Technology or Diploma in Medical Laboratory Technology
Minimum 5 years of experience in a recognized Laboratory / Healthcare institution in a similar position
With valid UAE MOH license0<br /><br />
      <h4>Apply Job</h4>
If you are interested please send in your detailed CV along with names and contact details to: Head of MediTech Labs (PVT) LTD. No 258,Daniyester Mawatha,Kohuwala. or  Email: careers@meditech.gmail.com; For More Inquiries Tel: +94-112 789 589 

      </div>
    </div>
  </div>
</div>
</div>
</div>
<Footerr></Footerr>
</div>
  )
}
