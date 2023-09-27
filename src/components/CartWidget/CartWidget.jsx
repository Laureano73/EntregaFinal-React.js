import { GiShoppingBag } from "react-icons/gi";
import "./CartWidget.css"

const CartWidget = (props) => {
return (
        <div className="cart-num">
        <GiShoppingBag className="cart" />
        <p className="number">1</p>
        </div>
    );
};

export default CartWidget;
