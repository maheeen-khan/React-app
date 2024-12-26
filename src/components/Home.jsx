import React from 'react'
import './style.css'
import girl from '../assets/girl.png'
import noodles from '../assets/noodles.png'
import playBtn from '../assets/play-button.png'
import ratings from '../assets/ratings.png'

const Home = () => {
    return (
        <>
            <div className="container">
                <div className="row mt-5 first-row">
                    <div className="col-lg-4 col-md-6 col-sm-12  order-lg-2 girl mx-auto">
                        <div className="homeImg-wrapper mt-5">
                            <img src={girl} alt="girl" width={450} />
                        </div>

                        <div className="popup p-2">
                            <div className="row1">
                                <div className="col">
                                    <img src={noodles} alt="" width={60} className='noodles'/>
                                </div>
                                <div className="col" style={{fontSize:'13px'}}>
                                    <p className='mb-0'>Spicy noodles</p>
                                    <img src={ratings} alt="" width={60} style={{borderRadius:'15px'}}/>
                                    <p style={{fontWeight:'bold'}}><span style={{color:'red'}}>$</span>18.00</p>
                                </div>
                            </div>
                        </div>

                        
                    </div>

                    <div className="col-lg-6 col-md-6 col-sm-12 order-lg-1  align-content-center part1">
                        <h2 className='main-heading mb-4'>Dive into Delights Of Delectable <span className='green'>Food</span></h2>

                        <p className='main-para mb-5'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>

                        <a class="fancy" href="#">
                            <span class="top-key"></span>
                            <span class="text">Order Now</span>
                            <span class="bottom-key-1"></span>
                            <span class="bottom-key-2"></span>
                        </a>

                        {/* <span className='ms-5'> Watch Video <img src={playBtn} alt="playBtn" width={25} className='play' />
                       </span> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home