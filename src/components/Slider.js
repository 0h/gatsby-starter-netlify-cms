import React from "react"
import Slider from "react-slick"

class SimpleSlider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          height: 0, // or your default width here
        }
      }
      componentDidMount() {
        this.handleWindowSizeChange() // Set width
        window.addEventListener('resize', this.handleWindowSizeChange)
      }
    
      // make sure to remove the listener
      // when the component is not mounted anymore
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange)
      }
    
      handleWindowSizeChange = () => {
        this.setState({ height: window.innerHeight })
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