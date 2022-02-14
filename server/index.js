const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

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



app.listen(5000, () => {
        console.log("Server runninggg....");
})