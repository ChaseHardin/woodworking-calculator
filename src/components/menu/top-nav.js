import React from 'react';
import { MDBNav } from 'mdbreact';

const menuStyles = {
  color: 'white'
};

export const TopNav = () => {
  return (
    <MDBNav color='aqua-gradient' className='font-weight-bold py-4 px-2 mb-5' style={menuStyles}>
      Woodworking Calculator
    </MDBNav>
  )
}