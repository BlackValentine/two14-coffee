/** @format */

import React from 'react';
import './CollectionContent.scss';
import FashionCollection from "../../assets/images/FashionCollection.webp";
import CoffeeCollection from "../../assets/images/CoffeeCollection.webp";
import SyrupsCollection from "../../assets/images/SyrupsCollection.webp";
import GiftCollection from '../../assets/images/GiftCollection.webp';
import ProductItem from '../GeneralComponents/ProductItem';

function CollectionContent(props) {
	const coffeeList = [
		{
			img: FashionCollection,
			name: 'Apparel',
		},
		{
			img: CoffeeCollection,
			name: 'Coffee',
		},
		{
			img: SyrupsCollection,
			name: 'Coffee Syrups',
		},
		{
			img: GiftCollection,
			name: 'Gifts & Accessories',
		},
	];
	return (
		<div className='collection__container'>
			<div className='container'>
				<h3 className='collection__title'>COLLECTION</h3>
				<ul className='collection__list'>
					{coffeeList.map((coffeeItem, index) => {
						return (
							<li key={index} className='collection__item'>
								<ProductItem img={coffeeItem.img} name={coffeeItem.name} />
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}

export default CollectionContent;
