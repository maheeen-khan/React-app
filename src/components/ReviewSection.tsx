import React from 'react'
import fourthImg from '../assets/Mask group.png'
import star from '../assets/star.png'

const ReviewSection = () => {
    return (
        <>

            <div className="container mt-5 fourth-cont">
                <div className="row pt-5">
                    <div className="col mt-5">
                        <div className="img-wrap">
                            <img src={fourthImg} alt="" width={300} />

                        </div>
                      

                        <div className="ms-auto speech-bubble d-flex justify-content-center align-items-center">
                            <p>Our Best Chef 😁</p>
                        </div>
                       
                    
                        
                    </div>
                    <div className="col">
                        <p style={{ color: 'red' }} className='mb-5'>TESTIMONIALS</p>
                        <h2 className='main-heading mb-4'>What Our Customers Say About Us</h2>
                        <p style={{color:'grey'}}>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
                        <div className='mt-5'>
                            <div></div>
                            <div>
                                <h6>Customer Feedback</h6>
                                <p> <img src={star} alt="" width={18} className='me-2'/><span className='fw-bold'>4.9</span>   <span style={{color:'#807E7E'}}>(18.6k Reviews)</span></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ReviewSection