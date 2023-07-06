import React from 'react'

import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import Logo from './../../assets/images/logo.png'
import Slider1 from './../../assets/images/slider-1.png'
import Slider2 from './../../assets/images/slider-2.png'
import Slider3 from './../../assets/images/slider-3.png'
import Slider4 from './../../assets/images/slider-4.png'
import Slider5 from './../../assets/images/slider-5.png'
import Slider6 from './../../assets/images/slider-6.png'

import './Header.css'

const Header = () => {
  return (
    <header>
      <div className="header-wrapper">
        <div className="header-bar">
          <img src={Logo} alt="Logo" className="logo" />
          <div className="logo-name">Marine Innovation Seminar 2023</div>
        </div>
        <div>
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop={false}
            emulateTouch
            autoPlay={true}
            useKeyboardArrows
            transitionTime={1000}
            interval={5000}
            // axis="vertical"
            // selectedItem={1}
            // width="600px"
          >
            <div className="slide-holder">
              <img src={Slider1} alt="banner-1" />
              <div className="decoration-container">
                <div className="decoration-heading">Seminar</div>
                <div className="decoration-body">
                  Embark on an inspirational voyage as our esteemed keynote
                  speaker takes center stage to unveil the profound impact of
                  artificial intelligence on the marine domain. Prepare to have
                  your perspectives broadened and horizons expanded.
                </div>
              </div>
            </div>
            <div className="slide-holder">
              <img alt="banner-2" src={Slider2} />
              <div className="decoration-container">
                <div className="decoration-heading">Seminar</div>
                <div className="decoration-body">
                  Embark on an inspirational voyage as our esteemed keynote
                  speaker takes center stage to unveil the profound impact of
                  artificial intelligence on the marine domain. Prepare to have
                  your perspectives broadened and horizons expanded.
                </div>
              </div>
            </div>
            <div className="slide-holder">
              <img alt="banner-3" src={Slider3} />
              <div className="decoration-container">
                <div className="decoration-heading">Seminar</div>
                <div className="decoration-body">
                  Embark on an inspirational voyage as our esteemed keynote
                  speaker takes center stage to unveil the profound impact of
                  artificial intelligence on the marine domain. Prepare to have
                  your perspectives broadened and horizons expanded.
                </div>
              </div>
            </div>
            <div className="slide-holder">
              <img alt="banner-4" src={Slider4} />
              <div className="decoration-container">
                <div
                  className="decoration-heading"
                  style={{ textShadow: '-1px 4px 5px #FFB200' }}
                >
                  Cocktail
                </div>
                <div className="decoration-body">
                  Raise a toast to newfound friendships, fruitful
                  collaborations, and the extraordinary knowledge shared
                  throughout the day. Enjoy an elegant networking reception,
                  where you can continue to engage in stimulating conversations
                  while savoring delightful refreshments.
                </div>
              </div>
            </div>
            <div className="slide-holder">
              <img alt="banner-5" src={Slider5} />
              <div className="decoration-container">
                <div
                  className="decoration-heading"
                  style={{ textShadow: '-1px 4px 5px #FFB200' }}
                >
                  Cocktail
                </div>
                <div className="decoration-body">
                  Raise a toast to newfound friendships, fruitful
                  collaborations, and the extraordinary knowledge shared
                  throughout the day. Enjoy an elegant networking reception,
                  where you can continue to engage in stimulating conversations
                  while savoring delightful refreshments.
                </div>
              </div>
            </div>
            <div className="slide-holder">
              <img alt="banner-6" src={Slider6} />
              <div className="decoration-container">
                <div
                  className="decoration-heading"
                  style={{ textShadow: '-1px 4px 5px #FFB200' }}
                >
                  Dinner
                </div>
                <div className="decoration-body">
                  Celebrate the culmination of our enlightening seminar with a
                  sensational Dinner with Light Entertainment. After a day
                  filled with valuable insights and stimulating discussions,
                  unwind and indulge in a remarkable evening of gourmet dining
                  and captivating entertainment.
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </header>
  )
}

export default Header
