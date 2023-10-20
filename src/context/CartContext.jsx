import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(() => {
        const storedCarrito = localStorage.getItem('carrito');
        return storedCarrito && isValidJSON(storedCarrito) ? JSON.parse(storedCarrito) : [];
    });

    const agregarAlCarrito = (item, cantidad) => {
        const nuevoCarrito = [...carrito];
        const productoExistente = nuevoCarrito.find((producto) => producto.title.toLowerCase() === item.title.toLowerCase());

        if (productoExistente) {
            productoExistente.cantidad += cantidad;
        } else {
            nuevoCarrito.push({ ...item, cantidad });
        }
        setCarrito(nuevoCarrito);
    }

    const eliminarProducto = (id, eliminarTodos = false) => {
        if (eliminarTodos) {
            const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
            setCarrito(nuevoCarrito);
        } else {
            const nuevoCarrito = carrito.map((producto) => {
                if (producto.id === id) {
                    if (producto.cantidad > 1) {
                        return { ...producto, cantidad: producto.cantidad - 1 };
                    } else {
                        return null;
                    }
                }
                return producto;
            });
            setCarrito(nuevoCarrito.filter((producto) => producto !== null));
        }
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito]);

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const cantidadEnCarritoParaProducto = (productId) => {
        const producto = carrito.find((prod) => prod.id === productId);
        return producto ? producto.cantidad : 0;
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const isInCart = (productSelected) => {
        return carrito.some((prod) => prod.id === productSelected.id);
    }

    function isValidJSON(text) {
        try {
            JSON.parse(text);
            return true;
        } catch (error) {
            return false;
        }
    }

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, cantidadEnCarrito, cantidadEnCarritoParaProducto, precioTotal, vaciarCarrito, eliminarProducto, isInCart }}>
            {children}
        </CartContext.Provider>
    );
}
