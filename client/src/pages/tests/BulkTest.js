import React from 'react'
import Footerr from '../Imp/Footer'
import NavBar from '../Imp/Navbar'
import img1 from '../../images/chemistry.jpg'
import img2 from '../../images/bill-oxford-tR0PPLuN6Pw-unsplash.jpg'

export default function BulkTest() {
  return (
    <div>
        <NavBar />

            {/* Bulk Test Component */}
            <h1 className='text-center fw-1 my-4 py-3'>Choose Your Subscription Plan</h1>
            <div className='container mt-3'>
            <div className="card-group">
            <div className="card">
                <img src={img1} className="card-img-top" alt='chemistry.jpg' />
                <div className="card-body">
                <h5 className="card-title my-2">Basic Plan</h5>
                <p className="card-text">150 Test Per Day</p>
                <p className="card-text">40k Test Per Month</p>
                <p className="card-text">Email Support</p>
                <button className='btn btn-primary text-light'><a className='text-light text-decoration-none' href="https://buy.stripe.com/test_6oE5lTaBUcO66cw7su" target="_blank">Checkout</a></button>
                </div>
            </div>
            <div className="card">
                <img src={img2} className="card-img-top" alt='chemistry.jpg' />
                <div className="card-body">
                <h5 className="card-title my-2">Standerd Plan</h5>
                <p className="card-text">500 Test Per Day</p>
                <p className="card-text">70k Test Per Month</p>
                <p className="card-text">Online Chat Support</p>
                <button className='btn btn-primary text-light'><a className='text-light text-decoration-none' href="https://buy.stripe.com/test_7sI5lT25o7tMasMeUX" target="_blank">Checkout</a></button>

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
                <button className='btn btn-primary text-light'><a className='text-light text-decoration-none' href="https://buy.stripe.com/test_fZe7u19xQ9BUfN6eUY" target="_blank">Checkout</a></button>

                </div>
            </div>
            </div>
            </div>


        <Footerr />
    </div>
  )
}
