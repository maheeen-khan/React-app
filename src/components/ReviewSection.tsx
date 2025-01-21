import React from 'react'
import fourthImg from '../assets/Mask group.png'
import star from '../assets/star.png'
import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/client3.png'

const ReviewSection = () => {
    return (
        <>

            <div className="container my-5 fourth-cont">
                <div className="row pt-5">
                    <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
                        <div className="img-wrap mb-4">
                            <img src={fourthImg} alt="" width={300} />

                        </div>


                        <div className="ms-auto speech-bubble d-flex justify-content-center align-items-center">
                            <p>Our Best Chef 😁</p>
                        </div>



                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 d-flex flex-wrap test">
                        <div className="col-wrap">
                            <p style={{ color: 'red', fontSize: '13px', fontFamily: 'monospace' }} className='mb-5'>TESTIMONIALS</p>
                            <h2 className='main-heading mb-4'>What Our Customers Say About Us</h2>
                            <p style={{ color: 'grey' }}>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
                        </div>
                        <div className='mt-5 d-flex flex-wrap reviews justify-content-center'>
                            <div className=''>
                                <img src={client3} alt="" width={50} />
                                <img src={client2} alt="" width={50} className='abs' />
                                <img src={client1} alt="" width={50} className='abs2' />
                            </div>
                            <div className='cust-feed'>
                                <h6>Customer Feedback</h6>
                                <p> <img src={star} alt="" width={18} className='me-2' /><span className='fw-bold'>4.9</span>   <span style={{ color: '#807E7E' }}>(18.6k Reviews)</span></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ReviewSection