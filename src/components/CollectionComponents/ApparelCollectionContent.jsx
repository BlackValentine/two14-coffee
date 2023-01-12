/** @format */

import React, { useEffect } from 'react';
import './CoffeeCollectionContent.scss';
import ProductItem from '../GeneralComponents/ProductItem';
import { useDispatch, useSelector } from 'react-redux';
import { getAllApparel, getAllCoffee } from '../../store/api';
import { useNavigate } from 'react-router-dom';

function ApparelCollectionContent(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allApparelProducts = useSelector(
    (state) => state.product.allApparelProducts
  );

  useEffect(() => {
    if (allApparelProducts.length <= 0) {
      dispatch(getAllApparel());
    }
  }, [allApparelProducts]);

  const handleGoDetailApparel = (apparelItem) => {
		const path = `/collections/apparel/${apparelItem.id}`
    navigate(path, { state: apparelItem })
	}

  return (
    <div className="coffee-collection__container">
      <div className="container">
        <h3 className="coffee-collection__title">APPAREL</h3>
        <p className="coffee-collection__subtitle">
          We craft an array of premium blends to suit any coffee lover's taste.
          When you purchase any of our coffee products, a portion of profits
          goes towards veteran charities and organisations to help veterans move
          forward.
        </p>
        <ul className="coffee-collection__list">
          {allApparelProducts.map((apparelItem, index) => {
            return (
              <li key={index} className="coffee-collection__item" onClick={() => handleGoDetailApparel(apparelItem)}>
                <ProductItem img={apparelItem.image} name={apparelItem.name} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ApparelCollectionContent;
