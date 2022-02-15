const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51KStWED1JpqiLwVa3sArEo487HRaeNZaLw0Q2IkUApS1lPZC2RsXE4tzLYGMjWVJ7QK6QjDJ1hM1ynI1DLM3v8XX00z5UYpTLU');

const app = express();
app.use(express.static('public'));

app.use(cors());

const Test = require('./models/test_cat');

//connection
    mongoose.connect('mongodb+srv://dbuser:Pass9@cluster0.pisst.mongodb.net/labdatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=>{
            console.log("Mongo Running....")
        })
        .catch((err)=>{
            console.log(err);
        });


 
//----------------------------------------------------------------
// Mongoose and routes
app.get('/appmntt', (req, res)=>{
    Test.find({}, (err, result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});


app.get('/gto', (req,res)=> {
    res.send("Hello wrld");
} )

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1KSwOQD1JpqiLwVaihKkW0cK',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'http://localhost:3000/create-checkout-session/?success=true',
      cancel_url: 'http://localhost:3000/create-checkout-session/?canceled=true',
    });
  
    res.redirect(303, session.url);
  });



app.listen(5000, () => {
        console.log("Server runninggg....");
})