import React, { useRef } from 'react';
import './CheckoutInformation.scss';
import Logo from '../../assets/images/logo.svg';
import RightArrow from '../../assets/images/rightArrow.svg';
import priLeftArrow from "../../assets/images/priLeftArrow.svg";
import { Link } from 'react-router-dom';

function CheckoutInformation(props) {
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
        <input type="text" placeholder="Email or mobile phone number" />
      </div>
      <div className="checkout__checkbox">
        <input type="checkbox" />
        <span>Email me with news and offers</span>
      </div>

      <h6>Shipping address</h6>
      <div className="grid grid-columns-50 gap-10">
        <div className="checkout__input-field">
          <input type="text" placeholder="First Name" />
        </div>
        <div className="checkout__input-field">
          <input type="text" placeholder="Last Name" />
        </div>
      </div>
      <div className="checkout__input-field">
        <input type="text" placeholder="Company (optional)" />
      </div>
      <div className="checkout__input-field">
        <input type="text" placeholder="Address" />
      </div>
      <div className="checkout__input-field">
        <input type="text" placeholder="Apartment, suite, etc. (optional)" />
      </div>
      <div className="grid grid-columns-50 gap-10">
        <div className="checkout__input-field">
          <input type="text" placeholder="City" />
        </div>
        <div className="checkout__input-field">
          <input type="text" placeholder="Postal code" />
        </div>
      </div>
      <div className="checkout__input-field">
        <input type="text" placeholder="Phone (optional)" />
      </div>
      <div className="checkout__checkbox">
        <input type="checkbox" />
        <span>Text me with news and offers</span>
      </div>

      <div className="d-flex align-items-center justify-content-between checkout__direct">
        <div className="d-flex align-items-center">
          <img src={priLeftArrow} alt="" />
          <span>Return to cart</span>
        </div>
        <button>Continue to shipping</button>
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
