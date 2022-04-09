import React, {useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom';
import '../../css/dashboard.css';
import img1 from '../../images/flask.png'
import Userfront from "@userfront/react";

export default function Account() {
    Userfront.init("6bgm6jgb");
    const userFrontuser = Userfront.user;
    const navigate = useNavigate();

    const [name, setName] = useState(userFrontuser.name);
    Userfront.user.update({
        name: setName,
        // data: {
        //   somethingCustom: true,
        // },
      });


  return (
    <div>

<header className="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0 shadow-sm">
  <Link className="navbar-brand bg-light col-md-3 col-lg-2 me-0 px-3 fs-4 fw-bold text-secondary" to='/home'>MediTech</Link>
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <input className="form-control form-control w-100 bg-light" type="text"  aria-label="Search" disabled/>
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
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

    <div className='container mx-auto rounded mt-3' >
        <div>
            <form className='px-5 py-3'>
            <img src={userFrontuser.image} className="rounded mx-auto d-block mb-4" style={{width:'70px'}} alt={img1} ></img>
   
                <div class="mb-3">
                <div class="mb-3">
                    <label for="exampleFormControlInput2" className="form-label">UserID</label>
                    <input type="text" name="user_email" disabled value= {userFrontuser.userId}
                    className="form-control" id="exampleFormControlInput2" />
                </div>

                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input 
                    type="text" 
                    className="form-control"
                    value= {name}  disabled
                       
                    />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput2" className="form-label">User Name</label>
                    <input type="text" name="user_email" disabled value= {userFrontuser.username}
 className="form-control" id="exampleFormControlInput2" placeholder="name@example.com"/>
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput2" className="form-label">Email address</label>
                    <input type="email" name="user_email" disabled value= {userFrontuser.email} className="form-control" id="exampleFormControlInput2" placeholder="name@example.com"/>
                </div>
            </form>
            <div className='px-5 mt-0'>
            <button className='btn btn-primary btn-sm'> <Link className='text-decoration-none text-light' to="/updateProfile">Update Profile</Link> </button></div>
        </div>
    </div>

    </main>
  </div>
</div>



    </div>
  )
}
