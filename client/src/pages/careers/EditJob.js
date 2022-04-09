import React,{useEffect, useState} from 'react'
import Footerr from '../Imp/Footer'
import NavigationBar from '../Imp/NavigationBar'
import { Link , useParams} from 'react-router-dom'
import axios from 'axios';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function EditJob() {
    const [jobTitle, setJobTitle] = useState();
    const [jobContent, setjobContent] = useState();

    const { id } = useParams();
    //console.log(id);

  useEffect(() => {
        axios.get(`http://localhost:5000/${id}`)
        .then((response) => {

             console.log(response.data);
             setJobTitle(response.data.jobTitle);
             setjobContent(response.data.jobContent);
        })
        
      }, [id])

    const handleSubmit =  (e) => {
        e.preventDefault();

        try{
               axios.post(`http://localhost:5000/editJob/${id}`,{
                jobTitle,
                jobContent
            } )
            .then(res => {
              console.log(res);
              toast.success('Job Updated', {
                position: "bottom-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
           
            }).catch((error) => {
              if (error.response) {
                console.log(error.response);
                console.log("server responded::JobRoute");
              } else if (error.request) {
                console.log("network error ::JobRoute");
              } else {
                console.log(error);
              }
            })
          }catch(error){
            console.log(error);
          }
    }

  return (
    <div>
    <NavigationBar/>
    {/* {id} */}
    <div className='container  mt-5 p-4'>
    <div className='text-secondary fs-1'>Update Job</div>
    <div className=' mt-5 '>
  
      <form onSubmit={handleSubmit} >
            <div  className="mx-auto justify-items-center align-items-center"  id="payment-form">
            <fieldset className="FormGroup">
            <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Job Title</label>
                  <div className="col-sm-10">
                    <input type="text" value={jobTitle} onChange={e => setJobTitle(e.target.value)} required className="form-control" id="inputEmail3" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Job Content</label>
                  <div className="col-sm-10">
                  <textarea name="textarea" value={jobContent}  className="form-control" required onChange={e => setjobContent(e.target.value)} id="inputUserId3" cols="30" rows="10"></textarea>
                  </div>
                </div>
                <div  className="row mb-3"><button type='submit' className='btn btn-primary mt-5'>Update Job</button></div>
            </fieldset>
        </div>
 
      </form>

       <div className=' mt-5 ms-5'>
        <button className='btn btn-primary btn-sm ms-3' ><Link className='text-light text-decoration-none' to='/careers'> Back to Careers</Link></button>
    </div>

    </div>
    

    </div>

<ToastContainer 
  position="bottom-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>
    <Footerr></Footerr>
    </div>
  )
}
