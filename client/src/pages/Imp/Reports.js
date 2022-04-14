import Axios  from 'axios';
import React,{useEffect,useState,useRef } from 'react'
import { Link,useParams ,useNavigate} from 'react-router-dom';
import '../../css/dashboard.css';
import Userfront from "@userfront/react";
import { useReactToPrint } from 'react-to-print';
// import { ComponentToPrint } from './ComponentToPrint';

export default function Dashboard() {
  const componentRef = useRef();
  const { id } = useParams();
  const [userDate, setUserDate] = useState();
  Userfront.init("6bgm6jgb");
  const userFrontuser = Userfront.user;
  const username = userFrontuser.username;
  const navigate = useNavigate();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  //User Object Post Request
  useEffect(() => {
    Axios.get("https://lab-sys.herokuapp.com/getUser")
    .then((response) => {
        setUserDate(response.data)
        console.log(response.data);
    }
    )     
  },[])



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
            <Link className="nav-link  fs-5" aria-current="page" to='/account'>
              <span data-feather="home"></span>
              <i class="bi bi-file-person"></i> Account
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active fs-5" to="/reports">
              <span data-feather="layers"></span>
              <i class="bi bi-file-earmark-text"></i> Reports
            </Link>
          </li>
        </ul>

 
      </div>
    </nav>

    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">

<div className='container mt-4' >
    {!userDate ?  <div className='text-center fs-3 mt-5 pt-5 text-secondary'  >No Reports Founded</div> : (userDate.filter(data => data.username === username)
    .map((datas) => (
      <div key={datas._id}>
      <div className="accordion"  id={`${datas.username}`}>
          <div className="accordion-item my-3">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              {datas.testName} | {datas.startDate}
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" 
            data-bs-parent={`#${datas.username}`}
            >
              <div className="accordion-body " ref={componentRef}>
                <div className="panel-body fs-6 bg-light p-5 rounded">
                <p>Patient Name : {datas.testName}</p>
                <p>Patient Test ID : {datas._id}</p>
                <p>Patient Name : {datas.firstName + ' ' + datas.lastName}</p>
                <p>Patient Email: {datas.email}</p>
                <p>Patient Gender: {datas.gender}</p>
                <p>Patient Age: {datas.age}</p>
                <p>Phone Number:{datas.phoneNumber}</p>
<hr/>
                <div className='table-responsive'>
                <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Tests</th>
      <th scope="col">Result</th>
      <th scope="col">Flag</th>
      <th scope="col">Units</th>
      <th scope="col">Reference Intervel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Cholesterol, Total</td>
      <td>472</td>
      <td>High</td>
      <td>mg/dL</td>
      <td>100-199</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Triglycerides</td>
      <td>1960</td>
      <td>Alert</td>
      <td>mg/dL</td>
      <td>0-149</td>
    </tr>
    <tr>
    <th scope="row">3</th>
      <td>HDL Cholesterol</td>
      <td>32</td>
      <td>Low</td>
      <td>mg/dL</td>
      <td>&#60; 39</td>
    </tr>
    <tr>
    <th scope="row">4</th>
      <td>HDL Cholesterol Calc</td>
      <td>32</td>
      <td>Low</td>
      <td>mg/dL</td>
      <td>-99</td>
    </tr>
    <tr>
    <th scope="row">5</th>
      <td>T Chol/HDL Ratio</td>
      <td>14.8</td>
      <td>High</td>
      <td>ratio units</td>
      <td>0-5.0</td>
    </tr>
    <tr>
    <th scope="row">6</th>
      <td>Estimated CHD Risk</td>
      <td>2.5</td>
      <td>High</td>
      <td>times avg.</td>
      <td>0-1.0</td>
    </tr>

  <tr>
  <td colspan="4">
        <table class="table mb-0">
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">T Chol/HDL Ratio</th>
      <th scope="col">Men</th>
      <th scope="col">Women</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>1/2 Avg.Risk</td>
      <td>3.4</td>
      <td>3.3</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Avg.Risk</td>
      <td>5.0</td>
      <td>4.4</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>2x Avg.Risk</td>
      <td>9.6</td>
      <td>7.1</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>3x Avg.Risk</td>
      <td>23.4</td>
      <td>11.0</td>
    </tr>
  </tbody>
</table>
        </table>
      </td>
</tr>
  </tbody>
</table>
                <div className='text-secondary text-center mt-5'>MediTech Labs Digital Reference</div>
                <div className='text-secondary text-center'>2022 | All rigths Reserved</div>
                </div>
                

                </div>
                
              </div> <button className='btn btn-primary btn-sm mx-3 my-3' onClick={handlePrint}>Print this out!</button>
            </div>
           
          </div>
          
        </div>

      </div>
    ) ) )}
</div>

    </main>
  </div>

</div>

{/* <button className='btn btn-primary' onClick={handlePrint}>Print this out!</button> */}


    </div>
  )
}
