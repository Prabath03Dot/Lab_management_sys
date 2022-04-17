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
import NavigationBar from "../Imp/NavigationBar";


const BulkTestForm = () => {
    //const { id } = useParams();
    const [testList, setTestList] = useState([]);
    // const [changeTest, setChangeTest] = useState();
    // const [stripeError, setStripeError] = useState(null);
    // const [isLoading, setLoading] = useState(false);


    //Appoinment Post Request
    useEffect(() => {
      Axios.get("https://lab-sys.herokuapp.com/appmntt")
      .then((response) => {
          setTestList(response.data)
          console.log(response.data)
      })
      
    }, [])
   
    //Strip Promise
    const stripeTestPromise = loadStripe('pk_test_51KStWED1JpqiLwVaytqSErusAHZGu163TahSPZ4zc7jkb3rH0r9Z67Id2tvQ2LlENsXcnRdaZ3cJxgf0L9OqT50e00tSv5hQym')


    return ( 
    <div>
        <NavigationBar/>

        
        


        <div className="container p-4 ">
        <div className=" text-secondary fs-1 mt-5 mb-2 text-center text-md-start">Subscribtion Plan | Checkout Section</div>
        </div>
        <div className="container ">
          <Elements stripe={stripeTestPromise} >
            <BulkPayamentForm/>
          </Elements>
        </div>

        <Footerr/>
    </div> );
}
 
export default BulkTestForm;
