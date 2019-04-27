import React from "react";
import AwesomeSlider from 'react-awesome-slider';
import i1 from '../img/1.jpg'
import i2 from '../img/2.jpg'
import i3 from '../img/3.jpg'
import AwsSliderStyles from '../components/foldout.scss';


class SimpleSlider extends React.Component {

  render() {
    return (
      <AwesomeSlider
        name="images"
        cssModule={AwsSliderStyles}
        >
        <div data-src={i1} />
        <div data-src={i2} />
        <div data-src={i3} />
      </AwesomeSlider>
    );
  }
}

export default SimpleSlider