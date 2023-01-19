import React, { useRef, useState } from 'react';
import './CheckoutInformation.scss';
import Logo from '../../assets/images/logo.svg';
import RightArrow from '../../assets/images/rightArrow.svg';
import { Link } from 'react-router-dom';
import orderApi from '../../api/orderApi';

function CheckoutInformation(props) {
  const cart = JSON.parse(localStorage.getItem('cart'))
  const user = JSON.parse(localStorage.getItem('user'))

  const getTotalPrice = () => {
		if (cart.length > 0) {
			const total = cart.reduce(
				(sum, cartItem) => sum + parseFloat(cartItem.quantity) * parseFloat(cartItem.price), 0);
      return total;
    } else {
      return 0;
    }
  };

  const [order, setOrder] = useState({
    userId: user.userId,
    firstName: user.firstName,
    lastName: user.lastName,
    company: '',
    address: '',
    apartment: '',
    city: '',
    postal: '',
    email: user.email,
    phone: '',
    totalPrice: getTotalPrice(),
    orderDetail: cart,
  })

  const handleCompleteCheckout = async () => {
    const result = await orderApi.createOrder(order)
    console.log(result)
  }

  const handleChangeInput = (e) => {
    setOrder({
      ...order,
      [e.target.id]: e.target.value
    })
  }

  return (
    <div className="checkout-info">
      <img src={Logo} alt="" className="checkout-info__logo" />
      <div className="checkout__step">
        <span>Cart</span>
        <img src={RightArrow} alt="" />
        <span className="active">Information</span>
        <img src={RightArrow} alt="" />
        <span>Shipping</span>
        <img src={RightArrow} alt="" />
        <span>Payment</span>
      </div>

      <div className="d-flex align-items-center justify-content-between checkout__input-label">
        <h6>Contact information</h6>
        <div className="d-flex align-items-center">
          <span>Already have an account?</span>
          <Link to="/account/login">
            Login
          </Link>
        </div>
      </div>
      <div className="checkout__input-field">
        <input 
          id="email" 
          type="text" 
          placeholder="Email or mobile phone number" 
          value={order.email} 
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className="checkout__checkbox">
        <input type="checkbox" />
        <span>Email me with news and offers</span>
      </div>

      <h6>Shipping address</h6>
      <div className="grid grid-columns-50 gap-10">
        <div className="checkout__input-field">
          <input 
            id="firstName" 
            type="text" 
            placeholder="First Name" 
            value={order.firstName} 
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="checkout__input-field">
          <input 
            id="lastName" 
            type="text" 
            placeholder="Last Name"
            value={order.lastName} 
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
      </div>
      <div className="checkout__input-field">
        <input 
          id="company" 
          type="text" 
          placeholder="Company (optional)" 
          value={order.company} 
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className="checkout__input-field">
        <input 
          id="address" 
          type="text" 
          placeholder="Address" 
          value={order.address}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className="checkout__input-field">
        <input 
          id="apartment" 
          type="text" 
          placeholder="Apartment, suite, etc. (optional)" 
          value={order.apartment}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className="grid grid-columns-50 gap-10">
        <div className="checkout__input-field">
          <input 
            id="city" 
            type="text" 
            placeholder="City"
            value={order.city}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
        <div className="checkout__input-field">
          <input 
            id="postal" 
            type="text" 
            placeholder="Postal code (optional)"
            value={order.postal}
            onChange={(e) => handleChangeInput(e)}
          />
        </div>
      </div>
      <div className="checkout__input-field">
        <input 
          id="phone"
          type="text" 
          placeholder="Phone" 
          value={order.phone}
          onChange={(e) => handleChangeInput(e)}
        />
      </div>
      <div className="checkout__checkbox">
        <input type="checkbox" />
        <span>Text me with news and offers</span>
      </div>

      <div className="d-flex align-items-center justify-content-between checkout__direct">
        <div className="d-flex align-items-center">
          <span>Return to cart</span>
        </div>
        <button onClick={handleCompleteCheckout}>Complete checkout</button>
      </div>

      <div className="checkout__footer">
        <ul className="footer__list">
          <li className="footer__item">Return policy</li>
          <li className="footer__item">Shipping policy</li>
          <li className="footer__item">Privacy policy</li>
          <li className="footer__item">Term of service</li>
          <li className="footer__item">Subscription policy</li>
        </ul>
      </div>
    </div>
  );
}

export default CheckoutInformation;
