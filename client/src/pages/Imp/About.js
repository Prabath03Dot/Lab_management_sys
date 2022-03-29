import React, { useRef,useState }  from 'react'
import Footerr from './Footer'
import NavigationBar from './NavigationBar'
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function About() {
    const form = useRef();
const navigate =  useNavigate();
const [sending, setSending] = useState(false);
const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
   setSending(true);setLoading(true);
    emailjs.sendForm('service_i2jxyg8', 'template_5s6w4lo', form.current, 'MPfH8EsLBJowtUSyz')
      .then((result) => {
          toast.success('Message Sent', {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
            
            
      }, (error) => {
          console.log(error.text);
      }).then(
          navigate('/about')
      );
      

  };

  
  init("MPfH8EsLBJowtUSyz");

  return (
<div>

<NavigationBar/>

<div className='container mt-5 mb-4 p-4'>
    <div className='fs-1  text-secondary'>About MediTech</div>
    <div>
    <div className='fs-3 mt-5 bg-light bg-gradient py-2 px-3  rounded'>The best care. Humanly possible</div>
    <p className='fs-5 text-secondary mt-3 p-2'> 
        MediTech develops to simplify and enhance lab physicians interactions with patients. We make technologies that encourage human connection, instead of getting in the way.A partnership with MediTech can open up new possibilities for transformational change at your organization. Want to improve your bottom line, physician satisfaction, quality and safety? We will help you do it.
    </p> 

    <div className='fs-3 mt-5 bg-light bg-gradient py-2 px-3  rounded'>Innovation is our mission</div>
    <p className='fs-5 text-secondary mt-3 p-2'> 
    MediTech wants to help build a world where every patient can access their health information and participate in their own care. We think every healthcare organization can serve their community quicker and more safely if they have instant access to records, knowledge, and data.

To that end, we are empowering healthcare organizations large and small with better tools for secure and cost-effective care, including our scalable Cloud Platform. And with future enhancements in areas like mobility, genomics, and AI, we will be ready for what comes next.
    </p> 

    <div className='fs-3 mt-5 bg-light bg-gradient py-2 px-3  rounded'>You can depend on us</div>
    <p className='fs-5 text-secondary mt-3 mb-5 p-2'> 
    Far from the transactional experience you might be used to, a relationship with MediTech is a collaboration. Working together, we make sure that our solutions can address your unique needs.

Whether your priority is giving physicians time back in their day, providing patients a safe, comfortable experience, or improving your reimbursement potential - with MediTech, you will see the possibilities of better care transform into tangible results.
    </p> 
    </div> 
    <div className='fs-1  mt-5 py-2 text-secondary' >Contact With Us</div>

    <div className='container p-3 bg-light rounded ' >
        <div>
            <form className='mx-3' ref={form} onSubmit={sendEmail}>

                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" name="user_name" id="exampleFormControlInput1" placeholder="John Doe"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput2" className="form-label">Email address</label>
                    <input type="email" name="user_email" className="form-control" id="exampleFormControlInput2" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                    <textarea className="form-control"  name="message" id="exampleFormControlTextarea1" placeholder='Enter the message here' rows="3"></textarea>
                </div>

                <button className='btn btn-primary w-100' >Send</button>
            </form>
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
<Footerr/>
</div>
  )
}
