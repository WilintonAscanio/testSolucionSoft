import React from 'react'
import './components3D.scss'
import clothe from '../../assets/I3D/CLOTHE.png';
import edit from '../../assets/I3D/EDIT.png';
import id from '../../assets/I3D/ID.png';
import inform from '../../assets/I3D/INFORM.png';
import key from '../../assets/I3D/KEY.png';
import map from '../../assets/I3D/MAP.png';
import pictures from '../../assets/I3D/PICTURES.png';
import shooting from '../../assets/I3D/SHOOTING.png';
const Components3D = () => {
    return (
        <figure className='components3D'>
            <img src={id} alt="id" className='components3D__id' />
            <img src={shooting} alt="shooting" className='components3D__shooting' />
            <img src={key} alt="key" className='components3D__key' />
            <img src={clothe} alt="clothe" className='components3D__clothe' />
            <img src={edit} alt="edit" className='components3D__edit' />
            <img src={inform} alt="inform" className='components3D__inform' />
            <img src={pictures} alt="pictures" className='components3D__pictures' />
            <img src={map} alt="map" className='components3D__map' />
        </figure>
    )
}

export default Components3D