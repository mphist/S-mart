import { Router } from 'express'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_KEY!, { apiVersion: '2020-08-27' })

export default function stripeRoute(router: Router) {
  router.post('/create-checkout-session', async (req, res) => {
    const { totalQuantity, totalPrice, items } = req.body.shoppingBag
    const itemsArr: Stripe.Checkout.SessionCreateParams.LineItem[] = []
    Object.entries(items).map((item: any) => {
      const lineItem = {
        price_data: {
          currency: 'usd',
          product_data: {
            name: item[1].name,
            images: [item[1].image],
          },
          unit_amount: item[1].price * 100,
        },
        quantity: item[1].quantity,
      }
      itemsArr.push(lineItem)
    })

    // const min = Math.ceil(4e6)
    // const max = Math.floor(5e6)
    // const id = Math.floor(Math.random() * (max - min) + min)
    const session = await stripe.checkout.sessions.create({
      line_items: itemsArr as Stripe.Checkout.SessionCreateParams.LineItem[],
      mode: 'payment',
      success_url: `http://localhost:3000/thank-you-for-your-purchase?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: 'http://localhost:3000',
    })

    res.send(session.url)
  })

  router.get('/check-session', async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(
      req.query.session_id as string
    )
    const customer = await stripe.customers.retrieve(session.customer as string)

    if (customer) res.status(200).send(customer)
    else res.status(404).send('customer not found')
  })

  return router
}