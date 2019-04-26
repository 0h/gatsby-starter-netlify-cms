import React from 'react'
import Flickity from 'react-flickity-component'
import "./assets/flickity.css";

const flickityOptions = {
    initialIndex: 2
}

export const Carousel = ({ children }) => (
    <Flickity className={'carousel'} // default ''
    elementType={'div'} // default 'div'
    options={flickityOptions} // takes flickity options {}
    disableImagesLoaded={false} // default false
    reloadOnUpdate // default false
    >{children}</Flickity>
)

export default Carousel