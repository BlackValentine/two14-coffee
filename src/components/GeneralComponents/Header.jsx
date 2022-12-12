import React from 'react';
import "./Header.scss"
import Logo from "../../assets/images/logo.svg"
import SearchIcon from "../../assets/images/search.svg"
import AccountIcon from "../../assets/images/account.svg"
import CartIcon from "../../assets/images/cart.svg"
import { Link } from "react-router-dom"

function Header(props) {
  const headerList = [
    {
      "href": "/",
      "title": "Home"
    },
    {
      "href": "#Coffee",
      "title": "Coffee"
    },
    {
      "href": "#Shop",
      "title": "Shop"
    },
    {
      "href": "/wholesale",
      "title": "Wholesale"
    },
    {
      "href": "#Cafes",
      "title": "Cafes"
    },
    {
      "href": "#Media",
      "title": "Media"
    },
    {
      "href": "#Partners",
      "title": "Partners"
    },
  ]
  return (
    <div className="header" id="header">
      <div className="container container__header">
        <div className="header__left">
          <img className="header__logo" src={Logo} alt="" />
          <ul className="header__list">
            {headerList.map((headerItem, index) => {
              return (
                <Link key={index} to={headerItem.href}>
                  <li className="header__item">{headerItem.title}</li>
                </Link>
              )
            })}
          </ul>
        </div>
        <div className="header__right">
          <div className="d-flex align-items-center">
            <img src={SearchIcon} alt="Search" />
            <img src={AccountIcon} alt="Account" />
          </div>
          <div className="d-flex align-items-center">
            <img src={CartIcon} alt="Account" />
            <span className="cart-number">3</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;