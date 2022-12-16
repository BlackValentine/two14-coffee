import React from 'react';
import ProductItem from '../GeneralComponents/ProductItem';
import "./Coffee.scss"
import coffee1 from '../../assets/images/coffee1.webp';
import coffee2 from '../../assets/images/coffee2.webp';
import coffee3 from '../../assets/images/coffee3.webp';
import coffee4 from '../../assets/images/coffee4.webp';

function Coffee(props) {
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
  ];
  
	return (
		<div className='container container__coffee-blend'>
			<div className='coffee-blend__header'>
				<h3 className='coffee-blend__title'>Our Coffee Blends</h3>
				<a href='#' className='coffee-blend__all'>
					<span>View all products →</span>
				</a>
			</div>

			<ul className='coffee-blend__list'>
				{coffeeList.map((coffeeItem, index) => {
					return (
						<li className='coffee-collection__item'>
							<ProductItem img={coffeeItem.img} name={coffeeItem.name} />
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Coffee;
