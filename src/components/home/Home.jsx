import React from 'react'
import './home.scss'
import Components3D from '../3d/Components3D'
import OurServices from '../ourServices/OurServices'
import Header from '../header/Header'

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Components3D />
            <main>
                <OurServices />
            </main>
        </div>

    )
}

export default Home