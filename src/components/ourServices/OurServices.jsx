import React from 'react'
import './ourServices.scss'
import website from '../../assets/website.png'
import mobile from '../../assets/mobile.png'
import pencil from '../../assets/pencil.png'
import idea from '../../assets/idea.png'
import digital from '../../assets/digital.png'
import like from '../../assets/like.png'

const services = [
  {
    name : 'Website',
    img : website
  },
  {
    name : 'Apps',
    img : mobile
  },
  {
    name : 'Banding',
    img : pencil
  },
  {
    name : 'Start Up',
    img : idea
  },
  {
    name : 'M. Digital',
    img : digital
  },
  {
    name : 'Social Media',
    img : like
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
    </div>
  )
}

export default OurServices