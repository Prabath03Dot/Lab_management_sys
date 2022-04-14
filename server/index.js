const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors());

require("dotenv").config({ path: "./config.env" });

const Test = require('./models/test_cat');
const User = require('./models/user');
const Company = require("./models/company");
const Blog = require('./models/blog');
const Job = require('./models/jobs');


//----------------------------------------------------------------
//connection
mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(()=>{
          console.log("Monogo Running....")
      })
      .catch((err)=>{
          console.log(err);
});


 
//----------------------------------------------------------------
// Mongoose and routes

app.get('/', (req,res)=> {
    res.send("Backend Running | OKkkk");
});

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
			phoneNumber: req.body.phoneNumber,
			testName: req.body.testName,
			invoiceId: req.body.invoiceId,
			startDate: req.body.startDate,
			username: req.body.username,
			gender: req.body.gender,
			age: req.body.age
		})
		res.json({ status: 'ok'});
	}catch(err){
		console.log(err)
		res.json({ status: 'error' });
	}
	
} )

app.get('/getUser', (req, res)=>{
    User.find({}, (err, result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});


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


app.put('/updateblog/:id', (req, res) => {
	console.log(req.body, 'request body');
	const newBlogTitle = req.body.newBlogTitle;
	const newBlogAuthor = req.body.newBlogAuthor;
	const newBlogContent = req.body.newBlogContent;
	const {id} = req.params;
	const updatedBlog= { blogTitle: '', blogAuthor: '', blogContent: ''};
	updatedBlog.blogTitle = newBlogTitle;
	updatedBlog.blogAuthor = newBlogAuthor;
	updatedBlog.blogContent = newBlogContent;
	try{
		 Blog.findByIdAndUpdate( id ,updatedBlog, function(error, doc){
			if(error){
				console.log(error)
			}
			//console.log(doc)
			res.send(doc);
		})
	}catch(error){
		console.log('Error');
		console.log(error);
	}

})

app.delete('/delete/:id', (req,res) => {
	const {id} = req.params;
	Blog.findByIdAndRemove(id, function (err, docs) {
		if (err){
			console.log(err)
		}
		else{
			console.log("Remove job : ", docs);
	}})
	 res.send('deleted')
})

//Job
app.post('/JobCreate' ,  (req,res)=> {
	console.log(res.body);

	try{
		 Job.create({
			jobTitle: req.body.jobTitle,
			jobContent: req.body.jobContent,
			
		})
		res.json({ status: 'ok'});
		//console.log('Created Blog')
	}catch(err){
		console.log(err)
		res.json({ status: 'error' });
	}
})

app.get('/jobList', (req, res) => {
	Job.find((error,data) => {
		if(error){
			console.log(error)
			res.json({ status: 'error' });
		}else{
			res.json(data)
			//res.send(data)
			console.log(res.data)
		}
	})
})

app.get('/:id', (req, res) => {
	const id = req.params.id;
	// const id =  req.body._id;
	//console.log(id);

	Job.findById(id, function (err, docs) {
		if (err){
			console.log(err);
		}
		else{
			res.send(docs);
			console.log("Result : ", docs);
		}
	})
})

app.post('/editJob/:id', (req, res) => {
	// const id =  req.body._id;
// console.log(id);
	console.log(req.body, 'request body');
	const jobTitle = req.body.jobTitle;
	const jobContent = req.body.jobContent;
	const id = req.params.id;
	const updatedJob= { jobTitle: '', jobContent: ''};
	console.log(id, 'params');
	updatedJob.jobTitle = jobTitle;
	updatedJob.jobContent = jobContent;
	console.log(updatedJob, 'Job updated');
	try{
		 Job.findByIdAndUpdate( id ,updatedJob, function(error, doc){
			if(error){
				console.log(error)
			}
			//console.log(doc)
			res.send(doc);
		})
	}catch(error){
		console.log('Error');
		console.log(error);
	}

})

app.delete('/deletejob/:id', (req,res) => {
	const {id} = req.params;
	Job.findByIdAndRemove(id, function (err, docs) {
		if (err){
			console.log(err)
		}
		else{
			console.log("Removed job : ", docs);
	}})
	 res.send('deleted')
})

app.get('/gto', (req,res)=> {
    res.send("Hello wrld");
} )













//-----------------------------------------------------------------------
//stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST);

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
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server runninggg....");
})