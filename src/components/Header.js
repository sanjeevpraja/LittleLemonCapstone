import {
  Box,
  Flex,
  HStack,
  IconButton,
  Img,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react'
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons'
import logo from '.././img/logo.png';


const Links = [
  {
    label: 'Home',
    url: '/'
  },
  {
    label: 'About',
    url: '/about'
  },
  {
    label: 'Menu',
    url: '/menu'
  },
  {
    label: 'Reservations',
    url: '/reservation'
  },
  {
    label: 'Order Online',
    url: '/order'
  },
  {
    label: 'Login',
    url: '/login'
  },
  {
    label: 'Components',
    url: '/components'
  }
]

const NavLink = (props) => {
  const {children} = props
  const url = props.url
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={url}
      className='nav-menu'>
      {children}
    </Box>
  )
}

export default function Header() {
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
      <Box bg={useColorModeValue('gray.100', 'gray.900')}>
        <div className='mid-container'>
          <Flex h={24} w="100%" alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
              aria-label={'Open Menu'}
              display={{md: 'none'}}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} w="100%" alignItems={'center'} justifyContent={'space-between'}>
              <Box>
                <Img src={logo} style={{height: '56px'}}/>
              </Box>
              <HStack as={'nav'} spacing={4} display={{base: 'none', md: 'flex'}}>
                {Links.map((link) => (
                  <NavLink key={link} url={link.url}>{link.label}</NavLink>
                ))}
              </HStack>
            </HStack>
          </Flex>
        </div>
      </Box>
  )
}



