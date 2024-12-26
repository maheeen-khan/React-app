import React from 'react'
import Button from './innerComponents/Button.jsx'
import catering from '../assets/fi-rr-salad.png'
import delivery from '../assets/fi-rr-time-fast.png'
import ordering from '../assets/fi-rr-gift.png'
import gift from '../assets/fi-rr-shopping-cart-check.png'
import FifthSectionCard from './innerComponents/FifthSecCard.jsx'

const OurServices = () => {
    return (
        <>
            <div className="container py-5">

                <div className="row mt-3 mb-3">
                    <div className="col col-lg-5 col-md-6 col-sm-12 align-content-center mb-5">
                        <p style={{ color: 'red', fontSize: '13px', fontFamily: 'monospace' }}>OUR STORY AND SERVICES</p>
                        <h2 className='main-heading my-3'>Our Culinary Journey And Services</h2>
                        <p style={{ color: '#555555' }}>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
                        {/* <button mat={'Explore'}/> */}
                        {/* <Button mat={'Explore'} className='expBtn' /> */}

                        {/* button */}

                        
                        <button href="#" class="button exp-button mt-4" style={{color:' #7808d0'}}>
                            <span class="button__icon-wrapper">
                                <svg
                                    viewBox="0 0 14 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="button__icon-svg"
                                    width="10"
                                >
                                    <path
                                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                        fill="currentColor"
                                    ></path>
                                </svg>

                                <svg
                                    viewBox="0 0 14 15"
                                    fill="none"
                                    width="10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="button__icon-svg button__icon-svg--copy"
                                >
                                    <path
                                        d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </span>
                            Explore All
                        </button>


                        {/* button end */}
                    </div>
                    <div className="col col-lg-7 col-md-6 col-sm-12">
                        <div className="both-div d-flex flex-wrap">

                            {/* <div class="card text-center p-4 m-2" style={{width: '18rem'}}>
                                <img class="card-img mx-auto" src={catering} alt="Card image cap"/>
                                    <div class="card-body">
                                        <h5 class="card-title fifth-card-title">Catering</h5>
                                        <p class="card-text card-things">Delight your guests with our flavors and  presentation</p>
                                    
                                    </div>
                            </div> */}

                            <FifthSectionCard name={'Catering'} para={'Delight your guests with our flavors and  presentation'} img={catering} />


                            {/* <div class="card text-center p-4 m-2" style={{width: '18rem'}}>
                                <img class="card-img mx-auto" src={delivery} alt="Card image cap"/>
                                    <div class="card-body">
                                        <h5 class="card-title fifth-card-title">Fast delivery</h5>
                                        <p class="card-text card-things">We deliver your order promptly to your door</p>
                                    
                                    </div>
                            </div> */}
                            <FifthSectionCard name={'Fast delivery'} para={'We deliver your order promptly to your door'} img={delivery} />

                        </div>


                        <div className="both-div d-flex flex-wrap">

                            {/* <div class="card text-center p-4 m-2" style={{ width: '18rem' }}>
                                <img class="card-img mx-auto" src={gift} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title fifth-card-title">Online Ordering</h5>
                                    <p class="card-text card-things">Delight your guests with our flavors and  presentation</p>

                                </div>
                            </div> */}
                            <FifthSectionCard name={'Online Ordering'} para={'Delight your guests with our flavors and  presentation'} img={gift} />


                            {/* <div class="card text-center p-4 m-2" style={{ width: '18rem' }}>
                                <img class="card-img mx-auto" src={ordering} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title fifth-card-title">Gift Cards</h5>
                                    <p class="card-text card-things">Give the gift of exceptional dining with Foodi Gift Cards</p>

                                </div>
                            </div> */}
                            <FifthSectionCard name={'Gift Cards'} para={'Give the gift of exceptional dining with Foodi Gift Cards'} img={ordering} />

                        </div>


                    </div>
                </div>

            </div>
        </>
    )
}

export default OurServices