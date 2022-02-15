import Footerr from "./Footer";
import NavBar from "./Navbar";
import { useState, useEffect } from "react";
import Axios  from 'axios';
import Table from 'react-bootstrap/Table'
import { Link, useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import ProductImage from '../images/flask.png'

const BookTest = () => {
    const { id } = useParams();
    const [testList, setTestList] = useState([]);
    const [changeTest, setChangeTest] = useState();
    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      Axios.get("http://localhost:5000/appmntt")
      .then((response) => {
          setTestList(response.data)
          console.log(response.data)
      })
      
    }, [])

    let stripePromise;
    const getStripe = () => {
      if(!stripePromise){
        stripePromise =  loadStripe(process.env.REACT_APP_STRIPE_KEY)
      }

      return stripePromise;
    }

    const item1 = {
      price: 'price_1KSwOQD1JpqiLwVaihKkW0cK',
      quantity:1
    }

    const item2 = {
      price: 'price_1KTTPAD1JpqiLwVaS0NihLKO',
      quantity:1
    }

    const checkoutOptions = {
      lineItems: [item1],
      mode: "payment",
      successUrl: `${window.location.origin}/appmnt/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${window.location.origin}/appmnt/cancel`
    }

    const redirectToCheckout = async () => {
      setLoading(true);
      console.log("redirectToCheckout");
    
      const stripe = await getStripe();
      const { error } = await stripe.redirectToCheckout(checkoutOptions);
      console.log("Stripe checkout error", error);

      if (error) setStripeError(error.message);
      setLoading(false);
    };
      
    if (stripeError) alert(stripeError);
      
    return ( 
    <div>
        <NavBar/>

        Test ID - {id}
        <div className="text-center fs-1">Book Test Appoinmnet</div>
        <div>
        {    
            testList.filter(tests => tests.test_id == id )
            .map((test) => (
                <div key={test.test_id}> {test.testName} </div>)
              )
        } 
        
        </div>

        <div className="checkout">
      <h1>Stripe Checkout</h1>
      <p className="checkout-title">Design+Code React Hooks Course</p>
      <p className="checkout-description">
        Learn how to build a website with React Hooks
      </p>
      <h1 className="checkout-price">$19</h1>
      <img
        className="checkout-product-image"
        src={ProductImage}
        alt="Product"
      />
      <button className="checkout-button" onClick={redirectToCheckout} disabled={isLoading}>
        <div className="text-container">
          <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
        </div>
      </button>
    </div>


    {/* <section>
    <div className="product">
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className="description">
      <h3>Stubborn Attachments</h3>
      <h5>$20.00</h5>
      </div>
    </div>
    <form action="/create-checkout-session" method="POST">
      <button type="submit">
        Checkout
      </button>
    </form>
  </section> */}

  {/* <button><a href="https://buy.stripe.com/test_9AQ9C99xQ5lEfN6eUU">boookk</a> </button> */}

        <Footerr/>
    </div> );
}
 
export default BookTest;
