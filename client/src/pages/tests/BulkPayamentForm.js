import { useState,React } from "react";
import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js";
import axios from "axios";
import './BookTest.css';
import Userfront from "@userfront/react";

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
  Userfront.init("6bgm6jgb");
  const userFrontuser = Userfront.user;
    const [success, setSuccess] = useState(false)
    const [processing, setProcessing] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [testlabName, setTestlabName] = useState('Test Lab 1');
    const [subsPlan , setsubsPlan  ] = useState();
    const [address, setAddress] = useState('degee');
    const [phoneNumber, setPhoneNumber] = useState('0771234678');
    // const [email, setEmail] = useState('company@gmail.com');
    const email =  userFrontuser.email;
    const [loading, setLoading] = useState(false);

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
    setLoading(true);
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
          email : email
        })
        console.log(subsPlan + 'Hri');
        
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
                setLoading(true);
                
            }
        }catch(error) {
          console.log('error' , error)
        }
    }else{
        console.log(error.message)
        setProcessing(false);
        setLoading(false);
    }
    }


  return (
    <div>

         {!success ? 
        <form  className="mx-auto justify-items-center align-items-center"  onSubmit={handleSubmit} id="payment-form">
            <fieldset className="FormGroup">
            <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label text-end">User Name</label>
                  <div className="col-sm-10">
                    <input type="text" value={userFrontuser.username} disabled className="form-control" id="inputUserId3" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label text-end">Email Address</label>
                  <div className="col-sm-10">
                    <input type="email" value={email} className="form-control" id="inputEmail3" disabled/>
                  </div>
                </div>
              <div className="row mb-3">
                  <label for="inputEmail1" className="col-sm-2 col-form-label text-end">Lab Name</label>
                  <div className="col-sm-10">
                    <input type="text" value={testlabName} onChange={e => setTestlabName(e.target.value)} className="form-control" id="inputEmail1" required/>
                  </div>
                </div> 

              <div className="row mb-3">
                  <label for="inputEmail22" className="col-sm-2 col-form-label text-end">Subscription Plan</label>
                  <div className="col-sm-10">
                  <select className="form-select " aria-label="Default select " 
                  onChange={e => setsubsPlan(e.target.value)} required>
                    <option selected value="Basic-Plan">Basic Plan - LKR 30,000 </option>
                    <option value="Standerd-Plan">Standerd Plan - LKR 80,000 </option>
                    <option value="Premium-Plan">Premium Plan - LKR 120,000 </option>
                  </select>
                  </div>
                </div>
{/* {subsPlan} */}
                <div className="row mb-3">
                  <label for="inputPassword3" className="col-sm-2 col-form-label text-end">Address</label>
                  <div className="col-sm-10">
                    <input type="text" value={address} onChange={e => setAddress(e.target.value)} className="form-control" id="inputPassword3" required/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputPassword4" className="col-sm-2 col-form-label text-end">Phone Number</label>
                  <div className="col-sm-10">
                    <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="form-control" id="inputPassword4" required/>
                  </div>
                </div>


          <div className="FormRow mb-3 mt-3">
          <label for="inputPassword4" className="col-sm-2 col-form-label">Card Details</label>

                    <CardElement id="card-element" options={cardStyle}/>
                </div>
            </fieldset>

          {loading ?  <button id="submit" className="btn btn-primary my-2 w-100" type="submit" disabled>
            {processing ? (
            <div className="d-inline">
            <div className="spinner" id="spinner"></div> Processing...</div>
          ): (<div><i class="bi bi-lock"></i> Pay</div> ) }</button> : 
          <button id="submit" className="btn btn-primary my-2 w-100" type="submit" >
            {processing ? (
            <div className="d-inline">
            <div className="spinner" id="spinner"></div> Processing...</div>
          ): (<div><i class="bi bi-lock"></i> Pay</div> ) }</button>
          }

        </form>
        :
       <div className="container bg-success bg-gradient my-3 py-5">
           <h2 className='text-light text-center my-5'> <i class="bi bi-check"></i> Subscription Succesfull</h2>
           <div className='bg-light p-3 border-light'> 
           <h2 className='text-center p-3'> Invoice  </h2>
           <fieldset className="FormGroup p-2">
                <div className="row mb-3">
                  <label for="inputEmail1" className="col-sm-2 col-form-label text-end">Invoice Number</label>
                  <div className="col-sm-10">
                    <input type="text" value={num} className="form-control" id="inputEmail1" disabled/>
                  </div>
                  <p className='text-center text-success' > Provide the invoice number when you visit the laboratory </p>
                </div> 
                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label text-end">Email Address</label>
                  <div className="col-sm-10">
                    <input type="email" value={email} className="form-control" id="inputEmail3" disabled/>
                  </div>
                </div>                
                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label text-end">User Name</label>
                  <div className="col-sm-10">
                    <input type="text" value={userFrontuser.username} className="form-control" id="inputEmail3" disabled/>
                  </div>
                </div>
              <div className="row mb-3">
                  <label for="inputEmail1" className="col-sm-2 col-form-label text-end">Lab Name</label>
                  <div className="col-sm-10">
                    <input type="text" value={testlabName} className="form-control" id="inputEmail1" disabled/>
                  </div>
                </div> 
              <div className="row mb-3">
                  <label for="inputEmail22" className="col-sm-2 col-form-label text-end">Subscribtion Plan</label>
                  <div className="col-sm-10">
                    <input type="text" value={subsPlan} className="form-control" id="inputEmail22" disabled/>
                  </div>
                </div>

                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label text-end">Address</label>
                  <div className="col-sm-10">
                    <input type="email" value={address} className="form-control" id="inputEmail3" disabled/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputPassword3" className="col-sm-2 col-form-label text-end">Phone Number</label>
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
