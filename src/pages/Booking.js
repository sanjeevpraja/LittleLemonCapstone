import Hero from '.././components/Hero';
import React from "react";
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
  height: '300px',
  borderRadius: '15px'
};



export default function Booking(){
  const initialOccasions = ['Birthday','Anniversary', 'Business Meeting', 'others'];
  const initialAvailableTimes = [
    {
      label: '17:00 PM',
      isReserved: true
    },
    {
      label: '17:30 PM',
      isReserved: true
    },
    {
      label: '18:00 PM',
      isReserved: false
    },
    {
      label: '18:30 PM',
      isReserved: false
    },
    {
      label: '19:00 PM',
      isReserved: false
    },
    {
      label: '19:30 PM',
      isReserved: false
    },
    {
      label: '20:00 PM',
      isReserved: false
    },
    {
      label: '20:30 PM',
      isReserved: false
    },
    {
      label: '21:00 PM',
      isReserved: false
    },
    {
      label: '21:30 PM',
      isReserved: false
    }
  ];

  return(
    <>
    <Hero content={content} className="hero-img"/>
      <Box className='mid-container'>
        <Grid templateColumns={{lg: '2fr 1fr', md: '1fr'}} gap={6}>
          <GridItem w='100%'>
            <BookingForm initialOccasions={initialOccasions} initialAvailableTimes={initialAvailableTimes}/>
          </GridItem>
          <GridItem w='100%' />
        </Grid>
      </Box>
    </>
)
};