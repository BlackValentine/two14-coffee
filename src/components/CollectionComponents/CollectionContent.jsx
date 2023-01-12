/** @format */

import React from 'react';
import './CollectionContent.scss';
import FashionCollection from '../../assets/images/FashionCollection.webp';
import CoffeeCollection from '../../assets/images/CoffeeCollection.webp';
import SyrupsCollection from '../../assets/images/SyrupsCollection.webp';
import GiftCollection from '../../assets/images/GiftCollection.webp';
import ProductItem from '../GeneralComponents/ProductItem';
import { Link } from 'react-router-dom';

function CollectionContent(props) {
  const collectionList = [
    {
      img: FashionCollection,
      name: 'Apparel',
			url: '/collections/apparel-blend'
    },
    {
      img: CoffeeCollection,
      name: 'Coffee',
			url: '/collections/coffee-blend'
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
    <div className="collection__container">
      <div className="container">
        <h3 className="collection__title">COLLECTION</h3>
        <ul className="collection__list">
          {collectionList.map((collectionItem, index) => {
            return (
              <Link to={collectionItem.url}>
                <li key={index} className="collection__item">
                  <ProductItem img={collectionItem.img} name={collectionItem.name} />
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default CollectionContent;
