import React,{useEffect,useState} from 'react'
import Footerr from '../Imp/Footer'
import NavigationBar from '../Imp/NavigationBar'
import Axios  from 'axios'
import { Link,useParams,useNavigate} from 'react-router-dom'
import Userfront from "@userfront/react";

export default function Events() {
  const roleAdmin = Userfront.user.hasRole("admin");
  const [joblist, setjoblist] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    Axios.get("https://lab-sys.herokuapp.com/jobList")
    .then((response) => {
        setjoblist(response.data)
        // console.log(response.data)
    })
    
  }, [])

  
  const handleDelete = (id) => {
    alert("Are you shure want the delete?")
    Axios.delete(`https://lab-sys.herokuapp.com/deletejob/${id}`)
    .then(res => {
        // console.log(res.data)
        navigate('/careers')
    }).catch((error) => {
        console.log(error)
        })
}

  return (
<div>
<NavigationBar/>

<div className='container  mt-5 p-4'>
<div className='text-secondary fs-1  mb-5'>Job Description</div>

{!joblist ? <div>Loading...</div> : 
  joblist.filter(j => j._id === id).map(job => {
    return(
      <div className=' py-2 mt-1 rounded mb-3' key={job._id}>
      <h2 className='mb-5'>{job.jobTitle}</h2>
      <h3 className='fw-light mb-5'>  {job.jobContent} </h3>

      <div className='mt-5'> <h2>Apply Job</h2>
<div className='bg-light p-4 fw-lighter'> If you are interested please send in your detailed CV along with names and contact details to: Head of MediTech Labs (PVT) LTD. No 258,Daniyester Mawatha,Kohuwala. or  Email: careers@meditech.gmail.com; For More Inquiries Tel: +94-112 789 589 </div></div>
  <div>
       {roleAdmin ? <button onClick={() => handleDelete(id)}  className='btn btn-primary btn-sm mt-5  rounded-0 rounded-start'><Link className='text-decoration-none text-light' to='/removejob' >Close Job</Link></button> :
       <button disabled className='btn btn-primary btn-sm mt-5  rounded-0 rounded-start'>Close Job</button>} 
    
      {roleAdmin ? <button  className='btn btn-primary mt-5 btn-sm rounded-0 rounded-end'><Link className='text-decoration-none text-light' 
      to={`/Job/${job._id}/edit`}>Edit</Link></button> :
      <button disabled className='btn btn-primary  mt-5 btn-sm rounded-0 rounded-end'>Edit</button> }
      
  </div>
</div>
    )
  } )
}

</div>
<Footerr></Footerr>
</div>
  )
}



