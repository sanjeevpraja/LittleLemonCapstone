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
import {useNavigate} from 'react-router-dom';
import {fetchAPI, submitAPI} from '../api';

const addZero= (num) =>{
  if(num <= 9 ){
    return '0'+ num;
  }
  else{
    return num;
  }
}
export default function BookingForm(){
  const today = new Date();
   const formatToday = today.getFullYear() + '-' + addZero(today.getMonth()+1)+ '-' + addZero(today.getDate())

  const [form, setForm] = useState({
    firstName: {value: '', isTouched: false, error: ''},
    email: {value: '', isTouched: false, error: '' },
    phone: {value: '', isTouched: false, error: '' },
    remarks: {value: '', isTouched: false, error: '' },

    date: {value: formatToday, isTouched: false, error: '' },
    time: {value: '17:00 PM', isTouched: false, error: '' },
    number: {value: '', isTouched: false, error: '' },
    occasion: {value: '', isTouched: false, error: '' }
  });

  const handleChange =((e) =>{
    const nextFormState = {
      ...form,
      [e.target.name]: {value: e.target.value, isTouched: true},
    };
    if(e.target.name == 'date'){
      dispatch({type: "CHOOSEDATE", date: form.date.value});
    };
    setForm(nextFormState);
  });

  const ValidateEmail= ((input) => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return !!input.match(validRegex);
  });

  const ValidateNumber= ((input) => {
    const validRegex = /^(\d{3})[- ]?(\d{3})[- ]?(\d{4})$/;
    return !!input.match(validRegex);
  });

  const handleBlur =((e) =>{
    let errorMsg = '';
    switch (e.target.name) {
      case 'firstName':
        break
      case 'email':
        errorMsg = (ValidateEmail(e.target.value) ? 'valid': 'please enter valid email');
        break
      case 'phone':
        errorMsg = (ValidateNumber(e.target.value) ? 'valid': 'please enter valid number');
        break;
      default:
        break;
    }
    const nextFormState = {
      ...form,
      [e.target.name]: {value: e.target.value, isTouched: true, error: errorMsg},
    };
    setForm(nextFormState);
  });

/*reducer function for time*/
  const reducer = (state, action) => {
    switch (action.type) {
      case "CHOOSEDATE":
        state = initialTimes(state, action.date);
        return state;
      case "CHOOSETIME":
        //state = removeTime(state, action.time);
        state = updateTimes(state, action.time);
        return state;
      default:
        return state;
    }
  };
  function updateTimes(arr, item)
  {
    let index = arr.findIndex(arr => arr.label === item);
    arr[index].isReserved = true;
    return arr;
  }


   const initialAvailableTimes = [
     {
       label: '11:00 PM',
       isReserved: true
     },
     {
       label: '18:00 PM',
       isReserved: false
     },
     {
       label: '19:00 PM',
       isReserved: false
     },
     {
       label: '20:00 PM',
       isReserved: false
     },
     {
       label: '21:00 PM',
       isReserved: false
     },
     {
       label: '2:00 PM',
       isReserved: false
     }
   ];

  const initialTimes = (times, date) =>{
    times = fetchAPI(new Date(date));
    return times;
  }


  const [availableTimes, dispatch] = useReducer(reducer, initialAvailableTimes, initialTimes);

  const handleComplete = (e) => {
    e.preventDefault();
    dispatch({type: "CHOOSETIME", time: form.time.value});
    submitData(form);
  };

  const navigate = useNavigate();
  const submitData = formData => {
    const response = submitAPI(formData)
    if (response) navigate('/confirmedBooking');
  };

  const intialOccassions = ['Birthday','Anniversary', 'Business Meeting', 'others'];

  return(
    <form onSubmit={handleComplete} >
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
          <FormErrorMessage data-testid="error-message-firstname">Please provide valid name</FormErrorMessage>
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
            placeholder='xxx-xxx-xxxx'
          />
          <FormErrorMessage>{form.phone.error}</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="phone">Remarks</FormLabel>
          <Textarea
            id="remarks"
            name="remarks"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.remarks.value}
            isInvalid={!form.remarks.value && form.remarks.isTouched}
          />
        </FormControl>
        <FormControl isInvalid={(!form.date.value && form.date.isTouched)} isRequired>
          <FormLabel htmlFor="date">Date</FormLabel>
          <Input
            type="date"
            id="date"
            name="date"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.date.value}
            isInvalid={(!form.date.value && form.date.isTouched)}
          />
          <FormErrorMessage>Please provide valid name</FormErrorMessage>
        </FormControl>

        <Divider/>
        <FormControl isInvalid={(form.time.error !== 'valid') && form.time.isTouched} isRequired>
          <FormLabel htmlFor="time">Time</FormLabel>
          <Select
            id="time"
            name="time"
            onChange={handleChange}
            value={form.time.value}
            isInvalid={!form.time.value && form.time.isTouched}
          >
            {availableTimes.map((time, index) =>
              <option value={time.label} key={index} disabled={time.isReserved} data-testid="time-option">{time.label}{time.isReserved}</option>
            )}
          </Select>
          <FormErrorMessage>{form.time.error}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={(form.number.error !== 'valid') && form.number.isTouched} isRequired>
          <FormLabel htmlFor="number">Number of People</FormLabel>
          <Input
            type='number'
            id="number"
            name="number"
            min={1}
            max={20}
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.number.value}
            isInvalid={!form.number.value && form.number.isTouched}
          />
          <FormErrorMessage>{form.number.error}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={(form.occasion.error !== 'valid') && form.occasion.isTouched} isRequired>
          <FormLabel htmlFor="occasion">Occasion</FormLabel>
          <Select
            id="occasion"
            name="occasion"
            onChange={handleChange}
            value={form.occasion.value}
            isInvalid={!form.occasion.value && form.occasion.isTouched}
          >
            {intialOccassions.map((occasion, index) =>
              <option value={occasion} key={index} data-testid="occasion-option">{occasion}</option>
            )}
          </Select>
          <FormErrorMessage>{form.occasion.error}</FormErrorMessage>
        </FormControl>
      </VStack>
      <Button type="submit" colorScheme="purple" colorScheme={"primary"} mt={5}>
        Make Your Reservation
      </Button>
    </form>
  )
};