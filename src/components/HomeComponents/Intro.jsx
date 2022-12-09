import React from 'react';
import "./Intro.scss"
import BigLogo from "../../assets/images/bigLogo.svg"

function Intro(props) {
  return (
    <div className="container__intro">
      <div className="intro__left">
        <img src={BigLogo} alt="" />
      </div>
      <div className="intro__right">
        <div className="intro__right-content-wrap">
          <div className="intro__right-content">
            <h3>Coffee made with military precision.</h3>
            <p>We are an Australian, veteran-backed business roasting delicious coffee blends for like-minded companies.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;