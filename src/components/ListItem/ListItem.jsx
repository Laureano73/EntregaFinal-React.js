import React from 'react';

const ListItem = ( props ) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <img className='imagen' src={props.img} alt={props.title} />
            <p className='info'>Precio unit: ${props.precio}</p>
            <p className='info'>Precio total: ${parseInt(props.precio) * parseInt(props.cantidad)}</p>
            <p className='info'>Cantidad:{props.cantidad}</p>
        </div>
    );
};

export default ListItem;
