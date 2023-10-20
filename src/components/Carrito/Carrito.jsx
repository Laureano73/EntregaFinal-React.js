import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import carrito from './Carrito.css';
import ListItem from '../ListItem/ListItem';
import { Link } from 'react-router-dom'

export const Carrito = () => {
    const { carrito, precioTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    const handleEliminarProducto = (id, eliminarTodos = false) => {
        eliminarProducto(id, eliminarTodos);
    }

    return (
        <div className="container">
            <h1 className="main-title">Carrito</h1>

            {
                carrito.map((prod) => (
                    <div key={prod.title} className="item-container">
                        <ListItem
                            title={prod.title}
                            img={prod.img}
                            precio={prod.price}
                            cantidad={prod.cantidad}
                        />
                        <button onClick={() => handleEliminarProducto(prod.id)}>Eliminar 1</button>
                        <button onClick={() => handleEliminarProducto(prod.id, true)}>Eliminar Todo</button>
                    </div>
                ))
            }
            {carrito.length > 0 ? (
                <>
                    <h2 className="info">Precio total: ${precioTotal()}</h2>
                    <button
                        onClick={handleVaciar}
                    >
                        Vaciar Carrito
                    </button>
                    <Link to="/checkout" className="boton-finalizar">Finalizar Compra</Link>
                </>
            ) : (
                <h2 className="info">El carrito está vacío :/</h2>
            )}
        </div>
    );
}

export default Carrito;
