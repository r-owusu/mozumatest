import React from 'react'
import { useState } from 'react'
import { useNavigate} from 'react-router-dom'

const Payments = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    phoneNumber: '',
    selectedPaymentMethod: '',
    agreeToTerms: false
  });

  const navigate = useNavigate();
  const moveToConfirmation = () => {
    navigate('/payment-confirmation')
  }

  const handleContinue = () => {
    // Optional: Add validation before navigation
    if (!paymentDetails.phoneNumber.trim()) {
      alert('Please enter your phone number');
      return;
    }
    if (!paymentDetails.selectedPaymentMethod) {
      alert('Please select a payment method');
      return;
    }
    if (!paymentDetails.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }

    console.log(paymentDetails)

    moveToConfirmation();
  };

  return (
    <div className='payment'>
      <div className="breadcrumb">
        <a href="/login">Login</a>
        <p>/</p>
        <a href="/booking">Booking Page</a>
        <p>/</p>
        <p>Payment</p>
      </div>

      <div className="pconfirm-details">
        <h1 style={{ marginTop: '-30px', marginBottom: '20px' }}>Payment Details</h1>


        <div className="other-expenses" style={{ backgroundColor: 'transparent', marginTop: '-20px', width: '80%' }}>
          <p>Name <h3 style={{ fontWeight: 'normal' }}>Eren Yeager</h3></p>
          <p>Email <h3 style={{ fontWeight: 'normal' }}>erenyenger@gmail.com</h3></p>
          <p>Total Expenses <h3 style={{ fontSize: '25px' }}>GHS 4,100.00</h3></p>
        </div>

        <div>
          <div className="momo-num">
            <h4 style={{ marginBottom: '3px', fontSize: '18px', fontWeight: 'bold', marginTop: '-40px' }}>Phone No.</h4>

            <input
              type="tel"
              value={paymentDetails.phoneNumber}
              onChange={(e) => setPaymentDetails({ ...paymentDetails, phoneNumber: e.target.value })}
              placeholder="Enter your phone number"
            />
          </div>

          <div className='mb-5'>
            <h2>Payment Methods</h2>

            <div className='payment-method' onClick={() => setPaymentDetails({ ...paymentDetails, selectedPaymentMethod: 'mtn-momo' })}>
              <img src='../../public/assets/icons/momo.jpg' />
              <p>MTN Momo</p>
              <input type='radio'
                name='paymentMethod'
                value='mtn-momo'
                checked={paymentDetails.selectedPaymentMethod === 'mtn-momo'}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, selectedPaymentMethod: e.target.value })} />
            </div>

            <div className='payment-method' onClick={() => setPaymentDetails({ ...paymentDetails, selectedPaymentMethod: 'at-money' })}>
              <img src='../../public/assets/icons/at-money.jpg' />
              <p>AT Money</p>
              <input type='radio'
                name='paymentMethod'
                value='at-money'
                checked={paymentDetails.selectedPaymentMethod === 'at-money'}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, selectedPaymentMethod: e.target.value })} />
            </div>

            <div className='payment-method' onClick={() => setPaymentDetails({ ...paymentDetails, selectedPaymentMethod: 'telecel-cash' })}>
              <img src='../../public/assets/icons/telecel.jpg' />
              <p>Telecel Cash</p>
              <input type='radio'
                name='paymentMethod'
                value='telecel-cash'
                checked={paymentDetails.selectedPaymentMethod === 'telecel-cash'}
                onChange={(e) => setPaymentDetails({ ...paymentDetails, selectedPaymentMethod: e.target.value })} />
            </div>
          </div>
        </div>

        <div className='mb-4 mt-4'>
          <input id='agreeCheckbox' type='checkbox' checked={paymentDetails.agreeToTerms}
          onChange={(e) => setPaymentDetails({...paymentDetails, agreeToTerms: e.target.checked})}/>
          <label htmlFor='agreeCheckbox' className='mx-2'>I agree to Terms and Conditions, Refund Policy and Privacy Policy.</label>
        </div>

        <button className='bg-green' onClick={handleContinue}>Continue</button>
      </div>
    </div>
  )
}

export default Payments