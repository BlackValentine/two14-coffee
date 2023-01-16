/** @format */

import React, { useEffect, useState } from 'react';
import './CheckoutPopup.scss';
import closeIcon from '../../assets/images/x-close.svg';
import CheckoutProductItem from './CheckoutProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { setIsShowCheckoutPopup } from '../../store/reducers/generalSlice';
import { Link } from 'react-router-dom';

function CheckoutPopup(props) {
  const dispatch = useDispatch();
  const cartFromStorage = JSON.parse(localStorage.getItem('cart'));

  const [cart, setCart] = useState(cartFromStorage ?? []);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('cart')));
  }, [localStorage.getItem('cart')]);

  const handleRemoveCartItem = (i) => {
    let cartClone = [...cart];
    cartClone.splice(i, 1);
    setCart(cartClone);
    localStorage.setItem('cart', JSON.stringify(cartClone));
  };

  const isShowCheckoutPopup = useSelector(
    (state) => state.general.isShowCheckoutPopup
  );

  const handleCloseCheckoutPopup = () => {
    dispatch(setIsShowCheckoutPopup(!isShowCheckoutPopup));
  };

  const getTotalPrice = () => {
    if (cart.length > 0) {
      const total = cart.reduce(
        (sum, cartItem) =>
          sum + parseFloat(cartItem.quantity) * parseFloat(cartItem.price),
        0
      );
      return total;
    } else {
      return 0;
    }
  };

  return (
    <div
      className={`checkout-popup__wrap ${isShowCheckoutPopup ? '' : 'close'}`}
    >
      <div className={`checkout-popup__container`}>
        <div className="checkout-popup__product">
          <div className="checkout-popup__header">
            <h6>Your cart</h6>
            <img
              src={closeIcon}
              alt="close"
              onClick={handleCloseCheckoutPopup}
            />
          </div>
          <ul className="checkout-popup__product-list">
            {cart?.map((cartItem, index) => {
              return (
                <li className="checkout-popup__product-item" key={index}>
                  <CheckoutProductItem
                    name={cartItem.name}
                    quantity={cartItem.quantity}
                    image={cartItem.image}
                    price={cartItem.price}
                    grind={cartItem.grind}
                    size={cartItem.size}
                    type={cartItem.type}
                    index={index}
                    handleRemoveCartItem={handleRemoveCartItem}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="checkout-popup__bill">
          <div className="bill__header">
            <h6>Subtotal</h6>
            <h6>${getTotalPrice() / 100}.00</h6>
          </div>
          <p className="bill__note">
            Shipping and discounts caculated at checkouts.
          </p>
          <Link to={"/checkout"}>
            <button onClick={handleCloseCheckoutPopup}>Checkout</button>
          </Link>
          <p
            className="bill__note text-center"
            onClick={handleCloseCheckoutPopup}
          >
            or Continue Shopping →
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPopup;
