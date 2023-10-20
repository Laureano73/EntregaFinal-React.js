import React, { useState, useContext } from 'react';
import './ItemDetail.css';
import { CartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({ item }) => {

    const { carrito, agregarAlCarrito } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1);

    const handleRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const handleSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }


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
                <ItemCount cantidad={cantidad}
                handleSumar={handleSumar}
                handleRestar={handleRestar}
                handleAgregar={() => {agregarAlCarrito(item, cantidad)
                    console.log(item.img
                ) }} />
            </div>
        </div>
    );
};

export default ItemDetail;