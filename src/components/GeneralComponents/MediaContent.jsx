import React from 'react';
import './MediaContent.scss';
import media1 from '../../assets/images/media1.jpg';
import media2 from '../../assets/images/media2.jpg';
import media3 from '../../assets/images/media3.jpg';
import media4 from '../../assets/images/media4.jpg';
import media5 from '../../assets/images/media5.jpg';
import media6 from '../../assets/images/media6.jpg';

function MediaContent(props) {
  const mediaList = [
    {
      image: media1,
      title: 'PAYING IT FORWARD - RSL QLD',
      date: '08 Apr 2020',
      subTitle:
        "No One Left Behind is the brainchild of Afghanistan veteran Michael Lorrigan, who owns the Café Two 14 chain on Brisbane's northside.",
      link: 'https://rslqld.org/about-us/careers/paying-it-forward',
    },
    {
      image: media2,
      title: 'QLD BUSINESS USE SAVINGS TO KEEP AFLOAT',
      date: '09 Aug 2021',
      subTitle:
        'Brisbane cafe chain boss Michael Lorrigan says the snap lockdowns and uncertainty have impacted on his young workforce.',
      link: 'https://www.canberratimes.com.au/story/7376784/qld-business-use-savings-to-keep-afloat/',
    },
    {
      image: media3,
      title:
        "ARMY OFFICER TURNED CAFE OWNER'S KIND IDEA TO HELP THE NEEDY DURING PANDEMIC - YAHOO! NEWS",
      date: '10 May 2020',
      subTitle:
        'Michael Lorrigan is using his new career to help others in the fight against the coronavirus pandemic.',
      link: 'https://au.news.yahoo.com/army-officer-turned-cafe-owners-kind-idea-to-help-the-needy-during-pandemic-012101093.html?guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAI4Zy51-hbHFpn3PuidoFmfmfIeJ9zEGzyyN118J0fb2Iaa9-Yuax9LOvtA7WdI3XL9nWtA3Tz7VZPDh1CKq5rOlwafnAuCRReAxUDOwirtMsk3-HO7ZS4VQnjB3lQQbSNlSPGoN1KdhVTbc7r0xbPeLB_BsGPwsSKq-ZFVK-WLr&guccounter=2',
    },
    {
      image: media4,
      title: 'PRESS RELEASE WITH DAVID CRISAFULLI MP AND BRENT MICKELBERG MP',
      date: '10 Aug 2021',
      subTitle:
        'Cafe Two 14 has taken a hit from COVID-19, the associated lockdowns and continuing uncertainty.',
      link: 'https://www.facebook.com/BrentMickelbergMP/videos/837417480495829/',
    },
    {
      image: media5,
      title: 'PODCAST: VCBC #9 MICK LORRIGAN; CAFE TWO 14, WHY? WHY NOT?',
      date: '19 Oct 2020',
      subTitle:
        'In this episode of the podcast, we speak with Michael Lorrigan founder of Cafe Two 14, a chain and now a franchise of cafes located in Brisbane.',
      link: 'https://www.youtube.com/watch?v=SxaMYJP-i2c',
    },
    {
      image: media6,
      title: 'PODCAST: THE WIRELESS PODCAST; VETERAN & COFFEE ENTREPRENEUR',
      date: '18 Aug 2021',
      subTitle:
        'Damien Brown sits down with Michael Lorrigan of Cafe Two14 to discuss life in the army, being an officer, deployment in Afghanistan as well as their feelings about recent developments involving the Taliban taking control of Kabul, the capital of Afghanistan.',
      link: 'https://www.youtube.com/watch?v=HQH3iml0t0I',
    },
  ];

  return (
    <div className="bg-primary">
      <div className="container media__container">
        <div className="d-flex flex-columns">
          <h3 className="media__title">Podcasts & Relevant News</h3>
          <p className="media__subtitle">
            Learn more about our causes and how we're helping veterans move
            forward.
          </p>
        </div>
        <ul className="media__list">
          {mediaList.map((mediaItem, index) => {
            return (
              <li key={index} className="media__item">
                <img src={mediaItem.image} alt="mediaImage" />
                <h6 className="media__item-title">{mediaItem.title}</h6>
                <p className="media__item-date">{mediaItem.date}</p>
                <p className="media__item-subtitle">{mediaItem.subTitle}</p>
                <button>
                  <a href={mediaItem.link} target="_blank">More</a>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default MediaContent;
