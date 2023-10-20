import React, { useState, useContext } from 'react';
import { GiShoppingBag } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import "./CartWidget.css"

const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(CartContext);
    const [isPressed, setPressed] = useState(false);

    const handleCartClick = () => {
        setPressed(!isPressed);
    };

    return (
        <div className={`cart-num ${isPressed ? 'pressed' : ''}`}>
            <Link to="/carrito" className={`menu-link ${isPressed ? 'pressed' : ''}`} onClick={handleCartClick}>
                <GiShoppingBag />
            </Link>
            <span className="number">{cantidadEnCarrito()}</span>
        </div>
    )
}

export default CartWidget;



