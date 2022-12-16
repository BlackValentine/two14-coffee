/** @format */

import React from 'react';
import './CoffeeCollectionContent.scss';
import coffee1 from '../../assets/images/coffee1.webp';
import coffee2 from '../../assets/images/coffee2.webp';
import coffee3 from '../../assets/images/coffee3.webp';
import coffee4 from '../../assets/images/coffee4.webp';
import coffee5 from '../../assets/images/coffee5.webp';
import coffee6 from '../../assets/images/coffee6.webp';
import coffee7 from '../../assets/images/coffee7.webp';
import coffee8 from '../../assets/images/coffee8.webp';
import ProductItem from '../GeneralComponents/ProductItem';

function CoffeeCollectionContent(props) {
	const coffeeList = [
		{
			img: coffee1,
			name: 'Two 14 Armoured Blend',
		},
		{
			img: coffee2,
			name: 'Two 14 Lighthorse Blend',
		},
		{
			img: coffee3,
			name: 'The PineApple Expresso',
		},
		{
			img: coffee4,
			name: 'Two 14 Premium Blend',
		},
		{
			img: coffee5,
			name: 'Single Origin Decaf',
		},
		{
			img: coffee6,
			name: 'Vateran Support Blend',
		},
		{
			img: coffee7,
			name: 'Disaster Relief Blend',
		},
		{
			img: coffee8,
			name: 'H.E.A.T Coffee Capsules',
		},
	];
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
					{coffeeList.map((coffeeItem, index) => {
						return (
							<li key={index} className='coffee-collection__item'>
								<ProductItem img={coffeeItem.img} name={coffeeItem.name} />
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default CoffeeCollectionContent;
