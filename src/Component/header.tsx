import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import logo from "../assets/logo.png";
import { Dropdown } from 'react-bootstrap';

function Header() {
  return (
    <>
      <div className='header_bg'>
        <img src={logo} className='logo' alt='wait' />
        <div className='Nav-links'>
          <Link className='a_a' to="/">Home</Link>
          <Link className='a_a' to="/about">About</Link>
          <Link className='a_a' to="/services">Services</Link>
          <Link className='a_a' to="/physician">Our Physician</Link>
          <div className='a_a'>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Patient's Resources
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="https://sadio.com/login">Patient Portal</Dropdown.Item>
                <Dropdown.Item href="#/action-2">HIPPA Policy</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Pay Your Bill</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <Link className='a_a' to="/contact-us">Contact</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
