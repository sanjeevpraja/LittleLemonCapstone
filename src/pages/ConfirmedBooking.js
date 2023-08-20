import {Box, Heading, Center, Text} from "@chakra-ui/react";
const ConfirmedBooking = () => {
  return (
    <Box className='mid-container' mt={100}>
      <Box bg={"primary.100"} p={200}>
      <Center >
      <Heading as='h1' size='xl' noOfLines={1}  color={"primary.500"}>
        Your reservation has been confirmed.
      </Heading>
      </Center>
        <Center >
      <Text color={"primary.400"}>You will receive an email with all the details.</Text>
      </Center>
    </Box>
    </Box>
  );
};

export default ConfirmedBooking;
