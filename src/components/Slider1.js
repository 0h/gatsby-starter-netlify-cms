import React from 'react';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

class SimpleSlider1 extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        totalSlides={3}
        isPlaying={true}
      >
        <Slider>
          <Slide index={0}><img src="../img/back1.jpg" alt=""/></Slide>
          <Slide index={1}><img src="../img/back2.jpg" alt=""/></Slide>
          <Slide index={2}><img src="../img/back1.jpg" alt=""/></Slide>
        </Slider>
      </CarouselProvider>
    );
  }
}

export default SimpleSlider1