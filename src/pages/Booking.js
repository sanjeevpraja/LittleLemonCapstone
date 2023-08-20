import Hero from '.././components/Hero';
import React, {useState} from "react";
import {
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import BookingForm from "../components/BookingForm";


const content = {
  title: 'Booking',
  subTitle: 'Please fill form to reserve table',
  desc: 'You can call us if you need to change or cancel reservation',
  btnLabel: ''
};
const imgStyle = {
  float: 'right',
  height: '300px',
  borderRadius: '15px'
};



export default function Booking(){
  return(
    <>
    <Hero content={content} imgStyle={imgStyle}/>
      <Box className='mid-container'>
        <Grid templateColumns='2fr 1fr' gap={6}>
          <GridItem w='100%'>
            <BookingForm />
          </GridItem>
          <GridItem w='100%' />
        </Grid>
      </Box>
    </>
)
};