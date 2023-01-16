import React, { useEffect } from 'react';
import ProductItem from '../GeneralComponents/ProductItem';
import './Coffee.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Coffee(props) {
  const navigate = useNavigate();
  const coffeeList = [0, 1, 2, 3];

  const allCoffeeProducts = useSelector(
    (state) => state.product.allCoffeeProducts
  );

  const handleGoDetailCoffee = (coffeeItem) => {
    const path = `/collections/coffee/${allCoffeeProducts[+coffeeItem].id}`;
    navigate(path, { state: allCoffeeProducts[coffeeItem] });
  };

  return (
    <div className="container container__coffee-blend">
      <div className="coffee-blend__header">
        <h3 className="coffee-blend__title">Our Coffee Blends</h3>
        <Link to={'/collections/coffee-blend'}>
          <span className="coffee-blend__all">View all products →</span>
        </Link>
      </div>

      {allCoffeeProducts.length > 0 && (
        <ul className="coffee-blend__list">
          {coffeeList.map((coffeeItem, index) => {
            return (
              <li
                key={index}
                className="coffee-collection__item"
                onClick={() => handleGoDetailCoffee(coffeeItem)}
              >
                <ProductItem
                  img={allCoffeeProducts[+coffeeItem].image}
                  name={allCoffeeProducts[+coffeeItem].name}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Coffee;
