import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './top-nav.css';

export const TopNav = () => {
  return (
    <Navbar bg='dark' className='navbar-styles'>
      <Navbar.Brand>
        Woodworking Calculator
      </Navbar.Brand>
    </Navbar>
  )
}
