import { useState,React } from "react";
import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js";
import axios from "axios";
import './BookTest.css';

const cardStyle = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#32325d"
      }
    },
    invalid: {
      fontFamily: 'Arial, sans-serif',
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  }
};

export default function PayamentForm() {
    const [success, setSuccess] = useState(false)
    const [processing, setProcessing] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [testlabName, setTestlabName] = useState('Test Lab 1');
    const [subsPlan , setsubsPlan  ] = useState();
    const [address, setAddress] = useState('degee');
    const [phoneNumber, setPhoneNumber] = useState('0771234678');
    const [email, setEmail] = useState('company@gmail.com');
    const [invoice, setInvoice] = useState({
      testlabName,
      address,
      subsPlan,
      email,
      phoneNumber
    });
    const [startDate, setStartDate] = useState();
    var num = Math.floor(Math.random() * 90000) + 10000;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    try{
      await axios.post('http://localhost:5000/createSubs',{
        testlabName,
        subsPlan,
        address,
        email,
        phoneNumber
      } ).then(res => {
        // const data = res.data;
        setInvoice({
          testlabName: setTestlabName,
          subsPlan : setsubsPlan,
          address: setAddress,
          phoneNumber : setPhoneNumber,
          email : setEmail
        })
        console.log(testlabName + 'Hri');
        
      }).catch((error) => {
        if (error.response) {
          console.log(error.response);
          console.log("server responded::userRoute");
        } else if (error.request) {
          console.log("network error ::userRoute");
        } else {
          console.log(error);
        }
      })
    }catch(error){
      console.log(error);
    }

    const {error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement)
    })
  
    if(!error){
        try{
            const {id} = paymentMethod
            const response = await axios.post('http://localhost:5000/bulkpayment', {
                amount:5000,
                id
            } )

            if(response.data.success){
                console.log("success payment");
                setSuccess(true);
                setProcessing(true);
                
            }
        }catch(error) {
          console.log('error' , error)
        }
    }else{
        console.log(error.message)
        setProcessing(false);
    }
    }


  return (
    <div>

         {!success ? 
        <form  className="mx-auto justify-items-center align-items-center"  onSubmit={handleSubmit} id="payment-form">
            <fieldset className="FormGroup">
              <div className="row mb-3">
                  <label for="inputEmail1" className="col-sm-2 col-form-label">Lab Name</label>
                  <div className="col-sm-10">
                    <input type="text" value={testlabName} onChange={e => setTestlabName(e.target.value)} className="form-control" id="inputEmail1" required/>
                  </div>
                </div> 
              <div className="row mb-3">
                  <label for="inputEmail2" className="col-sm-2 col-form-label">Subscription Plan</label>
                  <div className="col-sm-10">
                  <select className="form-select form-control" aria-label="Default select " 
                  onChange={e => setsubsPlan(e.target.value)} required>
                    <option value=''>None</option>
                    <option value="1">Basic Plan - LKR 30,000 </option>
                    <option value="2">Standerd Plan - LKR 80,000 </option>
                    <option value="3">Premium Plan - LKR 120,000 </option>
                  </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Email Address</label>
                  <div className="col-sm-10">
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="inputEmail3" required/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputPassword3" className="col-sm-2 col-form-label">Adress</label>
                  <div className="col-sm-10">
                    <input type="text" value={address} onChange={e => setAddress(e.target.value)} className="form-control" id="inputPassword3" required/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputPassword4" className="col-sm-2 col-form-label">Phone Number</label>
                  <div className="col-sm-10">
                    <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="form-control" id="inputPassword4" required/>
                  </div>
                </div>


          <div className="FormRow mb-3 mt-3">
          <label for="inputPassword4" className="col-sm-2 col-form-label">Card Details</label>

                    <CardElement id="card-element" options={cardStyle}/>
                </div>
            </fieldset>
            <button id="submit" className="btn btn-primary my-2 w-100" type="submit">
            {processing ? (
            <div className="d-inline"><div className="spinner" id="spinner"></div> Processing...</div>
          ): (<div><i class="bi bi-lock"></i> Pay</div> ) }</button>

        </form>
        :
       <div className="container bg-success my-3 py-5">
           <h2 className='text-light text-center my-5'> <i class="bi bi-check"></i> Subscription Succesfull</h2>
           <div className='bg-light p-3 border-light'> 
           <h2 className='text-center p-3'> Invoice  </h2>
           <fieldset className="FormGroup p-2">
                <div className="row mb-3">
                  <label for="inputEmail1" className="col-sm-2 col-form-label">Invoice Number</label>
                  <div className="col-sm-10">
                    <input type="text" value={num} className="form-control" id="inputEmail1" disabled/>
                  </div>
                  <p className='text-center text-success' > Provide the invoice number when you visit the laboratory </p>
                </div> 
              <div className="row mb-3">
                  <label for="inputEmail1" className="col-sm-2 col-form-label">Lab Name</label>
                  <div className="col-sm-10">
                    <input type="text" value={testlabName} className="form-control" id="inputEmail1" disabled/>
                  </div>
                </div> 
              <div className="row mb-3">
                  <label for="inputEmail2" className="col-sm-2 col-form-label">Subscribtion Plan</label>
                  <div className="col-sm-10">
                    <input type="text" value={subsPlan} className="form-control" id="inputEmail2" disabled/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Email Address</label>
                  <div className="col-sm-10">
                    <input type="email" value={email} className="form-control" id="inputEmail3" disabled/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Address</label>
                  <div className="col-sm-10">
                    <input type="email" value={address} className="form-control" id="inputEmail3" disabled/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputPassword3" className="col-sm-2 col-form-label">Phone Number</label>
                  <div className="col-sm-10">
                    <input type="text" value={phoneNumber} className="form-control" id="inputPassword3" disabled/>
                </div>
                </div>
            </fieldset>
            </div>
       </div> 
        }

    </div>
  )
}
