import Hero from '.././components/Hero';
import React, {useState} from "react";
import {
  Box,
  Button, Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Input, Select, Spacer, Textarea,
  VStack
} from "@chakra-ui/react";

import { useFormik } from "formik";
import * as Yup from 'yup';


const content = {
  title: 'BookingForm',
  subTitle: 'Please fill form to reserve table',
  desc: 'You can call us if you need to change or cancel reservation',
  btnLabel: ''
};
const imgStyle = {
  float: 'right',
  height: '300px',
  borderRadius: '15px'
};
//const initiAlavailableTimes = ['17:00 PM', '18:00 PM', '19:00 PM', '20:00 PM', '21:00 PM', '22:00 PM'];


export default function BookingForm(){
  const [startDate, setStartDate] = useState(new Date());
  //const [availableTimes, setAvailableTimes] = useState(initiAlavailableTimes);

  // const initializeTimes = initialAvailableTimes =>
  //   [...initialAvailableTimes, ...fetchAPI(new Date())];

  const yupValidation = Yup.object({
    firstName: Yup.string().min(3, "Must be at least 3 characters").required("Required"),
    email: Yup.string().email("Must be email").required("Required"),
    phone: Yup.number().required("Required"),
    remarks:  Yup.string().min(50, "Must be at least 3 characters").required("Required"),

    date: Yup.date().required("Required"),
    time: Yup.string().required("Required"),
    number: Yup.number().required("Required"),
    occasion: Yup.number().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      phone: '',
      remarks: '',

      date: startDate,
      time: '',
      number: '',
      occasion: '',
    },
    onSubmit: async (values) => {
      try {
        alert('hello');
      } catch (error) {
      }
    },
    validationSchema:  yupValidation
  });

  return(
    <>
    <Hero content={content} imgStyle={imgStyle}/>
      <Box className='mid-container'>
        <Grid templateColumns='2fr 1fr' gap={6}>
          <GridItem w='100%'>
              <form onSubmit={formik.handleSubmit}>
                <VStack spacing={4}>
                  <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName ? 'true' : 'false'} isRequired>
                    <FormLabel htmlFor="firstName">First Name</FormLabel>
                    <Input
                      id="firstName"
                      name="firstName"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                      isInvalid={formik.touched.firstName && formik.errors.firstName ? 'true' : ''}
                    />
                    <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={formik.touched.email && formik.errors.email ? 'true' : 'false'} isRequired>
                    <FormLabel htmlFor="email">Email</FormLabel>
                    <Input
                      type='email'
                      id="email"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      isInvalid={formik.touched.email && formik.errors.email ? 'true' : ''}
                    />
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={formik.touched.phone && formik.errors.phone ? 'true' : 'false'} isRequired>
                    <FormLabel htmlFor="phone">Phone Number</FormLabel>
                    <Input
                      type='tel'
                      id="phone"
                      name="phone"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone}
                      isInvalid={formik.touched.phone && formik.errors.phone ? 'true' : ''}
                    />
                    <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={formik.touched.remarks && formik.errors.remarks ? 'true' : 'false'} isRequired>
                    <FormLabel htmlFor="remarks">Remarks</FormLabel>
                    <Textarea
                      id="remarks"
                      name="remarks"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.remarks}
                      isInvalid={formik.touched.remarks && formik.errors.remarks ? 'true' : ''}
                    />
                    <FormErrorMessage>{formik.errors.remarks}</FormErrorMessage>
                  </FormControl>

                  <Divider orientation='horizontal' />
                  <FormControl isInvalid={formik.touched.date && formik.errors.date ? 'true' : 'false'} isRequired>
                    <FormLabel htmlFor='date'>Choose Date</FormLabel>
                    <Input
                      type='date'
                      id="date"
                      name="date"
                      placeholder="Select Date and Time"
                      size="md"
                      onChange={formik.handleChange}
                      value={formik.values.date}
                      isInvalid={formik.touched.date && formik.errors.date ? 'true' : ''}
                    />
                    <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={formik.touched.time && formik.errors.time ? 'true' : 'false'} isRequired>
                    <FormLabel htmlFor='time'>Time</FormLabel>
                    <Select placeholder='Select Time'
                            id='time'
                            name={'time'}
                            onChange={formik.handleChange}
                            value={formik.values.time}
                            isInvalid={formik.touched.time && formik.errors.time ? 'true' : ''}
                    >
                      <option value='17'>17:00</option>
                      <option value='18'>18:00</option>
                      <option value='19'>19:00</option>
                      <option value='20'>20:00</option>
                      <option value='21'>21:00</option>
                      <option value='22'>22:00</option>
                    </Select>
                    <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={formik.touched.number && formik.errors.number ? 'true' : 'false'} isRequired>
                    <FormLabel htmlFor="number">Number of Guests</FormLabel>
                    <Input
                      type='number'
                      id="number"
                      name="number"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.number}
                      isInvalid={formik.touched.number && formik.errors.number ? 'true' : ''}
                    />
                    <FormErrorMessage>{formik.errors.number}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={formik.touched.occasion && formik.errors.occasion ? 'true' : 'false'} isRequired>
                    <FormLabel htmlFor='occasion'>Occasion</FormLabel>
                    <Select placeholder='Select Occasion'
                            id='occasion'
                            name={'occasion'}
                            onChange={formik.handleChange}
                            value={formik.values.occasion}
                            isInvalid={formik.touched.occasion && formik.errors.occasion ? 'true' : ''}
                    >
                      <option value='birthday'>Birthday</option>
                      <option value='anniversary'>Anniversary</option>
                      <option value='business'>Business</option>
                      <option value='casual'>Casual</option>
                      <option value='other'>Other</option>
                    </Select>
                    <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
                  </FormControl>
                </VStack>
                <Button type="submit" colorScheme="purple" colorScheme={"primary"} mt={5}>
                  Make Your Reservation
                </Button>
              </form>
          </GridItem>
          <GridItem w='100%' />
        </Grid>
      </Box>
    </>
)
};