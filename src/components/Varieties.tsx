import React from 'react'
import smallIcon from '../assets/small-icon.png'
import third1 from '../assets/third1.png'
import third2 from '../assets/third2.png'
import third3 from '../assets/Third3.png'
import ThirdSecCard from './innerComponents/ThirdSecCard'

const Varieties = () => {
    return (
        <>

            <div className="container mt-5 mb-5 pb-5 text-center">

                <div className="row">

                    <p style={{ color: 'red', fontSize: '13px', fontFamily: 'monospace' }} className='mt-3'>SPECIAL DISHES</p>
                    <h2 className='main-heading mt-1 mb-5'>Standout Dishes From Our Menu</h2>

                    <div className="scrollmenu d-flex carousel slide">
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-5">

                            <ThirdSecCard img={third1} name={'Fattoush salad'} price={'24.00'} />

                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 mb-5">

                            <ThirdSecCard img={third2} name={'Vegetable salad'} price={'26.00'} />

                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">

                            <ThirdSecCard img={third3} name={'Egg vegi salad'} price={'23.00'} />

                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">

                            <ThirdSecCard img={third1} name={'Fattoush salad'} price={'24.00'} />

                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12">

                            <ThirdSecCard img={third2} name={'Vegetable salad'} price={'26.00'} />

                        </div>


                        <div className="col-lg-3 col-md-6 col-sm-12">

                            <ThirdSecCard img={third3} name={'Egg vegi salad'} price={'23.00'} />

                        </div>

                    </div>
                </div>

            </div>


        </>
    )
}

export default Varieties