import React from 'react'
import './home.scss'
import Navbar from '../navbar/Navbar'
import logo from '../../assets/logo.png'
import wpp from '../../assets/wpp.png'
import left from '../../assets/before.svg'
import right from '../../assets/next.svg'

const Home = () => {
  return (
    <div className='home'>
        <header className='home__header'>
            <section>
                <figure className='home__header__left'>
                    <img src={logo} alt="logo" />
                </figure>
                <article className='home__header__right'>
                    <small>Inglés</small>
                    <span>/</span>
                    <small>Español</small>
                    <figure>
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
        </header>
    </div>
  )
}

export default Home