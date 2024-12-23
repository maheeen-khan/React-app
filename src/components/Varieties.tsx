import React from 'react'
import smallIcon from '../assets/small-icon.png'
import third1 from '../assets/third1.png'
import third2 from '../assets/third2.png'
import third3 from '../assets/Third3.png'
const Varieties = () => {
    return (
        <>

            <div className="container mt-5 mb-5 pb-5 text-center">

                <div className="row">

                    <p style={{ color: 'red', fontSize: '13px', fontFamily: 'monospace' }} className='mt-3'>SPECIAL DISHES</p>
                    <h2 className='main-heading mt-1 mb-5'>Standout Dishes From Our Menu</h2>

                    <div className="scrollmenu d-flex carousel slide">
                        <div className="col-lg-3 col-md-3 col-sm-12 mb-5">

                            <div className="myCard text-center">
                                <a className="card1" href="#">
                                    {/* <p>This is heading</p>
                                <p class="small">Card description with lots of great facts and interesting details.</p> */}
                                    <img src={third1} className="card-img-top" width={50} />

                                    <div className="card-body">
                                        <br />
                                        <h5 className="card-title">Fattoush salad</h5>
                                        {/* <p class="card-text">Description of the item</p> */}
                                        <p><span style={{ color: 'red' }}>$</span>24.00</p>
                                    </div>
                                    <div className="go-corner">
                                        <div className="go-arrow">
                                            <img src={smallIcon} alt="" width={10} />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12 mb-5">
                            <div className="myCard text-center">
                                <a className="card1" href="#">
                                    {/* <p>This is heading</p>
                                <p class="small">Card description with lots of great facts and interesting details.</p> */}
                                    <img src={third2} className="card-img-top" width={50} />

                                    <div className="card-body">
                                        <br />
                                        <h5 className="card-title">Fattoush salad</h5>
                                        {/* <p class="card-text">Description of the item</p> */}
                                        <p><span style={{ color: 'red' }}>$</span>24.00</p>
                                    </div>
                                    <div className="go-corner">
                                        <div className="go-arrow">
                                            <img src={smallIcon} alt="" width={10} />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="myCard text-center">
                                <a className="card1" href="#">
                                    {/* <p>This is heading</p>
                                <p class="small">Card description with lots of great facts and interesting details.</p> */}
                                    <img src={third3} className="card-img-top" width={50} />

                                    <div className="card-body">
                                        <br />
                                        <h5 className="card-title">Fattoush salad</h5>
                                        {/* <p class="card-text">Description of the item</p> */}
                                        <p><span style={{ color: 'red' }}>$</span>24.00</p>
                                    </div>
                                    <div className="go-corner">
                                        <div className="go-arrow">
                                            <img src={smallIcon} alt="" width={10} />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="myCard text-center">
                                <a className="card1" href="#">
                                    {/* <p>This is heading</p>
                                <p class="small">Card description with lots of great facts and interesting details.</p> */}
                                    <img src={third1} className="card-img-top" width={50} />

                                    <div className="card-body">
                                        <br />
                                        <h5 className="card-title">Fattoush salad</h5>
                                        {/* <p class="card-text">Description of the item</p> */}
                                        <p><span style={{ color: 'red' }}>$</span>24.00</p>
                                    </div>
                                    <div className="go-corner">
                                        <div className="go-arrow">
                                            <img src={smallIcon} alt="" width={10} />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="myCard text-center">
                                <a className="card1" href="#">
                                    {/* <p>This is heading</p>
                                <p class="small">Card description with lots of great facts and interesting details.</p> */}
                                    <img src={third1} className="card-img-top" width={50} />

                                    <div className="card-body">
                                        <br />
                                        <h5 className="card-title">Fattoush salad</h5>
                                        {/* <p class="card-text">Description of the item</p> */}
                                        <p><span style={{ color: 'red' }}>$</span>24.00</p>
                                    </div>
                                    <div className="go-corner">
                                        <div className="go-arrow">
                                            <img src={smallIcon} alt="" width={10} />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>


                        <div className="col-lg-3 col-md-3 col-sm-12">
                            <div className="myCard text-center">
                                <a className="card1" href="#">
                                    {/* <p>This is heading</p>
                                <p class="small">Card description with lots of great facts and interesting details.</p> */}
                                    <img src={third1} className="card-img-top" width={50} />

                                    <div className="card-body">
                                        <br />
                                        <h5 className="card-title">Fattoush salad</h5>
                                        {/* <p class="card-text">Description of the item</p> */}
                                        <p><span style={{ color: 'red' }}>$</span>24.00</p>
                                    </div>
                                    <div className="go-corner">
                                        <div className="go-arrow">
                                            <img src={smallIcon} alt="" width={10} />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


        </>
    )
}

export default Varieties