import React from 'react'
import './contactUs.scss'
import pencil from '../../assets/I3D/EDIT.png'
import internet from '../../assets/I3D/INTERNET.png'
import id from '../../assets/I3D/ID.png'

const ContactUs = () => {
    return (
        <div className='contactUs'>
            <section>
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
                        <img src={pencil} alt="edit"/>
                        Cuéntanos tu idea
                        <textarea name="" id="" cols="20" rows="5" placeholder='.......'>

                        </textarea>
                    </label>
                    <button>Enviar</button>
                </form>

            </section>
            <figure>
                <img src={internet} alt="earth" />
                <img src={id} alt="id" />
            </figure>
        </div>
    )
}

export default ContactUs