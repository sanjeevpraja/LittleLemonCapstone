import Hero from './components/hero';
import React, {useState} from "react";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  GridItem,
  Input, Select, Textarea,
  VStack
} from "@chakra-ui/react";

import { useFormik } from "formik";
import * as Yup from 'yup';


const content = {
  title: 'Reservation',
  subTitle: 'Please fill form to reserve table',
  desc: 'You can call us if you need to change or cancel reservation',
  btnLabel: ''
};
const imgStyle = {
  float: 'right',
  height: '300px',
  borderRadius: '15px'
};

export default function Reservation(){
  const [startDate, setStartDate] = useState(new Date());

  const yupValidation = Yup.object({
    firstName: Yup.string().min(3, "Must be at least 3 characters").required("Required"),
    email: Yup.string().email("Must be email").required("Required"),
    phone: Yup.number().required("Required"),
    remarks:  Yup.string().min(50, "Must be at least 3 characters").required("Required"),
    branch: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      number: '',
      remarks: '',
      branch:'',
      date: startDate,
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
                  <FormControl isInvalid={formik.touched.branch && formik.errors.branch ? 'true' : 'false'} isRequired>
                    <FormLabel htmlFor='branch'>Branch</FormLabel>
                    <Select placeholder='Select Branch'
                            id='branch'
                            name={'branch'}
                            onChange={formik.handleChange}
                            value={formik.values.branch}
                            isInvalid={formik.touched.branch && formik.errors.branch ? 'true' : ''}
                    >
                      <option value='option1'>Option 1</option>
                      <option value='option2'>Option 2</option>
                      <option value='option3'>Option 3</option>
                    </Select>
                    <FormErrorMessage>{formik.errors.branch}</FormErrorMessage>
                  </FormControl>
                  <FormControl isInvalid={formik.touched.date && formik.errors.date ? 'true' : 'false'} isRequired>
                    <FormLabel htmlFor='date'>Choose Date</FormLabel>
                    <Input
                      id="date"
                      name="date"
                      placeholder="Select Date and Time"
                      size="md"
                      type="datetime-local"
                      onChange={formik.handleChange}
                      value={formik.values.date}
                      isInvalid={formik.touched.date && formik.errors.date ? 'true' : ''}
                    />
                    <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                  </FormControl>
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
                </VStack>
                <Button type="submit" colorScheme="purple" colorScheme={"primary"} mt={5}>
                  Submit
                </Button>
              </form>
          </GridItem>
          <GridItem w='100%' />
        </Grid>
      </Box>
    </>
)
};