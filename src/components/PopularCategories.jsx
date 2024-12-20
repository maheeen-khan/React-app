import React from 'react'
import foodItem1 from '../assets/burger.png'
import foodItem2 from '../assets/food2.png'
import foodItem3 from '../assets/food3.png'

const PopularCategories = () => {
    return (
        <>

            <div className="container">
                <div className="row text-center d-flex justify-content-evenly">

                    <p className='sec2-para mt-5'>Customer Favourite</p>
                    <h2 className='main-heading mb-5'>Popular Categories</h2>

                    <div className="col-lg-3 col-md-6 col-sm-12 my-3">
                        <div class="card p-3" style={{ width: '18rem' }}>
                            <div className="img mx-auto">
                                <img class="card-img-top" src={foodItem1} alt="Burger image" width={120} className='mx-auto img-fluid' style={{ marginTop: '15px' }} />
                            </div>
                            <div class="card-body">

                                <h5 class="card-title">Main Dish</h5>

                                <p class="card-text">(86 dishes)</p>

                                {/* button */}

                                <button class="button mx-auto mt-4">
                                    Order Now!
                                    <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>

                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 my-3">
                        <div class="card p-3" style={{ width: '18rem' }}>
                            <div className="img mx-auto">
                                <img class="card-img-top" src={foodItem2} alt="Burger image" width={85} className='mx-auto img-fluid' style={{ marginTop: '15px' }} />
                            </div>
                            <div class="card-body">

                                <h5 class="card-title">Break Fast</h5>

                                <p class="card-text">(12 break fast)</p>

                                {/* button */}

                                <button class="button mx-auto mt-4">
                                    Order Now!
                                    <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>

                            </div>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 my-3">
                        <div class="card p-3" style={{ width: '18rem' }}>
                            <div className="img mx-auto">
                                <img class="card-img-top" src={foodItem3} alt="Burger image" width={85} className='mx-auto img-fluid' style={{ marginTop: '15px' }} />
                            </div>
                            <div class="card-body">

                                <h5 class="card-title">Dessert</h5>

                                <p class="card-text">(48 dessert)</p>

                                {/* button */}

                                <button class="button mx-auto mt-4">
                                    Order Now!
                                    <svg class="icon" viewBox="0 0 24 24" fill="currentColor">
                                        <path
                                            fill-rule="evenodd"
                                            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                            clip-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default PopularCategories