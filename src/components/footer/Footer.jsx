import React from 'react'
import './footer.scss'
import wpp from '../../assets/wppBig.png'
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer>
            <section>
                <figure>
                    <img src={logo} alt="logo" />
                </figure>
                <strong>UBICACIÓN <span>Bogotá. Colombia</span></strong>
                <strong>CORREO ELECTRÓNICO <span>Contacto@Solucionsoft.Com</span></strong>
                <article>
                    <strong>TELÉFONOS</strong>
                    <small>(057) 301 234 81 30 <span>(057) 300 631 59 63</span></small>
                </article>

            </section>
            <figure className='wpp__logo'>
                <img src={wpp} alt="wpp" />
            </figure>
        </footer>
    )
}

export default Footer