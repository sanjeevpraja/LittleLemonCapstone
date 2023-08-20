import { render, screen } from '@testing-library/react';
import Hero from "./Hero";
import React from "react";

test('Renders homepage', () => {

  const content = {
    title: 'Little lemon',
    subTitle: 'Chicago',
    desc: 'We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist',
    btnLabel: 'Reserve a Table'
  };
  const imgStyle = {
    position: 'absolute',
    right: 0,
    borderRadius: '15px'
  };

  render(<Hero content={content} imgStyle={imgStyle}/>);
  const title = screen.getByText('Little lemon');
  expect(title).toBeInTheDocument();
});
