


const PaymentReceived = () => {
  const confirmed = true

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
        <p>Payment Confirmation</p>
      </div>

      <div className="pconfirm-inner">
        {confirmed ?
          <img src='../../public/assets/icons/checkmark.png' />
          :
          <img src='../../public/assets/icons/multiply.png' />
        }
        <h1>{confirmed ? 'Payment Received' : 'Transaction Failed'} </h1>
        {confirmed && <p>Check Email for confirmation</p>}

        {confirmed ? (
          <a href="/" className={`linkButton bg-green`}>Back to homepage</a>
        ) : (
          <a href="/payment" className={`linkButton bg-red`}>Back to payment page</a>
        )}
      </div>
    </div>

  )
}

export default PaymentReceived