import Footerr from "../Imp/Footer";
import NavBar from "../Imp/Navbar";
import { useState, useEffect } from "react";
import Axios  from 'axios';
import Table from 'react-bootstrap/Table'
import { Link, useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
//import ProductImage from '../images/flask.png'
import BulkPayamentForm from "./BulkPayamentForm";
//import './BookTest.css';
import {
  CardElement,
  useStripe,
  useElements, 
  Elements
} from "@stripe/react-stripe-js";


const BulkTestForm = () => {
    //const { id } = useParams();
    const [testList, setTestList] = useState([]);
    // const [changeTest, setChangeTest] = useState();
    // const [stripeError, setStripeError] = useState(null);
    // const [isLoading, setLoading] = useState(false);


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

        
        <div className="text-center fs-1 mt-3 mb-3">Subscribe to your plan</div>


        <div className="container py-3 bg-light text-center">
        <h3 className="py-2">Checkout Section</h3>
          <Elements stripe={stripeTestPromise} >
            <BulkPayamentForm/>
          </Elements>
        </div>

        <Footerr/>
    </div> );
}
 
export default BulkTestForm;
