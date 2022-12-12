import React from 'react';
import './WholeSaleContent.scss';

function WholeSaleContent(props) {
  return (
    <div className="container__wholesale">
      <div className="wholesale__content">
        <h3 className="wholesale__title">Wholesale</h3>
        <p className="wholesale__subtitle">
          Are you looking for quality coffee for your café, home or office? We
          can help!
        </p>
        <p className="wholesale__subtitle">
          We can provide you with all of the essentials to get you started,
          including coffee machines, grinders and ancillary items.
        </p>
        <p className="wholesale__subtitle">
          Prices may vary depending on the volume of coffee that you require.
          Send an email to wholesale@two14coffee.com.au for a no obligation
          discussion with our team!
        </p>
      </div>
    </div>
  );
}

export default WholeSaleContent;
