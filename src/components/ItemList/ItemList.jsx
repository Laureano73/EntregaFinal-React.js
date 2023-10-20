import React from 'react';
import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ products }) => {
    return (
        <div>
            <h1>Hamburguesería</h1>
            <div className='itemList'>
                {products.map((prod) => {
                    return (
                        <Item key={prod.id} prod={prod} />
                    );
                })}
            </div>
        </div>
    );
};

export default ItemList;
