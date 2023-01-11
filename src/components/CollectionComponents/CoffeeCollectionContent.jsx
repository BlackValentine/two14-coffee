/** @format */

import React, { useEffect } from 'react';
import './CoffeeCollectionContent.scss';
import ProductItem from '../GeneralComponents/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCoffee } from '../../store/api';

function CoffeeCollectionContent(props) {
	const dispatch = useDispatch();

	const allCoffeeProducts = useSelector(state => state.product.allCoffeeProducts);

	useEffect(() => {
		if (allCoffeeProducts.length <= 0) {
			dispatch(getAllCoffee())
		}
	}, [allCoffeeProducts])

	return (
		<div className='coffee-collection__container'>
			<div className='container'>
				<h3 className='coffee-collection__title'>COFFEE</h3>
				<p className='coffee-collection__subtitle'>
					We craft an array of premium blends to suit any coffee lover's taste.
					When you purchase any of our coffee products, a portion of profits
					goes towards veteran charities and organisations to help veterans move
					forward.
				</p>
				<ul className='coffee-collection__list'>
					{allCoffeeProducts.map((coffeeItem, index) => {
						return (
							<li key={index} className='coffee-collection__item'>
								<ProductItem img={coffeeItem.image} name={coffeeItem.name} />
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default CoffeeCollectionContent;
