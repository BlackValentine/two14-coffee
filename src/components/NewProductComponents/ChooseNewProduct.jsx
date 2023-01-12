import React from 'react';
import { Link } from 'react-router-dom';
import './ChooseNewProduct.scss';

function ChooseNewProduct(props) {
  return (
    <div className="container">
      <ul className="new-product__list">
        <Link to={'/new-product/apparel'}>
          <li className="new-product__item">
            <span>Apparel</span>
          </li>
        </Link>
        <Link to={'/new-product/coffee'}>
          <li className="new-product__item">
            <span>Coffee</span>
          </li>
        </Link>
        <li className="new-product__item">
          <span>Syrups</span>
        </li>
        <li className="new-product__item">
          <span>Accessories</span>
        </li>
      </ul>
    </div>
  );
}

export default ChooseNewProduct;
