import React from 'react';
import "./ProductItem.scss";

function ProductItem(props) {
  return (
		<div className='product-item'>
			<img className='product-item__img' src={props.img} alt='' />
      <h6 className='product-item__name'>{props.name}</h6>
			<a href='#' className='product-item__more'>
				More info →
			</a>
		</div>
	);
}

export default ProductItem;