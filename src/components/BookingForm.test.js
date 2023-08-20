import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('Booking form', () => {
  const firstname = 'ram';


  test('should correctly render all fields and their default values', async () => {
    render(
      <BookingForm />
    );

    // const firstNameInput = screen.getByLabelText(/First Name/);
    // const emailInput = screen.getByLabelText(/Email/);
    // const phoneInput = screen.getByLabelText(/Phone Number/);
    // const remarksInput = screen.getByLabelText(/Remarks/);

    const dateInput = screen.getByLabelText(/Date/);
    const timeSelect = screen.getByLabelText(/Time/);
    const timeOptions = await screen.findAllByTestId('time-option');

    const numberInput = screen.getByLabelText(/Number of People/);
    const occasionSelect = screen.getByLabelText(/Occasion/);
    const occasionOptions = await screen.findAllByTestId('occasion-option');

    const submitButton = screen.getByRole('button');


    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(dateInput).toHaveAttribute('id', 'date');

    expect(timeSelect).toBeInTheDocument();
    expect(timeSelect).toHaveAttribute('id', 'time');
    expect(timeOptions.length).toBe(6);

    expect(numberInput).toBeInTheDocument();
    expect(numberInput).toHaveAttribute('id', 'number');
    expect(numberInput).toHaveAttribute('type', 'number');

    expect(occasionSelect).toBeInTheDocument();
    expect(occasionSelect).toHaveAttribute('id', 'occasion');
    expect(occasionOptions.length).toBe(4);

    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toBeEnabled();
  });

  test(
    `should display an error message and disable sumbit button when date
    field's value is empty`, () => {
      render(
        <BookingForm/>
      );

      const dateInput = screen.getByLabelText(/First Name/);
      fireEvent.change(dateInput, { target: { value: '' } });
      fireEvent.blur(dateInput);
      const errorMessage = screen.getByTestId('error-message-firstname');
      const submitButton = screen.getByRole('button');

      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage).toHaveTextContent('Please provide valid name');
    });

});
