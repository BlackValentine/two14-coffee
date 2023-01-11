import React from 'react';
import coffee1 from '../../assets/images/coffee1.webp';

function ApparelDetail(props) {
  const apparelSize = ['S', 'M', 'L', 'XL', '2XL', '3XL'];
  return (
    <div className="product-detail__wrap">
      <div className="container container__product-detail">
        <div className="product-detail__img">
          <img src={coffee1} alt="productImg" />
        </div>
        <div className="product-detail">
          <h3 className="product-detail__title">CAFE TWO 14 LOGO T-SHIRT</h3>
          <span className="product-detail__author">Two 14 Coffee Co.</span>
          <p className="product-detail__subtitle">
            Support Two 14 Coffee Co by ordering this Cafe Two 14 logo t-shirt.
            Our t-shirts are printed on high-quality AS Colour premium tees, a
            100% Combed Cotton, long-lasting build.
          </p>

          <table className="product-detail__shirt-table-size">
            <tr>
              <th className="text-left">Size guide</th>
              {apparelSize.map((sizeItem, index) => {
                return <th key={index}>{sizeItem}</th>;
              })}
            </tr>
            <tr>
              <td className="text-left">Width (cm)</td>
              <td>47</td>
              <td>52</td>
              <td>56</td>
              <td>61</td>
              <td>64</td>
              <td>67</td>
            </tr>
            <tr>
              <td className="text-left">Height (cm)</td>
              <td>71</td>
              <td>75</td>
              <td>78</td>
              <td>82</td>
              <td>85</td>
              <td>87</td>
            </tr>
          </table>

          <div className="option">
            <h6 className="option__title">Size</h6>
            <ul className="option__list">
              {apparelSize.map((sizeItem, index) => {
                return (
                  <li key={index} className="option__item">
                    <span>{sizeItem}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="product-detail__quantity">
            <h6 className="quantity__title">Quantity</h6>
            <div className="d-flex align-items-center">
              <input type="number" value={1} />
              <span>$39.00 AUD</span>
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
