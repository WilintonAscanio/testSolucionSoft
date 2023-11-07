import React from 'react'
import './contactUs.scss'
import pencil from '../../assets/I3D/EDIT.png'
import internet from '../../assets/I3D/INTERNET.png'
import id from '../../assets/I3D/ID.png'

const ContactUs = () => {
    return (
        <div className='contactUs' id='contactUs'>
            <section className='contactUs__left'>
                <strong>Contáctanos</strong>
                <form>
                    <article>
                        <label>
                            Nombre
                            <input type="text" placeholder='Nombre' />
                        </label>
                        <label>
                            E-Mail
                            <input type="email" placeholder='E-Mail' />
                        </label>
                    </article>
                    <label>
                        <img src={pencil} alt="edit" />
                        Cuéntanos tu idea
                        <textarea cols="20" rows="5" placeholder='.......'>

                        </textarea>
                    </label>
                    <button>Enviar</button>
                </form>

            </section>
            <section className='contactUs__right'>
                <figure>
                    <img src={internet} alt="earth" />
                    <img src={id} alt="id" className='imgeID' />
                </figure>

            </section>
        </div>
    )
}

export default ContactUs