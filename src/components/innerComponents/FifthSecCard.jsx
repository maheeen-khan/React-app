import React from 'react'

const FifthSectionCard = (mycard) => {
    return (
        <>

            <div class="card text-center p-4 m-2" style={{ width: '18rem' }}>
                <img class="card-img mx-auto" src={mycard.img} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title fifth-card-title">{mycard.name}</h5>
                    <p class="card-text card-things">
                        {mycard.para}
                    </p>

                </div>
            </div>

        </>
    )
}

export default FifthSectionCard