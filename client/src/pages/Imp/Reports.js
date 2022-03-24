import Axios  from 'axios';
import React,{useEffect,useState} from 'react'
import { Link,useParams } from 'react-router-dom';
import '../../css/dashboard.css';
import Userfront from "@userfront/react";

export default function Dashboard() {

  const { id } = useParams();
  const [userDate, setUserDate] = useState();
  Userfront.init("6bgm6jgb");
  const username = userFrontuser.username;

  //Appoinment Post Request
  useEffect(() => {
    Axios.get("http://localhost:5000/getUser")
    .then((response) => {
        //setTestName(response.data[id-1].testName);
        console.log(response.data);
    })     
  }, [])

  //User Object Post Request
  useEffect(() => {
    Axios.get("http://localhost:5000/getUser")
    .then((response) => {
        setUserDate(response.data)
    })     
  }, [])

  return (
    <div>

  
<header className="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0 shadow-sm">
  <a className="navbar-brand bg-light col-md-3 col-lg-2 me-0 px-3 fs-4 fw-bold text-secondary" href="#">MediTech</a>
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/>
  {/* <div className="navbar-nav">
    <div className="nav-item text-nowrap">
      <a className="nav-link px-3" href="#">Sign out</a>
    </div>
  </div> */}
</header>

<div className="container-fluid">
  <div className="row">
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column mt-3">
          <li className="nav-item">
            <Link className="nav-link  fs-5" aria-current="page" to='/account'>
              <span data-feather="home"></span>
              Account
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active fs-5" to="/reports">
              <span data-feather="layers"></span>
              Reports
            </Link>
          </li>
        </ul>

 
      </div>
    </nav>

    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

    {userDate.filter(data => data.username === username)
    .map((datas) => (
      <div key={}></div>
    ) ) }

    </main>
  </div>

</div>



    </div>
  )
}
