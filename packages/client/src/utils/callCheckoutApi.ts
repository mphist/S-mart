import client from './client'
import { ShoppingBag } from './shoppingBag'

export default async function callCheckoutApi(shoppingBag: ShoppingBag | {}) {
  console.log(shoppingBag)
  const { data: redirectionUrl } = await client.post(
    '/stripe/create-checkout-session',
    {
      shoppingBag,
    }
  )
  window.location.href = redirectionUrl
}
