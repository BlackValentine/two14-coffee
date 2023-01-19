import React from 'react';
import './Footer.scss';
import BigLogo from '../../assets/images/bigLogo.svg';

function Footer(props) {
  return (
    <div className="container__footer">
      <div className="footer__bigLogo">
        <img src={BigLogo} alt="" />
      </div>
      <div className="container">
        <div className="footer__info">
          <div className="footer__info-item">
            <h6>Products</h6>
            <ul>
              <li>Coffee</li>
              <li>Apparel</li>
              <li>Gifts & Accessories</li>
              <li>No One Left Behind</li>
            </ul>
          </div>
          <div className="footer__info-item">
            <h6>Customer Info</h6>
            <ul>
              <li>My Account</li>
              <li>Contact Us</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="footer__info-item">
            <h6>Company</h6>
            <ul>
              <li>About Us</li>
              <li>Cafe Locations</li>
              <li>Wholesale Distribution</li>
            </ul>
          </div>
          <div className="footer__info-item">
            <h6>Policies</h6>
            <ul>
              <li>Shipping Policy</li>
              <li>Refund Policy</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        <div className="footer__follow">
          <div className="follow__email">
            <h6 className="follow__email-title">Sign up for our newsletter</h6>
            <p className="follow__email-subtitle">
              Be the first to know when we launch a new product or when we need
              your support to rally for a cause.
            </p>
            <div className="follow__email-form">
              <input type="text" />
              <button>Sign up</button>
            </div>
          </div>
          <div className="follow__social">
            <h6 className="follow__social-title">Follow us</h6>
            <p className="follow__social-subtitle">
              You know the drill. Show your support by following and sharing our
              message on social media.
            </p>
            <div className="follow__social-icon">
              <a href="#">
                <i className="fab fa-facebook-square"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <span>© Copyright Black Valentine.</span>
          <div className="d-flex align-items-center">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
