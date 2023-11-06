import React from 'react'
import './ourServices.scss'
import website from '../../assets/website.png'
import mobile from '../../assets/mobile.png'
import pencil from '../../assets/pencil.png'
import idea from '../../assets/idea.png'
import digital from '../../assets/digital.png'
import like from '../../assets/like.png'
import wpp from '../../assets/wpp.png'
import views from '../../assets/views.png'


const services = [
  {
    name: 'Website',
    img: website
  },
  {
    name: 'Apps',
    img: mobile
  },
  {
    name: 'Banding',
    img: pencil
  },
  {
    name: 'Start Up',
    img: idea
  },
  {
    name: 'M. Digital',
    img: digital
  },
  {
    name: 'Social Media',
    img: like
  },
]

const OurServices = () => {
  return (
    <div className='ourServices'>
      <h3>Nuestros Servicios</h3>
      <section className='ourServices__header'>
        {services.map((service, index) =>
          <figure key={index} className={service.name}>
            <img src={service.img} alt={service.name} />
            <span>{service.name}</span>
          </figure>
        )}

      </section>
      <figure className='ourServices__bottom'>
        <section>
          <img src={views} alt="views" />
          <article>
          <small className='firstCircle'></small>
          <small></small>
          <small></small>
          <small></small>
          </article>
        </section>
        <figcaption>
          <strong>Website</strong>
          <p>
            Construimos proyectos web que marcan la diferencia y garantizan la experiencia de usuario, navegabilidad, accesibilidad, diseño responsive y optimización en buscadores.
            <br />
            <br />
            Nuestros conocimientos se adaptan a los cambios tecnológicos, aplicando las últimas tendencias al desarrollo web, como HTML5, CSS3, JavaScript, diseño responsive, https.
          </p>
          <button>Contáctanos <img src={wpp} alt="wpp" /></button>
        </figcaption>
      </figure>
    </div>
  )
}

export default OurServices