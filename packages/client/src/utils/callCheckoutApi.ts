import client from './client'
import { ShoppingBag } from './shoppingBag'

export default async function callCheckoutApi(shoppingBag: ShoppingBag | {}) {
  const { data: redirectionUrl } = await client.post(
    '/stripe/create-checkout-session',
    {
      shoppingBag,
    }
  )
  window.location.href = redirectionUrl
}
