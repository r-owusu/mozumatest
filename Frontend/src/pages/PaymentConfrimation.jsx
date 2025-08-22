import { useState } from "react"
import { useNavigate } from "react-router-dom";

const PaymentConfirmation = () => {
  const confrimed = false
  const [momoNumber, setMomoNumber] = useState('');

  const navigate = useNavigate()
  const toPayed = () => {
    if (!momoNumber.trim()) {
      alert('Please enter your momo number');
      return;
    }

    console.log(momoNumber)
    
    navigate('/payment-received')
  }

  return (
    <div className="confirmation-page">
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
          <p style={{ color: 'red', marginTop: '-5px', marginBottom: '35px' }}>*Ensure that all information entered is correct</p>
        </div>

        <div>
          <div className="top-expense">
            <p>Total Expenses</p>
            <h3>GHS 4,100.00</h3>
          </div>

          <div className="other-expenses">
            <p>Payment Method <h3>MTN MOMO</h3></p>
            <p>Guest Name <h3>Eren Yeager</h3></p>
            <p>Email <h3>erenyenger@gmail.com</h3></p>
          </div>

          <div className="momo-num mt-5">
            <h4>MOMO Number</h4>

            <input value={momoNumber} onChange={(e) => setMomoNumber(e.target.value)} />
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-center w-100 mt-8">
          <button className='bg-red' onClick={toPayed}>Continue</button>
        </div>
      </div>
    </div>

  )
}

export default PaymentConfirmation