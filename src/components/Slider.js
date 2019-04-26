import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
        dots: false,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        autoplay: true,
        autoplaySpeed: 2000
    };
    return (
      <Slider {...settings}>
        <div>
            <img src="./img/back1.jpg" alt="" />
        </div>
        <div>
            <img src="./img/back2.jpg" alt="" />
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider