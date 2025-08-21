import React from 'react'


const Payments = () => {
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
        <h1>All Fields Required</h1>

        <div>
          <h1>Name <p>Eren Yeager</p></h1>
          <h1>Email <p>eren$$$@gmail.com</p></h1>

          <div>
            <h3>Phone Number</h3>

            <div>
              <select name="" id="">
                <option>GH +233</option>
                <option>NG +234</option>
              </select>

              <input />
            </div>
          </div>

          <div>
            <h2>Payment Methods</h2>

            <div>
              <img src='../../public/assets/icons/momo.png' />
              <p>Pay through MTN Momo</p>
              <input type='radio' />
            </div>

            <div>
              <img src='../../public/assets/icons/momo.png' />
              <p>Pay through MTN Momo</p>
              <input type='radio' />
            </div>

            <div>
              <img src='../../public/assets/icons/momo.png' />
              <p>Pay through MTN Momo</p>
              <input type='radio' />
            </div>
          </div>
        </div>

        <div>
          <input type='checkbox' />
          <label>I agree to Terms and Conditions, Refund Policy and Privacy Policy.</label>
        </div>

        <button className='bg-red'>Continue</button>
      </div>
    </div>
  )
}

export default Payments