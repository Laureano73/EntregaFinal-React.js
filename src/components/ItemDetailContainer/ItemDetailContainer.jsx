import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ productos }) => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const selectedItem = productos.find((product) => product.id === itemId);

        if (selectedItem) {
            setItem(selectedItem);
        } else {

        }
    }, [itemId, productos]);

    if (!item) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <ItemDetail item={item} />
        </div>
    );
};

export default ItemDetailContainer;
