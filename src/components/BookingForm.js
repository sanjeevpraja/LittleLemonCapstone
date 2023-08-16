import {
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack
} from "@chakra-ui/react";
import React, { useState} from "react";

export default function BookingForm(){


  const initialAvailableTimes = ['17:00 PM', '18:00 PM', '19:00 PM', '20:00 PM', '21:00 PM', '22:00 PM'];

  const [form, setForm] = useState({
    firstName: {value: '', isTouched: false, error: ''},
    email: {value: '', isTouched: false, error: '' },
    phone: {value: '', isTouched: false, error: '' },
  });

  // const [firstName, setFirstName] = useState(0);
  // const [email, setEmail] = useState(0);
  // const [phone, setPhone] = useState(0);
  // const [remarks, setRemarks] = useState(0);
  //
  // //const [selectDate, setSelectDate] = useState(new Date());
  // const [date, setDate] = useState(new Date());
  // const [time, setTime] = useState(initialAvailableTimes);
  // const [number, setNumber] = useState([1])
  // const [occasion, setOccasion] = useState(0);

  //handleSubmit(time)

  const handleChange =((e) =>{
    const nextFormState = {
      ...form,
      [e.target.name]: {value: e.target.value, isTouched: true},
    };
    setForm(nextFormState);
  });

  const ValidateEmail= ((input) => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) {
      return true;
    } else {
      return false;
        }
      }
  );

  const ValidateNumber= ((input) => {
    const validRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return !!input.match(validRegex);
  });

  const handleBlur =((e) =>{
    let errormsg = '';
    switch (e.target.name) {
      case 'firstName':
        break
      case 'email':
        errormsg = (ValidateEmail(e.target.value) ? 'valid': 'please enter valid email');
        break
      case 'phone':
        errormsg = (ValidateNumber(e.target.value) ? 'valid': 'please enter valid number');
        break;
      default:
        break;
    }
    const nextFormState = {
      ...form,
      [e.target.name]: {value: e.target.value, isTouched: true, error: errormsg},
    };
    setForm(nextFormState);
  });


  return(
    <form>
      <VStack spacing={4}>
        <FormControl isInvalid={(!form.firstName.value && form.firstName.isTouched)} isRequired>
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <Input
            id="firstName"
            name="firstName"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.firstName.value}
            isInvalid={(!form.firstName.value && form.firstName.isTouched)}
          />
          <FormErrorMessage>Please provide valid name</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={(form.email.error !== 'valid') && form.email.isTouched} isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input
            type='email'
            id="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.email.value}
            isInvalid={!form.email.value && form.email.isTouched}
          />
          <FormErrorMessage>{form.email.error}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={(form.phone.error !== 'valid') && form.phone.isTouched} isRequired>
          <FormLabel htmlFor="phone">Phone Number</FormLabel>
          <Input
            type='phone'
            id="phone"
            name="phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.phone.value}
            isInvalid={!form.phone.value && form.phone.isTouched}
          />
          <FormErrorMessage>{form.phone.error}</FormErrorMessage>
        </FormControl>
        {/*<FormControl isInvalid={formik.touched.phone && formik.errors.phone ? 'true' : 'false'} isRequired>*/}
        {/*  <FormLabel htmlFor="phone">Phone Number</FormLabel>*/}
        {/*  <Input*/}
        {/*    type='tel'*/}
        {/*    id="phone"*/}
        {/*    name="phone"*/}
        {/*    onChange={formik.handleChange}*/}
        {/*    onBlur={formik.handleBlur}*/}
        {/*    value={formik.values.phone}*/}
        {/*    isInvalid={formik.touched.phone && formik.errors.phone ? 'true' : ''}*/}
        {/*  />*/}
        {/*  <FormErrorMessage>{formik.errors.phone}</FormErrorMessage>*/}
        {/*</FormControl>*/}
        {/*<FormControl isInvalid={formik.touched.remarks && formik.errors.remarks ? 'true' : 'false'}>*/}
        {/*  <FormLabel htmlFor="remarks">Remarks</FormLabel>*/}
        {/*  <Textarea*/}
        {/*    id="remarks"*/}
        {/*    name="remarks"*/}
        {/*    onChange={formik.handleChange}*/}
        {/*    onBlur={formik.handleBlur}*/}
        {/*    value={formik.values.remarks}*/}
        {/*    isInvalid={formik.touched.remarks && formik.errors.remarks ? 'true' : ''}*/}
        {/*  />*/}
        {/*  <FormErrorMessage>{formik.errors.remarks}</FormErrorMessage>*/}
        {/*</FormControl>*/}

        {/*<Divider orientation='horizontal' />*/}
        {/*<FormControl isInvalid={formik.touched.date && formik.errors.date ? 'true' : 'false'} isRequired>*/}
        {/*  <FormLabel htmlFor='date'>Choose Date</FormLabel>*/}
        {/*  <Input*/}
        {/*    type='date'*/}
        {/*    id="date"*/}
        {/*    name="date"*/}
        {/*    placeholder="Select Date and Time"*/}
        {/*    size="md"*/}
        {/*    onChange={formik.handleChange}*/}
        {/*    value={formik.values.date}*/}
        {/*    isInvalid={formik.touched.date && formik.errors.date ? 'true' : ''}*/}
        {/*  />*/}
        {/*  <FormErrorMessage>{formik.errors.date}</FormErrorMessage>*/}
        {/*</FormControl>*/}
        {/*<FormControl isInvalid={formik.touched.time && formik.errors.time ? 'true' : 'false'} isRequired>*/}
        {/*  <FormLabel htmlFor='time'>Time</FormLabel>*/}
        {/*  <Select placeholder='Select Time'*/}
        {/*          id='time'*/}
        {/*          name={'time'}*/}
        {/*          onChange={formik.handleChange}*/}
        {/*          value={formik.values.time}*/}
        {/*          isInvalid={formik.touched.time && formik.errors.time ? 'true' : ''}*/}
        {/*  >*/}
        {/*    {availableTimes.map((times) =>*/}
        {/*      <option value={times}>{times}</option>*/}
        {/*    )}*/}
        {/*  </Select>*/}
        {/*  <FormErrorMessage>{formik.errors.time}</FormErrorMessage>*/}
        {/*</FormControl>*/}
        {/*<FormControl isInvalid={formik.touched.number && formik.errors.number ? 'true' : 'false'} isRequired>*/}
        {/*  <FormLabel htmlFor="number">Number of Guests</FormLabel>*/}
        {/*  <Input*/}
        {/*    type='number'*/}
        {/*    id="number"*/}
        {/*    name="number"*/}
        {/*    onChange={formik.handleChange}*/}
        {/*    onBlur={formik.handleBlur}*/}
        {/*    value={formik.values.number}*/}
        {/*    isInvalid={formik.touched.number && formik.errors.number ? 'true' : ''}*/}
        {/*  />*/}
        {/*  <FormErrorMessage>{formik.errors.number}</FormErrorMessage>*/}
        {/*</FormControl>*/}
        {/*<FormControl isInvalid={formik.touched.occasion && formik.errors.occasion ? 'true' : 'false'} isRequired>*/}
        {/*  <FormLabel htmlFor='occasion'>Occasion</FormLabel>*/}
        {/*  <Select placeholder='Select Occasion'*/}
        {/*          id='occasion'*/}
        {/*          name={'occasion'}*/}
        {/*          onChange={formik.handleChange}*/}
        {/*          value={formik.values.occasion}*/}
        {/*          isInvalid={formik.touched.occasion && formik.errors.occasion ? 'true' : ''}*/}
        {/*  >*/}
        {/*    <option value='birthday'>Birthday</option>*/}
        {/*    <option value='anniversary'>Anniversary</option>*/}
        {/*    <option value='business'>Business</option>*/}
        {/*    <option value='casual'>Casual</option>*/}
        {/*    <option value='other'>Other</option>*/}
        {/*  </Select>*/}
        {/*  <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>*/}
        {/*</FormControl>*/}
      </VStack>
      <Button type="submit" colorScheme="purple" colorScheme={"primary"} mt={5}>
        Make Your Reservation
      </Button>
    </form>
  )
};