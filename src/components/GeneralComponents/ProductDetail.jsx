import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './ProductDetail.scss';

function ProductDetail(props) {
  const { state } = useLocation();

  const [grindChoice, setGrindChoice] = useState('');
  const [sizeChoice, setSizeChoice] = useState('');
  const [productQuantity, setProductQuantity] = useState(1);

  const id = state?.id;

  const grindList = [
    'Whole Beans',
    'Chemex',
    'Commercial',
    'Domestic',
    'Filter',
    'Plunger',
    'Stove',
    'Turkish',
    'V60',
  ];
  const bagSize = ['1kg', '500g', '250g'];

  const handleChooseGrindType = (grindItem) => {
    setGrindChoice(grindItem)
  }

  const handleChooseBagSize = (sizeItem) => {
    setSizeChoice(sizeItem)
  }

  return (
    <div className="product-detail__wrap">
      <div className="container container__product-detail">
        <div className="product-detail__img">
          <img src={state.image} alt="productImg" />
        </div>
        <div className="product-detail">
          <h3 className="product-detail__title">{state.name}</h3>
          <span className="product-detail__author">
            Crafted by {state.author}.
          </span>
          <p className="product-detail__subtitle">{state.description}</p>
          <div className="product-detail__coffee">
            <div className="grid grid-columns-50">
              <div className="coffee__roast">
                <h6>ROAST</h6>
                <p>{state.roast}</p>
              </div>
              <div className="coffee__origin">
                <h6>ORIGIN</h6>
                <p>{state.origin}</p>
              </div>
            </div>
            <div className="coffee__taste">
              <h6>TASTE</h6>
              <p>{state.taste}</p>
            </div>
          </div>

          <div className="option">
            <h6 className="option__title">BAG SIZE</h6>
            <ul className="option__list">
              {bagSize.map((sizeItem, index) => {
                return (
                  <li 
                    key={index} 
                    className={`option__item ${sizeItem === sizeChoice ? "active" : ""}`} 
                    onClick={() => handleChooseBagSize(sizeItem)}
                  >
                    <span>{sizeItem}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="option">
            <h6 className="option__title">GRIND</h6>
            <ul className="option__list">
              {grindList.map((grindItem, index) => {
                return (
                  <li 
                    key={index} 
                    className={`option__item ${grindItem === grindChoice ? "active" : ""}`}
                    onClick={() => handleChooseGrindType(grindItem)}
                  >
                    <span>{grindItem}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="product-detail__quantity">
            <h6 className="quantity__title">Quantity</h6>
            <div className="d-flex align-items-center">
              <input 
                type="number" 
                value={productQuantity} 
                onChange={(e) => {
                  if (e.target.value < 1) {
                    setProductQuantity(1)
                  } else {
                    setProductQuantity(e.target.value)
                  }
                }}/>
              <span>${(state.price * productQuantity / 100).toFixed(2)} AUD</span>
            </div>
          </div>

          <div className="radio">
            <h6 className="radio__title">PURCHASE OPTIONS</h6>
            <ul className="radio__list">
              <li className="radio__option">
                <input type="radio" name="purchase-option" value="one-time" />
                <span>One Time Purchase</span>
              </li>
              <li className="radio__option">
                <input type="radio" name="purchase-option" value="subscribe" />
                <span>Subscribe and Save 10%</span>
              </li>
            </ul>
          </div>

          <button className="product-detail__add-btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
