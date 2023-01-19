import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductItem from './ProductItem';
import './SearchContent.scss';

function SearchContent(props) {
  const allCoffeeProducts = useSelector(
    (state) => state.product.allCoffeeProducts
  );
  const allApparelProducts = useSelector(
    (state) => state.product.allApparelProducts
  );

  const [searchValue, setSearchValue] = useState('');
  const [allProducts, setAllProducts] = useState([
    ...allCoffeeProducts,
    ...allApparelProducts,
  ]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [textSearch, setTextSearch] = useState('');

  useEffect(() => {
    setAllProducts([...allCoffeeProducts, ...allApparelProducts]);
  }, [allCoffeeProducts, allApparelProducts]);

  const handleChangeSearchInput = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSearchProduct = () => {
    if (searchValue.length > 0) {
      const allProductsCopy = [...allProducts];
      const filter = allProductsCopy.filter(
        (product) =>
          product.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          product.description.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilterProducts(filter);
      if (filter.length > 0) {
        setTextSearch(`${filter.length} results found for “${searchValue}”`);
      } else {
        setTextSearch(`No results found for “${searchValue}”. Check the spelling or use a different word or phrase.`);
      }
    } else {
      setFilterProducts([]);
      setTextSearch("")
    }
  };

  const handleGoDetailCoffee = (productItem) => {
    console.log(productItem)
    // const path = `/collections/coffee/${coffeeItem.id}`
    // navigate(path, { state: coffeeItem })
  }

  return (
    <div className="bg-primary">
      <div className="container search-content__container">
        <h3 className="search-content__title text-left">Search</h3>
        <div className="search-content__find">
          <input
            type="text"
            placeholder="Search for products on our store..."
            value={searchValue}
            onChange={(e) => handleChangeSearchInput(e)}
          />
          <button onClick={handleSearchProduct}>Search</button>
        </div>

        <p className="search-content__text-result">{textSearch}</p>

        <ul className="search-content__list">
          {filterProducts.map((productItem, index) => {
            return (
              <li
                key={index}
                className="search-content__item"
                onClick={() => handleGoDetailCoffee(productItem)}
              >
                <ProductItem img={productItem.image} name={productItem.name} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SearchContent;
