import ItemList from '../ItemList/ItemList'
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config"
// import { ThemeContext } from "../../App";

function ItemListContainer() {
    const [products, setProductos] = useState([]);
    const { categoryId } = useParams()
    // const context = useContext(ThemeContext)
    // console.log(context)


    useEffect(() => {

        //configuramos la referencia de nuestros productos
        const productsRef = collection(db, "productos")
        //Utilizamos la funcion getDocs para obtener todos los productos

        const q = query(productsRef, categoryId === undefined ? undefined:  where("category", "==", categoryId))
        getDocs(q).then((response)=> {
            const productsFirebase = response.docs.map((product)=>(
                {id: product.data().title, ...product.data()}
            ))
            console.log(productsFirebase)
            setProductos (productsFirebase)
        })

    }, [categoryId]);

    return (
        <>
            <ItemList products={products} />
        </>
    );
}

export default ItemListContainer;

