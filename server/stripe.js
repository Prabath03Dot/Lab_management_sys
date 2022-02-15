// // This is your test secret API key.
// const stripe = require('stripe')('sk_test_51KStWED1JpqiLwVa3sArEo487HRaeNZaLw0Q2IkUApS1lPZC2RsXE4tzLYGMjWVJ7QK6QjDJ1hM1ynI1DLM3v8XX00z5UYpTLU');
// const express = require('express');
// const app = express();
// app.use(express.static('public'));

// const YOUR_DOMAIN = 'http://localhost:5000';

// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: 'price_1KSwOQD1JpqiLwVaihKkW0cK',
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${YOUR_DOMAIN}/?success=true`,
//     cancel_url: `${YOUR_DOMAIN}?canceled=true`,
//   });

//   res.redirect(303, session.url);
// });

// app.listen(5000, () => console.log('Running on port 5000'));