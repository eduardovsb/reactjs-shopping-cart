import React from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/store.hooks';
import { getCartProducts, getTotalPrice, removeFromCart } from '../../slices/Cart/cart.slice';
import './Cart.scss';

const Cart: React.FC = () => {
    const cartProducts = useAppSelector(getCartProducts);
    const totalPrice = useAppSelector(getTotalPrice);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (productId: string) => {
        dispatch(removeFromCart(productId));
    };

    return (
        <div className="cart__content">
            {totalPrice === 0 ? (
                <div className="cart__total-price">
                    <h5>There are no products in your cart. 😥</h5>
                </div>
            ) : null}
            <div className="cart__products">
                {cartProducts.map((product) => (
                    <div className="cart__product-item" key={product.id}>
                        <span>
                            {product.title} (x{product.amount})
                        </span>
                        <button className="btn" onClick={() => handleRemoveFromCart(product.id)}>
                            Remove from cart
                        </button>
                    </div>
                ))}
            </div>
            {totalPrice > 0 ? (
                <div className="cart__total-price">
                    <h5>Total Price: ${totalPrice}</h5>
                </div>
            ) : null}
        </div>
    );
};

export default Cart;
