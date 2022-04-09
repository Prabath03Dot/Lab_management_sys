import React,{useEffect,useState} from 'react'
import Footerr from './Footer'
import NavigationBar from './NavigationBar'
import Axios  from 'axios'
import { Link } from 'react-router-dom'
import Userfront from "@userfront/react";


export default function Events() {
  const roleAdmin = Userfront.user.hasRole("admin");

  const [joblist, setjoblist] = useState();

  useEffect(() => {
    Axios.get("http://localhost:5000/jobList")
    .then((response) => {
        setjoblist(response.data)
        console.log(response.data)
    })
    
  }, [])


  return (
<div>
<NavigationBar/>

<div className='container  mt-5 p-4'>
<div className='text-secondary fs-1  mb-5'>Available Jobs With MediTech</div>

{!joblist? <div>Loading...</div> : joblist.map(job => {
    return(
      <div className=' px-2 py-2 mt-1 rounded' key={job._id}>
      <h4> <Link to={`/Job/${job._id}`}>{job.jobTitle}</Link> </h4>
      

</div>
    )
  } )
}
  <div>
      {roleAdmin ? <button className='btn btn-sm btn-primary mt-5 rounded-end'><Link className='text-decoration-none text-light' to='/createjobs'>Create Job</Link></button>: <button disabled className='btn btn-sm btn-primary mt-5 rounded-end'><Link className='text-decoration-none text-light' to='/createjobs'>Create Job</Link></button>}
      
  </div>
</div>
<Footerr></Footerr>
</div>
  )
}

