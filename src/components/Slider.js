import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          height: window.innerHeight
        }
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
      }
      
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
      }
      
      updateWindowDimensions() {
        this.setState({ height: window.innerHeight });
      }

    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            swipe: true,
            autoplay: true,
            autoplaySpeed: 5000,
        };
        const style = { width: '100%', height:`${ this.state.height-44 }px` }
        return (
        <Slider {...settings}>
            <div>
                <img src="./img/back1.jpg" alt="" style={style}/>
            </div>
            <div>
                <img src="./img/back2.jpg" alt="" style={style}/>
            </div>
        </Slider>
        );
    }
}

export default SimpleSlider