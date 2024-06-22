import React from 'react';
import { IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        right: '-25px',
        transform: 'translateY(-50%)',
        zIndex: 2,
        color: '#351120',
       
      }}
    >
      <ArrowForwardIos />
    </IconButton>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        left: '-25px',
        transform: 'translateY(-50%)',
        zIndex: 2,
        color: '#351120',
        
        
      }}
    >
      <ArrowBackIos />
    </IconButton>
  );
};

export { NextArrow, PrevArrow };
