import React from 'react'
import foodItem1 from '../assets/burger.png'
import foodItem2 from '../assets/food2.png'
import foodItem3 from '../assets/food3.png'
import SecondSecCard from './innerComponents/SecondSecCard'

const PopularCategories = () => {
    return (
        <>

            <div className="container">
                <div className="row text-center d-flex justify-content-evenly">

                    <p className='sec2-para mt-5' style={{ color: 'red', fontSize: '13px', fontFamily: 'monospace' }}>Customer Favourite</p>
                    <h2 className='main-heading mb-5'>Popular Categories</h2>

                    <div className="col-lg-3 col-md-6 col-sm-12 my-3" data-aos="fade-down" data-aos-easing="ease-in">

                        <SecondSecCard name={'Main Dish'} var={'86 dishes'} img={foodItem1} imgWidth={120} />

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 my-3" data-aos="fade-up" data-aos-easing="ease-in">

                        <SecondSecCard name={'Break Fast'} var={'12 break fast'} img={foodItem2} imgWidth={85}/>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 my-3" data-aos="fade-down" data-aos-easing="ease-in">

                        <SecondSecCard name={'Dessert'} var={'48 dessert'} img={foodItem3} imgWidth={85}/>

                    </div>

                </div>
            </div>

        </>
    )
}

export default PopularCategories