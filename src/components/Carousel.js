import React, { Component } from 'react'
import Flickity from 'react-flickity-component'
import "../assets/flickity.css";
export default class Carousel extends Component {
  render() {
    if (typeof window !== 'undefined') {
      return (
          <Flickity>
            <img src="./img/back1.jpg" />
            <img src="./img/back2.jpg" />
          </Flickity>
      )
    }
    return null
  }
}