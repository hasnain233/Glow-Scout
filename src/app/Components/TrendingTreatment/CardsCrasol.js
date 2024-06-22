'use client'
import { Box } from '@mui/material';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from '../Card'
import img1 from "../../Images/landingPage1.png"
import img2 from "../../Images/landingPage2.png"
import img3 from "../../Images/landingPage3.png"
import img4 from "../../Images/landingPage4.png"
import img5 from "../../Images/landingPage5.png"
import { NextArrow, PrevArrow } from './CustomArrow'


export default function CardCrasol(){
  const cardinfo = [
    {img: img1,title:'Laser Resurfacing', description:'Lorem Ipsum'},
    {img: img2,title:'Chemical Peels', description:'Lorem Ipsum'},
    {img: img3,title:'Acne Bluelight Therapy', description:'Lorem Ipsum'},
    {img: img4,title:'Thermage', description:'Lorem Ipsum'},
    {img: img5,title:'Botox', description:'Lorem Ipsum'}
    
  ];

  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current active slide index

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    beforeChange: (current, next) => setCurrentSlide(next) // Update currentSlide state before slide change
  };
  return(
    <>
    <Box sx={{marginRight:'0px'}}>
     <Slider {...settings}>
        {cardinfo.map((cards, index) => (
            <Card
            key={index}
            img={cards.img}
            heading={cards.title}
            content={cards.description}
             
            />
            ))}
       </Slider>
       </Box>
            </>
  )
}