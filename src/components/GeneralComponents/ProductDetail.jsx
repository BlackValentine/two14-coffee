import React from 'react';
import coffee1 from '../../assets/images/coffee1.webp';
import './ProductDetail.scss';

function ProductDetail(props) {
  const grindList = ["Whole Beans", "Chemex", "Commercial", "Domestic", "Filter", "Plunger", "Stove", "Turkish", "V60"]
  const bagSize = ["1kg", "500g", "250g"]
  return (
    <div className="product-detail__wrap">
      <div className="container container__product-detail">
        <div className="product-detail__img">
          <img src={coffee1} alt="productImg" />
        </div>
        <div className="product-detail">
          <h3 className="product-detail__title">TWO 14 ARMOURED BLEND</h3>
          <span className="product-detail__author">
            Crafted by Two 14 Coffee Co.
          </span>
          <p className="product-detail__subtitle">
            Bold and intense, with notes of dark chocolate and Brazil nuts. This
            coffee cuts fantastically well through milk and finishes with a long
            toffee sweetness. Not for the faint of heart.
          </p>
          <div className="product-detail__coffee">
            <div className="grid grid-columns-50">
              <div className="coffee__roast">
                <h6>ROAST</h6>
                <p>Dark</p>
              </div>
              <div className="coffee__origin">
                <h6>ORIGIN</h6>
                <p>South America, Africa, India</p>
              </div>
            </div>
            <div className="coffee__taste">
              <h6>TASTE</h6>
              <p>Toffee, Dark Chocolate, Spice</p>
            </div>
          </div>

          <div className="option">
            <h6 className="option__title">BAG SIZE</h6>
            <ul className="option__list">
              {bagSize.map((sizeItem, index) => {
                return (
                  <li key={index} className="option__item">
                    <span>{sizeItem}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="option">
            <h6 className="option__title">GRIND</h6>
            <ul className="option__list">
              {grindList.map((grindItem, index) => {
                return (
                  <li key={index} className="option__item">
                    <span>{grindItem}</span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="product-detail__quantity">
            <h6 className='quantity__title'>Quantity</h6>
            <div className="d-flex align-items-center">
              <input type="number" value={1}/>
              <span>$39.00 AUD</span>
            </div>
          </div>

          <div className="radio">
            <h6 className="radio__title">PURCHASE OPTIONS</h6>
            <ul className="radio__list">
              <li className="radio__option">
                <input type="radio" name="purchase-option" value="one-time"/>
                <span>One Time Purchase</span>
              </li>
              <li className="radio__option">
                <input type="radio" name="purchase-option" value="subscribe"/>
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
