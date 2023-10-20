import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import './Checkout.css';

const Checkout = () => {
    const [pedidoId, setPedidoId] = useState('');

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit, reset } = useForm();

    const comprar = (data) => {
        Swal.fire({
            title: 'Confirmar Compra',
            text: '¿Desea confirmar su compra?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí, Comprar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                const pedido = {
                    cliente: data,
                    productos: carrito,
                    total: precioTotal()
                }
                console.log(pedido);

                const pedidosRef = collection(db, 'pedidos');

                addDoc(pedidosRef, pedido)
                    .then((doc) => {
                        setPedidoId(doc.id);
                        vaciarCarrito();
                        Swal.fire('¡Compra realizada!', 'Tu número de pedido es: ' + doc.id, 'success').then(() => {
                            reset();
                        });
                    });
            }

            if (pedidoId) {
                return (
                    <div className="container">
                        <h1 className="main-title">Muchas gracias por su compra</h1>
                        <p>Tu número de pedido es: {pedidoId}</p>
                        </div>
                )
            }
        });
    };

    return (
        <div className="container">
            <h1 className="main-title">Finalizar Compra</h1>
            <form className="formulario" onSubmit={handleSubmit(comprar)}>
                <input type="text" placeholder="Ingresá tu nombre" {...register('nombre')} />
                <input type="email" placeholder="Ingresá tu e-mail" {...register('email')} />
                <input type="phone" placeholder="Ingresá tu teléfono" {...register('telefono')} />
                <button className="enviar" type="submit">Comprar</button>
            </form>
        </div>
    );
};

export default Checkout;
