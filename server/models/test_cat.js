const mongoose = require("mongoose");
const Schema = mongoose.Schema();

const testSchema = new Schema({
    testTile: String,
    test_id: Number
});

const TestCModel = mongoose.model('test_cat', testSchema);
module.exports = TestCModel;