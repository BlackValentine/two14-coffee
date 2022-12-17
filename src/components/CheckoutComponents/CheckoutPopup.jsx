/** @format */

import React, { useState } from 'react';
import './CheckoutPopup.scss';
import closeIcon from '../../assets/images/x-close.svg';
import CheckoutProductItem from './CheckoutProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { setIsShowCheckoutPopup } from '../../store/reducers/generalSlide';

function CheckoutPopup(props) {
  const dispatch = useDispatch();
	const isShowCheckoutPopup = useSelector(
		(state) => state.general.isShowCheckoutPopup
	);

	const handleCloseCheckouPopup = () => {
		dispatch(setIsShowCheckoutPopup(!isShowCheckoutPopup));
	};

	return (
		<div
			className={`checkout-popup__wrap ${isShowCheckoutPopup ? '' : 'close'}`}
		>
			<div className='checkout-popup__container'>
				<div className='checkout-popup__product'>
					<div className='checkout-popup__header'>
						<h6>Your cart</h6>
						<img
							src={closeIcon}
							alt='close'
							onClick={handleCloseCheckouPopup}
						/>
					</div>
					<ul className='checkout-popup__product-list'>
						<li className='checkout-popup__product-item'>
							<CheckoutProductItem />
						</li>
						<li className='checkout-popup__product-item'>
							<CheckoutProductItem />
						</li>
						<li className='checkout-popup__product-item'>
							<CheckoutProductItem />
						</li>
						<li className='checkout-popup__product-item'>
							<CheckoutProductItem />
						</li>
					</ul>
				</div>
				<div className='checkout-popup__bill'>
					<div className='bill__header'>
						<h6>Subtotal</h6>
						<h6>$0.00</h6>
					</div>
					<p className='bill__note'>
						Shipping and discounts caculated at checkouts.
					</p>
					<button>Checkout</button>
					<p
						className='bill__note text-center'
						onClick={handleCloseCheckouPopup}
					>
						or Continue Shopping →
					</p>
				</div>
			</div>
		</div>
	);
}

export default CheckoutPopup;
