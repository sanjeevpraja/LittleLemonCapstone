import React from "react";
import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Image,
  GridItem,
  Grid, Box
} from '@chakra-ui/react';
import {Icon, StarIcon} from '@chakra-ui/icons'


const testimonialList = [
  {
    name: 'Jenny Wilson',
    rating: 5,
    saying: 'For athletes, high altitude produces two contradictory effects on performance. For explosive events.',
    img: 'avatar-1'
  },
  {
    name: 'Marvin McKinney',
    rating: 4,
    saying: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, to',
    img: 'avatar-2'
  },
  {
    name: 'Arlene McCoy',
    rating: 4,
    saying: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu',
    img: 'avatar-3'
  },
  {
    name: 'Arlene McCoy dsfa',
    rating: 4,
    saying: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu',
    img: 'avatar-4'
  }
]

const Testimonial = (props) => {
  const item = props.item;
  const rating = (count) => {
    let content = [];
    for (let i = 0; i < count; i++) {
      content.push(<Icon as={StarIcon} color={"yellow.500"} mx={.5} key={i}/>);
    }
    return content
  };

  return (
    <Card maxW='sm' key={item.id}>
      <CardBody align='center' py={10}>
        <Image
          //src={require(`../img/${item.img}.jpg`)}
          src={'https://i.pravatar.cc/60?'+item.id}
          alt={item.name}
          borderRadius='30px'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{item.name}</Heading>
          <Text size='10px'>
            {(item.saying.length > 60)?
              item.saying.substring(0, 60) + ' ..'
              :
              item.saying
            }
          </Text>
          <Box>
            {rating(item.rating)}
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}

const Testimonials = () => {
  return(
    <Grid templateColumns='repeat(4, 1fr)' gap={6} >
      {testimonialList.map((list, index) => (
        <GridItem key={index}>
          <Testimonial item={list}/>
        </GridItem>
      ))}
    </Grid>
  );
}

export default Testimonials;