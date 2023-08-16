import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Image,
  GridItem,
  Grid
} from '@chakra-ui/react';

// import menu_1 from '.././img/menu-1.jpg';
// import menu_2 from '.././img/menu-2.jpg';
// import menu_3 from '.././img/menu-3.jpg';
// const images = {
//   menu_1, menu_2, menu_3
// }

const menuList = [
  {
    title: 'Greek Salad',
    desc: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ',
    price: 12.99,
    img: 'menu-1'
  },
  {
    title: 'Brushetta',
    desc: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Toppings of tomato, veggies, beans, cured pork, or cheese are examples of variations. In Italy, a brustolina grill is frequently used to create bruschetta.',
    price: 7.99,
    img: 'menu-2'
  },
  {
    title: 'Grilled Fish',
    desc: 'This fish is delicious when served with steamed broccoli on the side. Or if you have a little more time, try it with my pan',
    price: 10.99,
    img: 'menu-3'
  }
]

const Menu = (props) => {
  const item = props.item;
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={require(`../img/${item.img}.jpg`)}
          alt={item.title}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{item.title}</Heading>
          <Text>
            {(item.desc.length > 100)?
              item.desc.substring(0, 100) + ' ..'
              :
              item.desc
            }
          </Text>
          <Text color='primary' fontSize='2xl'>
            ${item.price}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='secondary' color='#000000'>
            Order a delivery
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

const MenuCards = () => {
  return(
    <Grid templateColumns='repeat(3, 1fr)' gap={6} >
    {menuList.map((list, index) => (
      <GridItem key={index}>
        <Menu item={list}/>
      </GridItem>
      ))}
    </Grid>
  );
}

export default MenuCards;