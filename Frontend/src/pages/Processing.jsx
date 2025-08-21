import React from 'react'

const Processing = () => {
  return (
    <div className="processing">
      <div className="breadcrumb">
        <a href="/login">Login</a>
        <p>/</p>
        <a href="/booking">Booking Page</a>
        <p>/</p>
        <a href="/payment">Payment</a>
        <p>/</p>
        <a href="/payment-confirmation">Confirmation</a>
        <p>/</p>
        <p>Processing</p>
      </div>

      <div className="pconfirm-inner">
        <img src='../../public/assets/icons/loading.png' style={{ width: '70px' }} />
        <h2>Your payment is being processed</h2>

        <div className='p-prompt'>
          <h3>Still not received your payment prompt?</h3>
          <h5>Follow these steps:</h5>
          <ol>
            <li>Dail *170# and select option 6, <b>My Wallet.</b></li>
            <li>Select option three for <b>My Approvals.</b></li>
            <li>Enter PIN to access your Pending Approval list.</li>
            <li>Select pending transaction to approve.</li>
            <li>Select <b>Yes</b> to confirm.</li>
          </ol>
        </div>

        <div className='d-flex align-items-center justify-content-end' style={{width: '50%'}}>
          <a href="/payment" className={`linkButton bg-red`}>Back to payment page</a>
        </div>
      </div>
    </div>

  )
}

export default Processing;