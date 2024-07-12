import   { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AfroStyles from '../Data/afroStyles.js';
import './carousel.css';

const Carousel = () => {
  const [nav1, setNav1] = useState(null);
  const [slider1, setSlider1] = useState(null);

  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    nextArrow: (
    <div className="next-slick-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24">
        <path d="M318-200L518-480L318-760h98l200 280L416-200h-98Z" />
      </svg>
    </div>
  ),
  prevArrow: (
    <div className="prev-slick-arrow">
      <svg xmlns="http://www.w3.org/2000/svg" stroke="black" height="24" viewBox="0 -960 960 960" width="24">
        <path d="M318-200L518-480L318-760h98l200 280L416-200h-98Z" />
      </svg>
    </div>
  ),
    asNavFor: nav1,
    ref: slider => setSlider1(slider),
  };

  return (
    <>
      <div className="content">
        <h1 className="header">Stoop Sale Alert!  Top quality threads, jewels & more!  Don&apos;t sleep, these deals won&apos;t last! ⏰</h1>
        <div className="container">
          <Slider {...settings}>
            {AfroStyles.map((item) => (
              <div key={item.id}>
                <div className="img-body">
                  <img src={item.src} alt={item.alt} />
                </div>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="thumb-wrapper">
        {AfroStyles.map((item, idx) => (
          <div key={item.id} className={idx === slider1?.innerSlider?.state.currentSlide ? "active" : null} onClick={() => slider1.slickGoTo(idx)}>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Carousel;
