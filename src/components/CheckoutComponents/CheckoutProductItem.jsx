import React from 'react';
import './CheckoutProductItem.scss';

function CheckoutProductItem(props) {
  const handleRemoveCartItem = () => {
		props.handleRemoveCartItem(props.index)
  };

  const renderSubOption = () => {
    if (props.type === 'coffee') {
      return (
        <p className="checkout-product__sub-info">
          {props.size} / {props.grind}
        </p>
      )
    } else if (props.type === 'apparel') {
			return (
				<p className="checkout-product__sub-info">
          Size: {props.size}
        </p>
			)
		}
  };

  return (
    <div className="checkout-product">
      <div className="checkout-product__image">
        <img src={props.image} alt="product" />
      </div>
      <div className="checkout-product__info">
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <h6 className="checkout-product__name">{props.name}</h6>
            <h6 className="checkout-product__price">
              ${((props.price / 100) * props.quantity).toFixed(2)}
            </h6>
          </div>
          {renderSubOption()}
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <h6 className="checkout-product__quantity">
            <span>Qty</span>
            <span>{props.quantity}</span>
          </h6>
          <button
            className="checkout-product__remove-btn"
            onClick={() => handleRemoveCartItem()}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProductItem;
