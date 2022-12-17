import React from 'react';
import "./CheckoutProductItem.scss";
import coffee1 from "../../assets/images/coffee1.webp"

function CheckoutProductItem(props) {
  return (
		<div className='checkout-product'>
			<div className='checkout-product__image'>
				<img src={coffee1} alt='product' />
			</div>
			<div className='checkout-product__info'>
				<div>
					<div className='d-flex align-items-center justify-content-between'>
						<h6 className='checkout-product__name'>Syrup Pump</h6>
						<h6 className='checkout-product__price'>$7.50</h6>
          </div>
          <p className="checkout-product__sub-info">1kg / Whole Beans</p>
				</div>
				<div className='d-flex align-items-center justify-content-between'>
					<h6 className='checkout-product__quantity'>
						<span>Qty</span>
						<span>1</span>
					</h6>
					<button className='checkout-product__remove-btn'>Remove</button>
				</div>
			</div>
		</div>
	);
}

export default CheckoutProductItem;