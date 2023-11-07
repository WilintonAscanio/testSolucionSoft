import React, { useEffect, useState } from 'react'
import Components3D from '../3d/Components3D'
import Navbar from '../navbar/Navbar'
import logo from '../../assets/logo.png'
import wpp from '../../assets/wpp.png'
import left from '../../assets/before.svg'
import right from '../../assets/next.svg'

const Header = () => {

    return (
        <header className='home__header'>
            <section>
                <figure className='home__header__left'>
                    <img src={logo} alt="logo" />
                </figure>
                <article className='home__header__right'>
                    <small>Inglés</small>
                    <span>/</span>
                    <small className='selected'>Español</small>

                    <figure className='contactBtn__top'>
                        <small>Contáctanos</small>
                        <img src={wpp} alt="wpp" />
                    </figure>
                </article>
            </section>
            <Navbar />
            <article className='home__header__details'>
                <small>WEBSITE</small>
                <span>-</span>
                <small>APPS</small>
                <span>-</span>
                <small>BRANDING</small>
            </article>
            <h1>Creativity</h1>

            <figure className='home__header__arrows'>
                <img src={left} alt="left" />
                <img src={right} alt="right" />
            </figure>
            <figure className='contactBtn__bottom' id='contactBtn__bottom'>
                <small>Contáctanos</small>
                <img src={wpp} alt="wpp" />
            </figure>

            <Components3D />

        </header>
    )
}

export default Header