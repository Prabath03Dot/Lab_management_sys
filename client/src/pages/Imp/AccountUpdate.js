import React, {useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import '../../css/dashboard.css';
import img1 from '../../images/flask.png'
import Userfront from "@userfront/react";
import { useRef } from 'react';
import '../../../node_modules/react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export default function AccountUpdate() {
  const editorRef = useRef(null);
    Userfront.init("6bgm6jgb");
    const user = Userfront.user;
    const navigate = useNavigate();

    const [name, setName] = useState(user.name);
    const [image, setImage] = useState(user.image);
    const [userName, setUserName] = useState(user.username);

    const handelSubmit = () => {
      Userfront.user.update({
        name: name,
        username:userName
        // data: {
        //   somethingCustom: true,
        // },
      }).then(
        toast.success('Profile Updated', {
          position: "bottom-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
      );
    }



  return (
    <div>

<header className="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0 shadow-sm">
  <Link className="navbar-brand bg-light col-md-3 col-lg-2 me-0 px-3 fs-4 fw-bold text-secondary" to='/home'>MediTech</Link>
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <input className="form-control form-control w-100 bg-light fs-3 text-secondary" type="text" value='Update Profile' aria-label="Search" />
  <div className="navbar-nav">
    <div className="nav-item text-nowrap">
    <div className="nav-link px-3 text-decoration-underline" onClick={()=>navigate(-1)}><i className="bi bi-arrow-left"></i>   Go Back</div>
    </div>
  </div>
</header>

<div className="container-fluid">
  <div className="row">
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column mt-3">
          <li className="nav-item">
            <Link className="nav-link active fs-5" aria-current="page" to='/account'>
              <span ></span>
              <i class="bi bi-file-person"></i> Account
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fs-5" to="/reports">
              <span data-feather="layers"></span>
              <i class="bi bi-file-earmark-text"></i> Reports
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    {/* onChange={e => setName(e.target.value)}  */}
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

    <div className='container mx-auto rounded mt-3' >
        {/* <div className='fs-1 text-center py-2 fw-bold' >User Profile</div> */}
        <div>
            <form className='px-5 py-3'>
            <img src={user.image} className="rounded mx-auto d-block mb-4" style={{width:'70px'}} alt={img1} ></img>
 
                <div class="mb-3">     
                                
                <div class="mb-3">
                    <label for="exampleFormControlInput2" className="form-label">Email address</label>
                    <input type="email" name="user_email" disabled value= {user.email} className="form-control" id="exampleFormControlInput2" placeholder="name@example.com"/>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput2" className="form-label">UserID</label>
                    <input type="text" name="user_email"  value= {user.userId}
                    className="form-control" id="exampleFormControlInput2" />
                </div>

                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input 
                    type="text" 
                    className="form-control"
                    value= {name}  
                       onChange={e => setName(e.target.value)}
                    />
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput2" className="form-label">User Name</label>
                    <input type="text"  value= {userName} onChange={e => setUserName(e.target.value)}
                    className="form-control" id="exampleFormControlInput2"/>
                </div>
            <div className='mb-4 d-flex justify-content-start'>
            <button className='btn btn-primary btn-sm' onClick={handelSubmit}> <Link className='text-decoration-none text-light' to="/updateProfile">Update</Link> </button>
            <button className='btn btn-success btn-sm mx-2'> <Link className='text-decoration-none text-light' to="/account">Go Back</Link> </button></div>

            </form>

        </div>
    </div>

    </main>
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


    </div>
  )
}
