const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());

const Test = require('./models/test_cat');
const User = require('./models/user');
const Company = require("./models/company");
const Blog = require('./models/blog');


//----------------------------------------------------------------
//connection
mongoose.connect('mongodb+srv://dbuser:Pass9@cluster0.pisst.mongodb.net/labdatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
      .then(()=>{
          console.log("Monogo Running....")
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

app.post('/createUser', async (req,res) => {
	console.log(req.body);
	// const newUser = new UserModel(user);
	// await newUser.save();
	try{
		await User.create({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			phoneNumber: req.body.phoneNumber
		})
		res.json({ status: 'ok'});
	}catch(err){
		console.log(err)
		res.json({ status: 'error' });
	}
	
} )

app.post('/createSubs', async (req,res) => {
	console.log(req.body);
	// const newUser = new UserModel(user);
	// await newUser.save();
	try{
		await Company.create({
			testlabName: req.body.testlabName,
			subsPlan: req.body.subsPlan,
			address: req.body.address,
			email: req.body.email,
			phoneNumber: req.body.phoneNumber
		})
		res.json({ status: 'ok'});
		console.log('subscription created::')
	}catch(err){
		console.log(err)
		res.json({ status: 'error' });
	}
	
} )

app.post('/createBlog' , async (req,res)=> {
	console.log(res.body);

	try{
		await Blog.create({
			blogTitle: req.body.blogTitle,
			blogAuthor: req.body.blogAuthor,
			blogContent: req.body.blogContent,
		})
		res.json({ status: 'ok'});
		//console.log('Created Blog')
	}catch(err){
		console.log(err)
		res.json({ status: 'error' });
	}
})

app.get('/blogList', (req, res) => {
	Blog.find((error,data) => {
		if(error){
			console.log(error)
			res.json({ status: 'error' });
		}else{
			res.json(data)
			console.log(res.data)
		}
	})
})

app.get('/gto', (req,res)=> {
    res.send("Hello wrld");
} )


//-----------------------------------------------------------------------
//stripe
const stripe = require('stripe')('sk_test_51KStWED1JpqiLwVa3sArEo487HRaeNZaLw0Q2IkUApS1lPZC2RsXE4tzLYGMjWVJ7QK6QjDJ1hM1ynI1DLM3v8XX00z5UYpTLU');

app.post("/payment", cors(), async (req, res) => {
	console.log(req.body);
	let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "MediTech",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
		console.log(req.body);
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

app.post("/bulkpayment", cors(), async (req, res) => {
	console.log(req.body);
	let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "MediTech",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Subscribtion Payment successful",
			success: true
		})
		console.log(req.body);
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Subscribtion Payment failed",
			success: false
		})
	}
})




//-----------------------------------------
//app listen
app.listen(5000, () => {
    console.log("Server runninggg....");
})