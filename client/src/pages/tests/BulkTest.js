import React from 'react'
import Footerr from '../Imp/Footer'
import NavBar from '../Imp/Navbar'
import img1 from '../../images/chemistry.jpg'
import img2 from '../../images/bill-oxford-tR0PPLuN6Pw-unsplash.jpg'
import { Link } from 'react-router-dom'
import NavigationBar from '../Imp/NavigationBar'


export default function BulkTest() {
  return (
    <div>
        <NavigationBar/>

            {/* Bulk Test Component */}
            <div className='container mt-5 p-4'>
            <div className='text-secondary fs-1 mb-4'>Choose Your Subscription Plan</div>

            <div className="card-group">
            <div className="card">
                <img src={img1} className="card-img-top" alt='chemistry.jpg' />
                <div className="card-body">
                <h5 className="card-title my-2">Basic Plan</h5>
                <p className="card-text">150 Test Per Day</p>
                <p className="card-text">40k Test Per Month</p>
                <p className="card-text">Email Support</p>
                {/* <button className='btn btn-primary text-light'>
                <Link className='text-light text-decoration-none' to='/bulkform' >Checkout</Link>
                </button> */}
                </div>
            </div>
            <div className="card ">
                <img src={img2} className="card-img-top" alt='chemistry.jpg' />
                <div className="card-body bg-primary bg-gradient text-light">
                <h5 className="card-title my-2">Standerd Plan</h5>
                <p className="card-text">500 Test Per Day</p>
                <p className="card-text">70k Test Per Month</p>
                <p className="card-text">Online Chat Support</p>
                {/* <button className='btn btn-primary text-light'>
                <Link className='text-light text-decoration-none' to='/bulkform'>Checkout</Link>
                </button> */}

                </div>
            </div>
            <div className="card">
                <img src={img1} className="card-img-top" alt='chemistry.jpg'/>
                <div className="card-body">
                <h5 className="card-title my-2">Premium Plan</h5>
                <p className="card-text">1000 Test Per Day</p>
                <p className="card-text">100k Test Per Month</p>
                <p className="card-text">Email Support</p>
                <p className="card-text">Online Chat Support</p>    
                {/* <button className='btn btn-primary text-light'>
                <Link className='text-light text-decoration-none' to='/bulkform'>Checkout</Link>
                </button> */}

                </div>
            </div>
            </div>
            </div>
            <div className='justify-items-center align-items-center container my-5'>
            <center>
                <button className='btn btn-primary text-light justify-items-center align-items-center '>
                    <Link className='text-light text-decoration-none mx-auto' to='/bulkform'>Proceed to Checkout</Link>
                </button> </center>
            </div>


        <Footerr />
    </div>
  )
}
