import React from 'react';
import "./MediaContent.scss";
import partner1 from "../../assets/images/partner1.jpg";
import partner2 from "../../assets/images/partner2.jpg";
import partner3 from "../../assets/images/partner3.jpg";
import partner4 from "../../assets/images/partner4.jpg";
import partner5 from "../../assets/images/partner5.jpg";
import partner6 from "../../assets/images/partner6.jpg";
import partner7 from "../../assets/images/partner7.jpg";
import partner8 from "../../assets/images/partner8.jpg";
import partner9 from "../../assets/images/partner9.jpg";

function PartnerContent(props) {
  const partnerList = [
    {
      image: partner1,
      title: "CAFE TWO 14",
      subTitle: "Cafe Two 14 is a our veteran based cafe chain. Franchises are available, please email admin@cafetwo14.com.au for more information."
    },
    {
      image: partner2,
      title: "THE STRATEGIC EMPLOYEE",
      subTitle: "A veteran owned and operated public speaking and consulting firm, owned by the Two 14 Group."
    },
    {
      image: partner3,
      title: "GO2 HEALTH",
      subTitle: "GO2 Health is your healthcare team supporting current and former service men and women, emergency services personnel, police and their families with wide range of medical services. Their friendly and supportive team treats you as a whole person (not a set of conditions) and their aim is for you to get more out of life."
    },
    {
      image: partner4,
      title: "APPRECI",
      subTitle: "Aprecci was started to create more joy and cohesion in the world by helping people express their appreciation for one another."
    },
    {
      image: partner5,
      title: "SURVIVE TO THRIVE NATION",
      subTitle: "A Veteran owned and operated company that coaches current and former service personnel and their family’s independence with overcoming mental health adversities and successfully transitioning back to civilian life."
    },
    {
      image: partner6,
      title: "ALF LAWYERS",
      subTitle: "ALF Lawyers has been providing support for a number of years to veteran businesses and clients on a range of areas including commercial law, property law, employment law and family law."
    },
    {
      image: partner7,
      title: "42 FOR 42",
      subTitle: "42 for 42 is a non-profit organisation founded by Afghanistan combat veterans. The team at 42 for 42 are dedicated to supporting the families of fallen Afghanistan veterans as well as those who have returned from active duty in Afghanistan, and their families."
    },
    {
      image: partner8,
      title: "VETERAN WEALTH",
      subTitle: "Our purpose is to ensure all servicemen and women, past and present, are equipped to make the right financial decision for their future. Veteran Wealth is owned and operated by veterans, for veterans. Our focus is on educating military families on building and protecting their empire."
    },
    {
      image: partner9,
      title: "YOUNG DIGGERS",
      subTitle: "Too many serving and ex-serving personnel and their families have difficulties coping with the stresses and fall-out of military service. Young Diggers' purpose is to provide you with the help you need. It's about you."
    },
  ]

  return (
    <div className="bg-primary">
      <div className="container media__container">
        <h3 className="media__title">Partners</h3>
        <ul className="media__list">
          {partnerList.map((partnerItem, index) => {
            return (
              <li key={index} className="media__item">
                <img src={partnerItem.image} alt="mediaImage" />
                <h6 className="media__item-title">{partnerItem.title}</h6>
                <p className="media__item-subtitle">{partnerItem.subTitle}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PartnerContent;
