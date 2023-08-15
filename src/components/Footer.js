import logo from '.././img/logo_light.png';

import {
  Box,
  Heading,
  Container,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'


export default function FooterWithLogoLeft() {
  return (
    <Box className="footer" mt={100}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr  1fr 1fr 1fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <img src={logo} style={{height: '56px'}}/>
            </Box>
            <Text fontSize={'sm'}>© 2023 Little Lemon. All rights reserved</Text>
          </Stack>
          <Stack align={'flex-start'}>
            <Heading>Company</Heading>
            <Box as="a" href={'#'}>
              About
            </Box>
            <Box as="a" href={'#'}>
              Press
            </Box>
            <Box as="a" href={'#'}>
              Careers
            </Box>
            <Box as="a" href={'#'}>
              Contact
            </Box>
            <Box as="a" href={'#'}>
              Partners
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <Heading>Support</Heading>
            <Box as="a" href={'#'}>
              Help Center
            </Box>
            <Box as="a" href={'#'}>
              Terms of Service
            </Box>
            <Box as="a" href={'#'}>
              Legal
            </Box>
            <Box as="a" href={'#'}>
              Privacy Policy
            </Box>
            <Box as="a" href={'#'}>
              Status
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <Heading>Follow Us</Heading>
            <Box as="a" href={'#'}>
              Facebook
            </Box>
            <Box as="a" href={'#'}>
              Twitter
            </Box>
            <Box as="a" href={'#'}>
              Dribbble
            </Box>
            <Box as="a" href={'#'}>
              Instagram
            </Box>
            <Box as="a" href={'#'}>
              LinkedIn
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}