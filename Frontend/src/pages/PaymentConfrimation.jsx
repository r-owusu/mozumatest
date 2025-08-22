


const PaymentConfirmation = () => {
  const confrimed = false

  return (
    <div className="pconfirm-page">
      <div className="breadcrumb">
        <a href="/booking">Booking Page</a>
        <p>/</p>
        <p>Payment Confirmation</p>
      </div>

      <div className="pconfirm-inner">
        <img src='../../public/assets/images/suites/guests-icon.png' />
        <h1>{confrimed ? 'Payment Received': 'Transaction Failed'} </h1>
        <p>Check Email for confirmation</p>

        {confrimed? (
          <a href="/" className={`linkButton bg-green`}>Back to homepage</a>
        ): (
          <a href="/payment" className={`linkButton bg-red`}>Back to payment page</a>
        )}
      </div>
    </div>

  )
}

export default PaymentConfirmation