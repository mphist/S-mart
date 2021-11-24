import { css } from '@mui/styled-engine'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import client from '../../utils/client'

export type PurchaseSuccessfulProps = {}

function PurchaseSuccessful({}: PurchaseSuccessfulProps) {
  const [valid, setValid] = useState<boolean | null>(null)
  const [name, setName] = useState('')
  const { search } = useLocation()
  const id = search.split('=')[1]
  useEffect(() => {
    async function checkSession() {
      const res = await client.get(`/stripe/check-session?session_id=${id}`)
      if (res.status === 200) {
        // clear bag
        sessionStorage.removeItem('bag')
        setName(res.data.name)
        setValid(true)
      } else setValid(false)
    }
    checkSession()
  }, [])
  if (valid === false)
    return (
      <div css={purchaseSuccessful}>
        <h2>This session is expired</h2>
      </div>
    )
  else if (name) {
    return (
      <div css={purchaseSuccessful}>
        <h2>{`Thank you for your purchase, ${name}!`}</h2>
      </div>
    )
  }
  return null
}

const purchaseSuccessful = css`
  text-align: center;
`

export default PurchaseSuccessful
