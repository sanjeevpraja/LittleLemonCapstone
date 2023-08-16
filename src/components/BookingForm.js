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
import React, {useReducer, useState} from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

export default function BookingForm(){
  const [selectDate, setSelectDate] = useState(new Date());


  const yupValidation = Yup.object({
    firstName: Yup.string().min(3, "Must be at least 3 characters").required("Required"),
    email: Yup.string().email("Must be email").required("Required"),
    phone: Yup.number().required("Required"),
    remarks:  Yup.string().min(10, "Must be at least 10 characters"),

    date: Yup.date().required("Required"),
    time: Yup.string().required("Required"),
    number: Yup.number().required("Required"),
    occasion: Yup.string().required("Required"),
  });

  const reducer = (state, action) => {
    switch (action.type) {
      case "COMPLETE":
        state = removeTime(state, action.time);
        return state;
      default:
        return state;
    }
  };

  function removeTime(arr, item)
  {
    var index = arr.indexOf(item);
    return [
      // part of the array before the given item
      ...arr.slice(0, index),
      // part of the array after the given item
      ...arr.slice(index + 1)
    ];
  }

  const initialAvailableTimes = ['17:00 PM', '18:00 PM', '19:00 PM', '20:00 PM', '21:00 PM', '22:00 PM'];
  //using state
  //const [availableTimes, setAvailableTimes] = useState(initialAvailableTimes);
  const [availableTimes, dispatch] = useReducer(reducer, initialAvailableTimes);

  const handleComplete = (time) => {
    dispatch({type: "COMPLETE", time: time});
  };

  // const [firstName, setFirstName] = useState(0);
  // const [email, setEmail] = useState(0);
  // const [phone, setPhone] = useState(0);
  // const [remarks, setRemarks] = useState(0);
  //
  // const [date, setDate] = useState(new Date());
  // const [time, setTime] = useState(availableTimes[0]);
  // const [number, setNumber] = useState([1])
  // const [occasion, setOccasion] = useState(0);




  const formik = useFormik({
    initialValues: {
      firstName: '',
      email: '',
      phone: '',
      remarks: '',

      date: selectDate,
      time: '',
      number: '',
      occasion: '',
    },
    onSubmit: async (values) => {
      try {
        alert('submmission');
        handleComplete(formik.values.time);
        //state set
        // setAvailableTimes((availableTimes) =>
        //   removeTime(availableTimes, formik.values.time)
        // )
      } catch (error) {
      }
    },
    validationSchema:  yupValidation
  });

  return(
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
        <FormControl isInvalid={formik.touched.remarks && formik.errors.remarks ? 'true' : 'false'}>
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
            {availableTimes.map((times) =>
              <option value={times}>{times}</option>
            )}
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
  )
};