import React from 'react'
import fourthImg from '../assets/Mask group.png'
const ReviewSection = () => {
  return (
    <>
    
    <div className="container">
        <div className="row">
            <div className="col">
                <img src={fourthImg} alt="" width={300}/>
            </div>
            <div className="col">
                <p>Testimonials</p>
                <h2>What Our Customers Say About Us</h2>
                <p>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
                <div>
                    <div></div>
                    <div>
                        <h6>Customer Feedback</h6>
                        <p>4.9  (18.6k Reviews)</p>

                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default ReviewSection