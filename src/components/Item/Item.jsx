import './Item.css';
import { Link } from 'react-router-dom';

const Item = ({ prod }) => {
    return (
        <div className='item'>
            <img src={prod.img} alt={prod.id} />
            <h2>{prod.id}</h2>
            <h3>${prod.price}</h3>
            <Link to={`/prod/${prod.id}`}>Detalles</Link>
        </div>
    );
}

export default Item;