/** @format */

import React from 'react';
import './Header.scss';
import Logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsShowCheckoutPopup } from '../../store/reducers/generalSlice';

function Header(props) {
  const headerList = [
    {
      href: '/',
      title: 'Home',
    },
    {
      href: '/collections/coffee-blend',
      title: 'Coffee',
    },
    {
      href: '/collections',
      title: 'Shop',
    },
    {
      href: '/wholesale',
      title: 'Wholesale',
    },
    {
      href: '/media',
      title: 'Media',
    },
    {
      href: '/partners',
      title: 'Partners',
    },
  ];
  const dispatch = useDispatch();
  const cart = JSON.parse(localStorage.getItem('cart')) ?? [];

  const isShowCheckoutPopup = useSelector(
    (state) => state.general.isShowCheckoutPopup
  );

  const handleCloseCheckouPopup = () => {
    dispatch(setIsShowCheckoutPopup(!isShowCheckoutPopup));
  };
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
              );
            })}
          </ul>
        </div>
        <div className="header__right">
          <div className="d-flex align-items-center">
            <Link to={'/search'}>
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </Link>
            <Link to={'/account/login'} className="border">
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="d-flex align-items-center">
            <div
              className="header__right-cart"
              onClick={handleCloseCheckouPopup}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
            </div>
            <div className="cart-number">
              <span>{cart?.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
