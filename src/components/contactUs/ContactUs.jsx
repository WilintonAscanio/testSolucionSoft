import React from 'react'
import './contactUs.scss'

const ContactUs = () => {
    return (
        <div className='contactUs'>
            <section>
                <strong>Contáctanos</strong>
                <form>
                    <section>
                        <label>
                            <input type="text" placeholder='Nombre' />
                        </label>
                        <label>
                            <input type="text" />
                        </label>
                    </section>
                </form>

            </section>
        </div>
    )
}

export default ContactUs