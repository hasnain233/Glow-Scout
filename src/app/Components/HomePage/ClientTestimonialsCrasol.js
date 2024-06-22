'use client'
import { Box, Fade } from '@mui/material';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ClientTestimonials from './ClientTestimonials'
import img1 from "../../Images/landingPageClient.png"
import { NextArrow, PrevArrow } from '../TrendingTreatment/CustomArrow'


export default function CardCrasol(){
  const clientInfo = [
    {img: img1,title:'Ashley K.', description:'It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.'},
    {img: img1,title:'Ashley K.', description:'It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.'},
    {img: img1,title:'Ashley K.', description:'It’s a long established fact that glowscout is doing such a great job. It’s a long established fact that glowscout is doing such a great job.'},

    
  ];

  const [currentSlide, setCurrentSlide] = useState(0); // State to track the current active slide index

  const settings = {
    dots: true,
    Fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
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
        {clientInfo.map((cards, index) => (
            <ClientTestimonials
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