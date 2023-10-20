import ItemList from '../ItemList/ItemList'
import React, { useState, useEffect, useContext } from 'react';
import productos from '../../inventario.json';
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config"
// import { ThemeContext } from "../../App";

function ItemListContainer() {
    const [products, setProductos] = useState([]);
    const { categoryId } = useParams()
    // const context = useContext(ThemeContext)
    // console.log(context)

    const getData = () => {
        return new Promise((resolve) => {
            categoryId ?
                resolve(productos.filter((producto) => producto.category === categoryId))
                : resolve(productos);
        });
    }

    useEffect(() => {

        //configuramos la referencia de nuestros productos
        const productsRef = collection(db, "productos")
        //Utilizamos la funcion getDocs para obtener todos los productos
        getDocs(productsRef).then((response) => {

            //Formateamos la data a un array de objetos
            const productsFirebase = response.docs.map((product) => (
                { id: product.id, ...product.data() }
            ))
            console.log(productsFirebase)
        })

        const q = query(productsRef, where("category", "==", "Papas"))
        getDocs(q).then((response)=> {
            const productsFirebase = response.docs.map((product)=>(
                {id: product.id, ...product.data()}
            ))
            console.log(productsFirebase)
        })


        getData()
            .then((res) => {
                setProductos(res);
            });
    }, [categoryId, productos]);

    return (
        <>
            <ItemList products={products} />
        </>
    );
}

export default ItemListContainer;

