import React,{ useState} from 'react'
import Footerr from '../Imp/Footer'
import NavigationBar from '../Imp/NavigationBar'
import { Link} from 'react-router-dom'
import axios from 'axios';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function CreateJob() {
    const [jobTitle, setJobTitle] = useState();
    const [jobContent, setjobContent] = useState();

    const handleSubmit =  (e) => {
        e.preventDefault();

        try{
             axios.post('https://lab-sys.herokuapp.com/JobCreate',{
                jobTitle,
                jobContent,
               
            } )
            .then(res => {

              toast.success('Job Created', {
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
    
    <div className='container  mt-5 p-4'>
    <div className='text-secondary fs-1 '>Create Job</div>
    
    
    <div className='mt-5'>

    <form  className="mx-auto justify-items-center align-items-center"  onSubmit={handleSubmit} id="payment-form">
            <fieldset className="FormGroup">
            <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Job Title</label>
                  <div className="col-sm-10">
                    <input type="text" onChange={e => setJobTitle(e.target.value)} required className="form-control" id="inputEmail3" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Job Content</label>
                  <div className="col-sm-10">
                  <textarea name="textarea"  className="form-control" required onChange={e => setjobContent(e.target.value)} id="inputUserId3" cols="30" rows="10"></textarea>
                  </div>
                </div>
                <div  className="row mb-3"><button type='submit' className='btn btn-primary mt-5'><Link className='text-decoration-none text-light' to='/editjobs'>Post Job</Link></button></div>
            </fieldset>
        </form>
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
