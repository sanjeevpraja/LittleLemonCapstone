import Hero from '.././components/Hero';
import MenuCards from ".././components/Card";
import Testimonials from ".././components/Testimonials";
import Banner from ".././components/Banner";
import {Box, Button, Flex, Heading} from "@chakra-ui/react";
import React from "react";

const content = {
  title: 'Little lemon',
  subTitle: 'Chicago',
  desc: 'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist',
  btnLabel: 'Reserve a Table'
};

export default function Home(){
  return(
    <>
      <Hero content={content}  className="hero-img is-home"/>
      <Box className='mid-container'>
        <Flex h={24} w="100%" alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Heading>Specials</Heading>
          </Box>
          <Box>
            <Button>Online Menu</Button>
          </Box>
        </Flex>
      </Box>
      <Box className='mid-container'>
        <MenuCards />
      </Box>

      <Box bgColor={"primary.100"} my={100} py={100}>
        <Box className='mid-container'>
          <Testimonials/>
        </Box>
      </Box>

      <Box className='mid-container' mb={120} >
        <Banner/>
      </Box>
    </>
)
};