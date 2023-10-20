import './Item.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { GiShoppingBag } from "react-icons/gi";

const Item = ({ prod }) => {
    const { agregarAlCarrito, isInCart, cantidadEnCarritoParaProducto } = useContext(CartContext);

    const handleAgregarAlCarrito = () => {
        const stockDisponible = 10;

        const cantidadEnCarritoDeEsteProducto = cantidadEnCarritoParaProducto(prod.id);

        if (cantidadEnCarritoDeEsteProducto < stockDisponible) {
            agregarAlCarrito(prod, 1);
        } else {
            console.log("Stock agotado");
        }
    };

    const estaEnElCarrito = isInCart(prod);
    const cantidadEnCarritoDeEsteProducto = cantidadEnCarritoParaProducto(prod.id);

    return (
        <div className='item'>
            <img src={prod.img} alt={prod.id} />
            <h2>{prod.title}</h2>
            <h3>${prod.price}</h3>
            <Link to={`/prod/${prod.id}`} className="details-button">Detalles</Link>
            <div className="cart-count">
                <Link className="menu-link" to="/carrito">
                    <GiShoppingBag className="cart-icon" />
                </Link>
                <span className="cart-quantity">{cantidadEnCarritoDeEsteProducto}</span>
            </div>
            <button onClick={handleAgregarAlCarrito} className="details-button">Agregar al carrito</button>
        </div>
    );
}

export default Item;