import React from 'react'
import './style.css'

import FormLogo from './../../../assets/images/form-logo.png'
import SuccessTick from './../../../assets/images/success-tick.png'

const RegistrationSuccess = () => {
  return (
    <section className="section-success">
      <div className="wrapper-success">
        <div className="success-form-heading">
          <img src={FormLogo} alt="form-logo" />
        </div>
        <div className="form-body">
          <div className="success-tick-container">
            <img src={SuccessTick} alt="success-tick" />
          </div>
          <div className="success-heading">
            Thank you for registering for the Marine Innovation Seminar 2023.
          </div>

          <div className="success-text-content">
            We are thrilled to have you join us for this exciting event. Your
            registration has been successfully received, and we acknowledge your
            commitment to expanding your knowledge in this transformative field.
          </div>

          <div className="venue-description">
            <div classsName="date-details">
              <span className="cls-bold">Date:</span>
              <span className="cls-text">27th July 2023</span>
            </div>

            <div classsName="venue-details">
              <span className="cls-bold">Venue:</span>
              <span className="cls-text">Tower Club, Singapore.</span>
            </div>
          </div>

          <div className="sales-details cls-text">
            Should you have any questions or require further assistance, please
            feel free to reach us at
            <span className="cls-bold">”sales@marinov.com.sg”.</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegistrationSuccess
