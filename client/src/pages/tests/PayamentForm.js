import { useState,React ,useEffect} from "react";
import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js";
import axios from "axios";
import './BookTest.css';
import DatePicker from "react-datepicker";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import getHours from 'date-fns/getHours'
import "react-datepicker/dist/react-datepicker.css";
import {Link,useParams} from 'react-router-dom';
import { DateTime } from "luxon";
import Axios  from 'axios';
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
    const { id } = useParams();
    Userfront.init("6bgm6jgb");
    const userFrontuser = Userfront.user;
    const [success, setSuccess] = useState(false)
    const [processing, setProcessing] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [firstName, setFirstName] = useState('Nick');
    const [lastName, setLastName] = useState('Jones');
    const [phoneNumber, setPhoneNumber] = useState('0771234678');
    // const [email, setEmail] = useState(userFrontuser.email);
    const email = userFrontuser.email;
    const [testName, setTestName] = useState();
    const [invoiceId, setInvoiceId] = useState();
    const username = userFrontuser.username;
 
    //Appoinment Post Request
    useEffect(() => {
      Axios.get("http://localhost:5000/appmntt")
      .then((response) => {
          setTestName(response.data[id-1].testName);
      })     
    },[])

    const [startDate, setStartDate] = useState();
// let invoiceId = Math.floor(Math.random() * 90000) + 10000;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);
    

    try{
      await axios.post('http://localhost:5000/createUser',{
        firstName,
        lastName,
        email,
        phoneNumber,
        testName,
        invoiceId,
        startDate,
        username
      } ).then(res => {
        setInvoiceId(() => (Math.floor(Math.random() * 90000) + 10000));
        console.log(invoiceId);
        // const data = res.data;
        console.log(firstName + 'Hri')
        // console.log(invoiceId)
        // console.log(startDate)
        



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
            const response = await axios.post('http://localhost:5000/payment', {
                amount:1000,
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
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Email Address</label>
                  <div className="col-sm-10">
                    <input type="email" value={email} disabled className="form-control" id="inputEmail3" />
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">User Name</label>
                  <div className="col-sm-10">
                    <input type="email" value={username} disabled className="form-control" id="inputUserId3" />
                  </div>
                </div>
              <div className="row mb-3">
                  <label for="inputEmail1" className="col-sm-2 col-form-label">First Name</label>
                  <div className="col-sm-10">
                    <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className="form-control" id="inputEmail1" required/>
                  </div>
                </div> 
              <div className="row mb-3">
                  <label for="inputEmail2" className="col-sm-2 col-form-label">Last Name</label>
                  <div className="col-sm-10">
                    <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} className="form-control" id="inputEmail2" required/>
                  </div>
                </div>

                <div className="row mb-3">
                  <label for="inputPassword3" className="col-sm-2 col-form-label">Phone Number</label>
                  <div className="col-sm-10">
                    <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="form-control" id="inputPassword3" required/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputPassword3" className="col-sm-2 col-form-label">Time Slot</label>
                  <div className="col-sm-10">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      showTimeSelect
                      minDate={new Date()}
                      excludeOutOfBoundsTimes
                      timeFormat="HH:mm"
                      timeIntervals={60}
                      timeCaption="time"
                      excludeTimes={[
                        setHours(setMinutes(new Date(), 0), 17),
                        setHours(setMinutes(new Date(), 0), 18),
                        setHours(setMinutes(new Date(), 0), 19),
                        setHours(setMinutes(new Date(), 0), 20),
                        setHours(setMinutes(new Date(), 0), 21),
                        setHours(setMinutes(new Date(), 0), 22),
                        setHours(setMinutes(new Date(), 0), 23),
                        setHours(setMinutes(new Date(), 0), 24),
                        setHours(setMinutes(new Date(), 0), 0),
                        setHours(setMinutes(new Date(), 0), 1),
                        setHours(setMinutes(new Date(), 0), 2),
                        setHours(setMinutes(new Date(), 0), 3),
                        setHours(setMinutes(new Date(), 0), 4),
                        setHours(setMinutes(new Date(), 0), 5),
                        //setHours(new Date(), getHours(new Date())),
                        //setHours(new Date(), 9),
                        setHours(setMinutes(new Date(), 0), 6),
                        //setHours(setMinutes(new Date(), 0), 7),
                        //setHours(setMinutes(new Date(), 0), getHours(new Date()))
                      ]}
                      minTime={setHours(setMinutes(new Date(), 0), getHours(new Date()) + 1) }
                      //minTime={DateTime.local().hour}
                      maxTime={setHours(setMinutes(new Date(), 0), 17) }
                      dateFormat="MMMM d, yyyy h:mm aa"
                      showDisabledMonthNavigation
                      required
                      placeholderText='Click here to select a date'
                    /> 
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
           <h2 className='text-light text-center my-5'> <i class="bi bi-check"></i> Test order Succesfull</h2>
           <div className='bg-light p-3 border-light'> 
           <h2 className='text-center p-3'> Invoice  </h2>
           <fieldset className="FormGroup p-2">
              <div className="row mb-3">
              <label for="inputEmail1" className="col-sm-2 col-form-label">Invoice Number</label>
              <div className="col-sm-10">
                <input type="text" value={invoiceId} className="form-control" id="inputEmail1" disabled/>
              </div>
              <p className='text-center text-success'> Provide the invoice number when you visit the laboratory </p>
              </div> 

              <div className="row mb-3">
              <label for="inputEmail1" className="col-sm-2 col-form-label">User Name</label>
              <div className="col-sm-10">
                <input type="text" value={username} className="form-control" id="inputUserID1" disabled/>
              </div>
              </div> 

              <div className="row mb-3">
                  <label for="inputEmail1" className="col-sm-2 col-form-label">First Name</label>
                  <div className="col-sm-10">
                    <input type="text" value={firstName} className="form-control" id="inputEmail1" disabled/>
                  </div>
                </div> 
              <div className="row mb-3">
                  <label for="inputEmail2" className="col-sm-2 col-form-label">Last Name</label>
                  <div className="col-sm-10">
                    <input type="text" value={lastName} className="form-control" id="inputEmail2" disabled/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputEmail3" className="col-sm-2 col-form-label">Email Address</label>
                  <div className="col-sm-10">
                    <input type="email" value={email} className="form-control" id="inputEmail3" disabled/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputPassword3" className="col-sm-2 col-form-label">Phone Number</label>
                  <div className="col-sm-10">
                    <input type="text" value={phoneNumber} className="form-control" id="inputPassword3" disabled/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label for="inputPassword3" className="col-sm-2 col-form-label">Time Slot</label>
                  <div className="col-sm-10">
                    <input type="text" value={startDate} className="form-control" id="inputPassword3" disabled/>
                  </div>
                </div>
            </fieldset>
            </div>
       </div> 
        }
        <Link to="/appmnt" className='text-dark py-5 my-3'><i class="bi bi-arrow-left"></i>  Back to appointments page </Link>

    </div>
  )
}
