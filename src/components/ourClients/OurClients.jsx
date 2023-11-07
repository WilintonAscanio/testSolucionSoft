import React from 'react'
import './ourClients.scss'
import clientsLeft from '../../assets/clientsLeft.png'
import clientsRight from '../../assets/clientsRight.png'

const OurClients = () => {
    return (
        <div className='ourClients' id='clients'>
            <strong>Nuestros Clientes</strong>
            <figure>
                <img src={clientsLeft} alt="clientsLeft" />
                <img src={clientsRight} alt="clientsRight" />
            </figure>
            <hr />
        </div>

    )
}

export default OurClients