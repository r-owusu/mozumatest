


const PaymentConfirmation = () => {
  const confrimed = false

  return (
    <div className="pconfirm-page">
      <div className="breadcrumb">
        <a href="/login">Login</a>
        <p>/</p>
        <a href="/booking">Booking Page</a>
        <p>/</p>
        <a href="/payment">Payment</a>
        <p>/</p>
        <p>Confirmation</p>
      </div>

      <div className="pconfirm-details">
        <div>
          <h1>Confrim Purchase Information</h1>
          <p>*Ensure that all information entered is correct</p>
        </div>

        <div>
          <div>
            <h3>Total Expenses</h3>
            <p>GHS 4,100.00</p>
          </div>

          <div>
            <div>
              <h3>Payment Method</h3>
              <p>MTN Momo</p>
            </div>

             <div>
              <h3>Guest Name</h3>
              <p>Eren Yeager</p>
            </div>

            <div>
              <h3>Email</h3>
              <p>erenyeager@gmail.com</p>
            </div>
          </div>

          <div>
            <h4>Mobile Money Number</h4>

            <input type="number"/>            
          </div>
        </div>

          <button className='bg-red'>Continue</button>
      </div>
    </div>

  )
}

export default PaymentConfirmation