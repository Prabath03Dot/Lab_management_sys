let stripePromise;
const getStripe = () => {
  if(!stripePromise){
    stripePromise =  loadStripe(process.env.REACT_APP_STRIPE_KEY)
  }

  return stripePromise;
}

const item = {
  price: 'price_1KSwOQD1JpqiLwVaihKkW0cK',
  quantity:1
}

const checkoutOptions = {
  lineItems: [item],
  mode: "payment",
  successUrl: `${window.location.origin}/appmnt/success?session_id={CHECKOUT_SESSION_ID}`,
  cancelUrl: `${window.location.origin}/appmnt/cancel`
}

const redirectToCheckout = async () => {
  setLoading(true);
  console.log("redirectToCheckout");

  const stripe = await getStripe();
  const { error } = await stripe.redirectToCheckout(checkoutOptions);
  console.log("Stripe checkout error", error);

  if (error) setStripeError(error.message);
  setLoading(false);
};
  
if (stripeError) alert(stripeError);

https://checkout.stripe.com/pay/ppage_1KTUdND1JpqiLwVaSkq37Itg#fidkdWxOYHwnPyd1blpxYHZxWjA0TlZxUkBBNE91dGxJclNkfHF0VkB3cHZETV9CcDQzNlFkbVZVXzF%2FZjJvbmc2d001dzxfMzJMYTdxc1Q3SWlAS3ZdZmtXYWRfNmZPfWJjNUk8SnRRMDVgNTVxVnMwbVR8aCcpJ2hsYXYnP34nYnBsYSc%2FJ2M0NzU2PTRmKGY0NGEoMWQ0MihkZ2BnKD00YTAzMWFmYDxmZmczYzBmNScpJ2hwbGEnPyc2Z2ZhPTc1NihmPDYyKDFhNDEoPDcyMihnZ2M2NDdkPWE3ZmNnMDU2NjEnKSd2bGEnPydmYGQwZjc2NigwYT0yKDFhYzEoZ2ZmZCg9NTcyMD09YWczM2YxZzxjPTYneCknZ2BxZHYnP15YKSdpZHxqcHFRfHVgJz8ndmxrYmlgWmxxYGgnKSd3YGNgd3dgd0p3bGJsayc%2FJ21xcXU%2FKippamZkaW1qdnE%2FNjU1NScpJ2lqZmRpYCc%2Fa3BpaXgl