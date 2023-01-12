import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function ApparelDetail(props) {
  const { state } = useLocation();
  const apparelSize = ['S', 'M', 'L', 'XL', '2XL', '3XL'];

  const [sizeChoice, setSizeChoice] = useState('');
  const [productQuantity, setProductQuantity] = useState(1);

  return (
    <div className="product-detail__wrap">
      <div className="container container__product-detail">
        <div className="product-detail__img">
          <img src={state.image} alt="productImg" />
        </div>
        <div className="product-detail">
          <h3 className="product-detail__title">{state.name}</h3>
          <span className="product-detail__author">{state.author}</span>
          <p className="product-detail__subtitle">{state.description}</p>

          <table className="product-detail__shirt-table-size">
            <thead>
              <tr>
                <th className="text-left bold">Size guide</th>
                {apparelSize.map((sizeItem, index) => {
                  return (
                    <th key={index} className="bold">
                      {sizeItem}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left bold">Width (cm)</td>
                <td>47</td>
                <td>52</td>
                <td>56</td>
                <td>61</td>
                <td>64</td>
                <td>67</td>
              </tr>
              <tr>
                <td className="text-left bold">Height (cm)</td>
                <td>71</td>
                <td>75</td>
                <td>78</td>
                <td>82</td>
                <td>85</td>
                <td>87</td>
              </tr>
            </tbody>
          </table>

          <div className="option">
            <h6 className="option__title">Size</h6>
            <ul className="option__list">
              {apparelSize.map((sizeItem, index) => {
                return (
                  <li
                    key={index}
                    className={`option__item ${
                      sizeItem === sizeChoice ? 'active' : ''
                    } `}
                    onClick={() => setSizeChoice(sizeItem)}
                  >
                    <span>{sizeItem}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="product-detail__quantity">
            <h6 className="quantity__title">Quantity</h6>
            <div className="d-flex align-items-center">
              <input
                type="number"
                value={productQuantity}
                onChange={(e) => {
                  if (e.target.value < 1) {
                    setProductQuantity(1);
                  } else {
                    setProductQuantity(e.target.value);
                  }
                }}
              />
              <span>
                ${((state.price / 100) * productQuantity).toFixed(2)} AUD
              </span>
            </div>
          </div>

          <div className="radio">
            <h6 className="radio__title">PURCHASE OPTIONS</h6>
            <ul className="radio__list">
              <li className="radio__option">
                <input type="radio" name="purchase-option" value="one-time" />
                <span>One Time Purchase</span>
              </li>
              <li className="radio__option">
                <input type="radio" name="purchase-option" value="subscribe" />
                <span>Subscribe and Save 10%</span>
              </li>
            </ul>
          </div>

          <button className="product-detail__add-btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default ApparelDetail;
