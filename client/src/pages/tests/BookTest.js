import Footerr from "../Footer";
import NavBar from "../Navbar";
import { useState, useEffect } from "react";
import Axios  from 'axios';
import Table from 'react-bootstrap/Table'
import { Link, useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
//import ProductImage from '../images/flask.png'
import PayamentForm from "./PayamentForm";
//import './BookTest.css';
import {
  CardElement,
  useStripe,
  useElements, 
  Elements
} from "@stripe/react-stripe-js";


const BookTest = () => {
    const { id } = useParams();
    const [testList, setTestList] = useState([]);
    const [changeTest, setChangeTest] = useState();
    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setLoading] = useState(false);


    //Appoinment Post Request
    useEffect(() => {
      Axios.get("http://localhost:5000/appmntt")
      .then((response) => {
          setTestList(response.data)
          console.log(response.data)
      })
      
    }, [])
   
    //Strip Promise
    const stripeTestPromise = loadStripe('pk_test_51KStWED1JpqiLwVaytqSErusAHZGu163TahSPZ4zc7jkb3rH0r9Z67Id2tvQ2LlENsXcnRdaZ3cJxgf0L9OqT50e00tSv5hQym')


    return ( 
    <div>
        <NavBar/>

        
        <div className="text-center fs-1 mt-5 mb-3">Book Test Appoinmnet</div>
        <div className="bg-light container">
        {    
            testList.filter(tests => tests.test_id == id )
            .map((test) => (
                <div key={test.test_id}>
                    <div className="accordion" id="accordionExample">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          {test.testName} 
                          </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <div className="panel-body">
                            <h3>Patient Preparation</h3>
                            <p>{test.test_details}</p>
                            <h3>Test Price</h3>
                            <p className="text-primary">LKR {test.test_price}</p>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                 </div>)
              )
        } 
        </div>


        <div className="container p-5 bg-light">
        <h3 className="py-2">Checkout Section</h3>
          <Elements stripe={stripeTestPromise} >
            <PayamentForm/>
          </Elements>
        </div>




        <Footerr/>
    </div> );
}
 
export default BookTest;
