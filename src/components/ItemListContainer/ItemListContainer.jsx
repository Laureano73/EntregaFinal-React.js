import React from 'react';
import Item from "../Item/Item";
import "./ItemListContainer.css";

const ItemListContainer = ({ products }) => {
    return (
        <div>
            <h1>Hamburguesería</h1>
            <div className='itemListContainer'>
                {products.map((prod) => {
                    return (
                        <Item key={prod.id} prod={prod} />
                    );
                })}
            </div>
        </div>
    );
};

export default ItemListContainer;
