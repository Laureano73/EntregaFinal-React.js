import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {
    return (
        <div className="item-center">
            <div className="item-card">
                <h2 className="item-title">{item.id}</h2>
                <img
                    src={item.img}
                    alt={item.id}
                    className="item-image"
                    style={{ maxWidth: '100%', maxHeight: '300px' }}
                />
                <p className="item-description">{item.description}</p>
            </div>
        </div>
    );
};

export default ItemDetail;







