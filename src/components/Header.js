import {
  Box,
  Flex,
  HStack,
  IconButton,
  Img,
  useDisclosure,
  useColorModeValue, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody,
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
            <HStack spacing={8} w="100%" alignItems={'center'} justifyContent={'space-between'}>
              <Box>
                <Img src={logo} style={{height: '56px'}}/>
              </Box>
              <HStack as={'nav'} spacing={4} display={{base: 'none', lg: 'flex'}}>
                {Links.map((link) => (
                  <NavLink key={link.label} url={link.url}>{link.label}</NavLink>
                ))}
              </HStack>
            </HStack>
            <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerBody>
                  <Box as={'nav'} spacing={4}  className="nav-menu-bar" >
                    {Links.map((link) => (
                      <NavLink key={link.label} url={link.url}>{link.label}</NavLink>
                    ))}
                  </Box>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
            <IconButton
              size={'lg'}
              icon={isOpen ? <CloseIcon/> : <HamburgerIcon/>}
              aria-label={'Open Menu'}
              display={{lg: 'none'}}
              // onClick={isOpen ? onClose : onOpen}
              onClick={onOpen}
            />
          </Flex>
        </div>
      </Box>
  )
}



