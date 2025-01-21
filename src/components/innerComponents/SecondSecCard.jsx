import React from 'react'
import Button from './Button.jsx'

const SecondSecCard = (props) => {
    return (
        <>
            <div class="card p-3 mx-auto" style={{ width: '18rem' }}>
                <div className="img mx-auto">
                    <img class="card-img-top" src={props.img} alt="Burger" width={props.imgWidth} className='mx-auto img-fluid' style={{ marginTop: '15px' }} />
                </div>
                <div class="card-body">

                    <h5 class="card-title">{props.name}</h5>

                    <p class="card-text">{props.var}</p>

                    {/* button */}

                    <Button mat={'Order Now!'} />

                </div>

            </div>
        </>
    )
}

export default SecondSecCard