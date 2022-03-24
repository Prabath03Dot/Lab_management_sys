import React from 'react'
import { Link } from 'react-router-dom';
import '../../css/dashboard.css';


export default function Dashboard() {


  return (
    <div>

  
<header className="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0 shadow-sm">
  <a className="navbar-brand bg-light col-md-3 col-lg-2 me-0 px-3 fs-4 fw-bold text-secondary" href="#">MediTech</a>
  <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  {/* <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"/> */}
  <div className="navbar-nav">
    <div className="nav-item text-nowrap">
      <a className="nav-link px-3" href="#">Sign out</a>
    </div>
  </div>
</header>

<div className="container-fluid">
  <div className="row">
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="position-sticky pt-3">
        <ul className="nav flex-column mt-3">
          <li className="nav-item">
            <Link className="nav-link active fs-4" aria-current="page" to='/account'>
              <span data-feather="home"></span>
              Account
            </Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" href="#">
              <span data-feather="bar-chart-2"></span>
              Dashboard
            </Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link fs-4" to="/reports">
              <span data-feather="layers"></span>
              Reports
            </Link>
          </li>
        </ul>

        {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Saved reports</span>
          <a className="link-secondary" href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul className="nav flex-column mb-2">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="file-text"></span>
              Current month
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="file-text"></span>
              Last quarter
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="file-text"></span>
              Social engagement
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span data-feather="file-text"></span>
              Year-end sale
            </a>
          </li>
        </ul> */}
      </div>
    </nav>

    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      {/* <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Dashboard</h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button>
        </div>
      </div> */}

      {/* <canvas className="my-4 w-100" id="myChart" width="900" height="380"></canvas> */}

      {/* <h2>Section title</h2> */}

    </main>
  </div>
</div>



    </div>
  )
}
