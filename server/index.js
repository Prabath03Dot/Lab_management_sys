const express = require("express");
const app = express();

const mongoose = require('mongoose');
const TestCModel = require('./models/test_cat');

mongoose.connect('mongodb+srv://dbuser:Pass9@cluster0.pisst.mongodb.net/labdatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Mongo Running....")

})
.catch((err)=>{
    console.log(err);
});

app.listen(3001, () => {
    console.log("Server runningggggg....");
})

// Mongoose and routes
app.get('/find', (req, res)=>{
    const testc= new TestCModel({
        testTile: 'ACE (ANGIOTENSIN CONVERTING ENZYME)',
        test_id: 001
    });

    testc.save()
})