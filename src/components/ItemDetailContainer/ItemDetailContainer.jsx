import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/config"

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    const fetchProducts = async () => {
        try {
            // Look for the collection named "products" on Firestore
            const itemCollection = collection(db, 'productos');
            // Retrieve products from Firestore
            const response = await getDocs(itemCollection);

            // Read the data from the response and store it into a variable
            const retrievedProducts = response.docs.map((prod) => ({
                ...prod.data(),
            }));

            // Get the current previewing product from the retrieved products by using the product ID
            const filteredProduct = retrievedProducts.find((prod) => prod.title.toLowerCase() === itemId.toLowerCase());
console.log(filteredProduct)
            if (filteredProduct) {
                setItem(filteredProduct);
            }
        } catch (error) {
            console.error(error);
        }
};

    useEffect(() => {
        const fetch = async () => {
            await fetchProducts()
        }
        fetch()
    }, [itemId]);

    if (!item) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    );
}

export default ItemDetailContainer;
