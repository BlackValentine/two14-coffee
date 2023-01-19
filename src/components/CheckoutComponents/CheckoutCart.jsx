import { useState } from 'react';
import "./CheckoutCart.scss";

function CheckoutCart(props) {

  const [discountInput, setDiscountInput] = useState('')

  const cart = JSON.parse(localStorage.getItem('cart'))

  const renderOptionCartItem = (cartItem) => {
    if (cartItem.type === 'coffee') {
      return <span className="checkout-cart__item-option">{cartItem.size} / {cartItem.grind}</span>
    } else if (cartItem.type === 'apparel') {
      return <span className="checkout-cart__item-option">Size: ${cartItem.size}</span>
    }
  }

  const getTotalPrice = () => {
		if (cart.length > 0) {
			const total = cart.reduce(
				(sum, cartItem) => sum + parseFloat(cartItem.quantity) * parseFloat(cartItem.price), 0);
      return total;
    } else {
      return 0;
    }
  };

  return (
    <div className="checkout-cart">
      {cart.map((cartItem, index) => {
        return (
          <div key={index} className="checkout-cart__item">
            <div className="d-flex align-items-center">
              <div className="checkout-cart__item-img">
                <img src={cartItem.image} alt="cartItem" />
                <div className="checkout-cart__item-quantity">
                  <span>{cartItem.quantity}</span>
                </div>
              </div>
              <div className="d-flex flex-columns">
                <h6 className="checkout-cart__item-name">{cartItem.name}</h6>
                {renderOptionCartItem(cartItem)}
              </div>
            </div>
            <h6 className="checkout-cart__item-price">${(cartItem.quantity * cartItem.price / 100).toFixed(2)}</h6>
          </div>
        )
      })}

      <div className="checkout-cart__discount">
        <input type="text" placeholder='Discount code' value={discountInput} onChange={(e) => setDiscountInput(e.target.value)}/>
        <button className={discountInput.length > 0 ? "active" : ""}>Apply</button>
      </div>

      <div className="checkout-cart__subtotal">
        <span className="key">Subtotal</span>
        <span className="value">${(getTotalPrice() / 100).toFixed(2)}</span>
      </div>
      <div className="checkout-cart__shipping">
        <span className="key">Shipping</span>
        <span className="value">Calculated at next step</span>
      </div>
      <div className="checkout-cart__total">
        <span className="key">Total</span>
        <span className="value">${(getTotalPrice() / 100).toFixed(2)}</span>
      </div>
    </div>
  );
}

export default CheckoutCart;
