import { css } from '@mui/styled-engine'
import React from 'react'

export type TestCreditCardProps = {}

function TestCreditCard({}: TestCreditCardProps) {
  const copyToClipboard = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
  ) => {
    const el = e.target as Element
    const id = el.id
    const spanEl = el.parentNode?.childNodes[2] as Element
    spanEl.className = 'active'
    setTimeout(() => {
      spanEl.removeAttribute('class')
    }, 3000)

    if (id === 'successCard') {
      navigator.clipboard.writeText('4242424242424242')
      return
    } else if (id === 'failCard') {
      navigator.clipboard.writeText('4000000000009995')
      return
    } else {
      navigator.clipboard.writeText('4000002500003155')
      return
    }
  }
  return (
    <div css={testCreditCard}>
      <h5>Try checkout with a test credit card</h5>
      <div>
        <p id='successCard' onClick={copyToClipboard}>
          4242...4242
        </p>
        <span id='description'>Successful Payment</span>
        <span id='copyMsg'>copied</span>
      </div>
      <div>
        <p id='failCard' onClick={copyToClipboard}>
          4000...9995
        </p>
        <span id='description'>Failed Payment</span>
        <span id='copyMsg'>copied</span>
      </div>
      <div>
        <p id='authenticationCard' onClick={copyToClipboard}>
          4000...3155
        </p>
        <span id='description'>Requires Authentication</span>
        <span id='copyMsg'>copied</span>
      </div>
    </div>
  )
}

const testCreditCard = css`
  background: linear-gradient(#ffd9d1, #ccd0fb);
  color: black;
  padding: 1rem;
  width: 19.6rem;
  animation: slideIn 2s ease-in-out;
  position: absolute;
  right: 0;
  top: 15rem;
  border-top-left-radius: 5%;
  border-bottom-left-radius: 5%;
  h5 {
    margin: 0;
    margin-bottom: 1rem;
  }
  p {
    cursor: pointer;
    margin: 0.5rem 0;
    display: inline-block;
    width: 5.5rem;
  }
  #description {
    font-size: 0.8rem;
    margin-left: 0.5rem;
    display: inline-block;
    width: 9.6rem;
  }
  #copyMsg {
    opacity: 0;
    margin-left: 0.4rem;
    font-size: 0.8rem;
    background: rgba(255, 255, 255, 0.5);
    color: black;
    /* background: #4391eb;
    color: white; */
    padding: 0.3rem;
    border-radius: 5%;
  }
  .active {
    animation: animCopyMsg 3s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  @keyframes animCopyMsg {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes slideIn {
    from {
      right: -22rem;
    }
    to {
      right: 0rem;
    }
  }
`

export default TestCreditCard
