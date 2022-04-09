import React,{useEffect,useState} from 'react'
import Footerr from '../Imp/Footer'
import NavigationBar from '../Imp/NavigationBar'
import img from '../../images/chemistry.jpg'
import Axios  from 'axios'
import { Link } from 'react-router-dom'


export default function JobRemove() {
  const [joblist, setjoblist] = useState();

  useEffect(() => {
    Axios.get("http://localhost:5000/jobList")
    .then((response) => {
        setjoblist(response.data)
        console.log(response.data)
    })
    
  }, [])

  const click = () => {
      
  }


  return (
<div>
<NavigationBar/>

<div className='container  mt-5 p-4'>
<div className='text-secondary fs-1  mb-5'>Remove Job</div>

{joblist && 
  joblist.map(job => {
    return(
      <div className=' px-2 py-2 mt-1 rounded' onClick={click} key={job._id}>
<div className="accordion accordion-flush container" id="accordionFlushExample">
  <div className="accordion-item rounded">
    <h2 className="accordion-header" id="flush-headingOne">
      <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      {job.jobTitle}
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">
      <h4>Job Description</h4>
      {job.jobContent} <br /><br />
    

      </div>
    </div>
  </div>
</div>
</div>
    )
  } )
}
 <div className='p-3'> <h4>Apply Job</h4>
<div className='bg-light p-4'> If you are interested please send in your detailed CV along with names and contact details to: Head of MediTech Labs (PVT) LTD. No 258,Daniyester Mawatha,Kohuwala. or  Email: careers@meditech.gmail.com; For More Inquiries Tel: +94-112 789 589 </div></div>
  <div>
      <button className='btn btn-primary mt-5 rounded-start'><Link className='text-decoration-none text-light' to='/editjobs'>Close Job</Link></button>
      <button className='btn btn-primary mt-5 rounded-end'><Link className='text-decoration-none text-light' to='/createjobs'>Post Job</Link></button>
  </div>
</div>
<Footerr></Footerr>
</div>
  )
}



