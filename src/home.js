import Hero from './components/hero';
import MenuCards from "./components/card";
import Testimonials from "./components/testimonials";
import Banner from "./components/banner";
import {Box, Button, Flex, Heading} from "@chakra-ui/react";
import React from "react";

const content = {
  title: 'Little lemon',
  subTitle: 'Chicago',
  desc: 'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist',
  btnLabel: 'Reserve a Table'
};
const imgStyle = {
  position: 'absolute',
  right: 0,
  borderRadius: '15px'
};

export default function Home(){
  return(
    <>
    <Hero content={content} imgStyle={imgStyle}/>
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