import React, { useState } from 'react'
import './navbar.scss'
import menu from '../../assets/I3D/menu.png'
import iconClose from '../../assets/I3D/close.png'

const Navbar = ({ isVisible }) => {
    const [hamburguer, setHamburguer] = useState('hidden')
    const [close, setClose] = useState('closeMenu')
    const [open, setOpen] = useState('')

    const openMenu = (icon) => {
        if (icon === "hamburguer") {
            setHamburguer('closeMenu')
            setClose('hidden')
            setOpen('open')

        }
        else {
            setHamburguer('hidden')
            setClose('closeMenu')
            setOpen('')
        }

    }

    return (
        <>
            <nav className={open}>
                <ul>
                    <img src={iconClose} alt="cerrar" className={close} onClick={() => openMenu("close")} />
                    <li><a href="#services">Nuestros Servicios</a></li>
                    <li><a href="#clients">Proyectos</a></li>
                    <li><a href="#team">Equipo</a></li>
                    <li><a href="#contactUs">Contáctanos</a></li>
                </ul>
                {!isVisible ? <section id='language'>
                    <small>Inglés</small>
                    <span>/</span>
                    <small className='selected'>Español</small>
                </section> : <></>}
            </nav>
            <img src={menu} alt="hamburguer" className={hamburguer} onClick={() => openMenu("hamburguer")} />

        </>
    )
}

export default Navbar