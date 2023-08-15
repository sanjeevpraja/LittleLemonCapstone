import {Box, Grid, GridItem, Button, Heading, Text, Img} from "@chakra-ui/react";
import BannerImg from '.././img/hero-img.jpg';

const content = {
        title: 'Little lemon',
        subTitle: 'Chicago',
        desc: 'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist',
        btnLabel: 'Reserve a Table'
    };

export  default function Banner (){
    return (
      <Box className='banner-wrap' mb={20}>
        <Grid templateColumns='repeat(2, 1fr)' gap={6} >
            <GridItem w='100%' >
                <Heading as='h1' size='4xl' noOfLines={1} mt={5}>
                  {content.title}
                </Heading>
                <Heading as='h3' size='xl' noOfLines={1} mb={2}>
                  {content.subTitle}
                </Heading>
                <Text mb={10}>{content.desc}</Text>
                <Button colorScheme='secondary' color='#000000'>{content.btnLabel}</Button>
            </GridItem>
            <GridItem w='100%' mb={100}>
              <div className='image-merge'>
                <Img src={BannerImg}  className='image-1'/>
                <Img src={BannerImg}  className='image-2'/>
              </div>
            </GridItem>
        </Grid>
      </Box>
    );
};