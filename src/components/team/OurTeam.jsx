import React from 'react'
import './ourTeam.scss'
import cohete from '../../assets/cohete.png'
import women from '../../assets/women.png'
import man from '../../assets/man.png'


const OurTeam = () => {
  return (
    <div className='ourTeam'>
      <figure className='ourTeam__left'>
        <img src={cohete} alt="cohete" />
        <figcaption>
          <strong>Nuestro equipo</strong>
          <p>Buscamos atender las necesidades estratégicas, de las organizaciones y personas para las cuales trabajamos, generando soluciones mediante el uso de plataformas digitales, ampliando su red de contactos y usuarios. </p>
        </figcaption>
      </figure>
      <figure className='ourTeam__right'>
        <section className='ourTeam__right__women'>
          <img src={women} alt="women" className='img__left' />
        </section>
        <figcaption>
          <section>
            <small>PRODUCT MANAGER</small>
            <small>UX UI DESIGNER</small>
            <small>FRONT-END ENGINEER</small>
            <small>DEVELOPER ENGINNER</small>
            <small>DATA SCIENCE</small>
          </section>
          <strong>Especialistas</strong>
        </figcaption>
        <section className='ourTeam__right__man'>
          <img src={man} alt="men" className='img__right' />

        </section>
      </figure>
    </div>
  )
}

export default OurTeam