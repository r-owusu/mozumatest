import React from 'react'

const PaymentConfirmation = () => {
  return (
    <div className="pconfirm-page">
      <div className="breadcrumb">
        <a href="/login">Login</a>
        <p>/</p>
        <a href="/booking">Booking Page</a>
        <p>/</p>
        <a href="/payment">Payment</a>
        <p>/</p>
        <a href="/payment-confirmation">Confirmation</a>
        <p>/</p>
        <a href="/processing">Processing</a>
        <p>/</p>
        <p>Processing</p>
      </div>

      <div className="pconfirm-inner">
        <img src='../../public/assets/images/suites/guests-icon.png' />
        <h2>Your payment is being processed</h2>
        
        <div className='confirmation-details'>
          <p>Still not received your payment prompt?</p>
          <p>Follow these steps;</p>

          <ol>
            {/* <li>Dail *170# and select option 6, <br>My Wallet.</br></li> */}
            {/* <li>Select option 3 for <br>My Approvals.</br> </li> */}
            <li>Enter PIN to access your Pending Approval list.</li>
            <li>Select pending transaction to approve.</li>
            {/* <li>Select <br>Yes</br> to confirm.</li> */}
          </ol>
        </div>

        <a href="/booking" className={`linkButton bg-green`}>Payment Complete</a>
      </div>
    </div>
  )
}

export default PaymentConfirmation