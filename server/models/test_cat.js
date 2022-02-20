const mongoose = require("mongoose");
// const Schema = mongoose.Schema();


const testSchema = new mongoose.Schema({
    testName : String,
    test_id: Number,
    test_details: String,
    test_price: Number
});

const Test = mongoose.model('test_cat', testSchema);
module.exports = Test;

// const dave =  new Test({
//     testName: "to",
//     test_id: 89
// });

// console.log(dave);