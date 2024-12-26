import React from 'react'
import smallIcon from '../../assets/small-icon.png'


const ThirdSecCard = (props) => {
    return (
        <>

            <div className="myCard text-center">
                <a className="card1" href="#">

                    <img src={props.img} className="card-img-top" width={50} />

                    <div className="card-body">
                        <br />
                        <h5 className="card-title">{props.name}</h5>

                        <p><span style={{ color: 'red' }}>$</span>{props.price}</p>
                    </div>
                    <div className="go-corner">
                        <div className="go-arrow">
                            <img src={smallIcon} alt="" width={10} />
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}

export default ThirdSecCard