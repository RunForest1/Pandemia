import React from 'react'
import { SliderItem } from '../Slider-item'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideBar from "react-slick";
import { ReactComponent as Right } from '../../images/right.svg';
import { ReactComponent as Left } from '../../images/left.svg';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
      <Right 
      onClick={onClick}
      className='absolute top-0 right-10 opacity-50 hover:opacity-100 cursor-pointer'
      />
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <Left
      onClick={onClick}
      className='ml-6 top-0 left-10 opacity-50 hover:opacity-100 cursor-pointer'
    />
  );
}

export const Slider = ({items = []}) => {
  const settings = {
    centerMode: true,
    centerPadding: "60px",
    
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div>
      <SlideBar {...settings}>
      {items.map(({text}) => <SliderItem key = {text} text = {text} />)}
      </SlideBar>
    </div>
  )
}

//{items.map(({text}) => <SliderItem key = {text} text = {text} />)}