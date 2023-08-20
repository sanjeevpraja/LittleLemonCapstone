
import {Box, Grid, GridItem, Button, Heading, Text, Img} from "@chakra-ui/react";
import HeroImg from '.././img/hero-img.jpg';

export  default function Hero (props){
    const content = props.content;
    const className = props.className;
    return (
      <Box className='hero-wrap' mb={20}>
        <Box className='mid-container'>
        <Grid templateColumns={{lg: '2fr 1fr', md: '1fr'}} gap={6} alignItems='center'>
            <GridItem w='100%' >
                <Heading as='h1' size='4xl' noOfLines={1} mt={5} color={"secondary.500"}>
                  {content.title}
                </Heading>
                <Heading as='h3' size='xl' noOfLines={1} mb={2}>
                  {content.subTitle}
                </Heading>
                <Text mb={10}>{content.desc}</Text>
                {content.btnLabel && <Button colorScheme='secondary' color='#000000'>{content.btnLabel}</Button>}
            </GridItem>
            <GridItem w='100%' h='100%' position='relative'>
              <Img src={HeroImg} className={className} />
            </GridItem>
        </Grid>
        </Box>
      </Box>
    );
};