import React from 'react';
import logo from "../assets/logo.png";

import imgf1 from "../assets/1.png";
import imgf2 from "../assets/2.png";
import imgf3 from "../assets/3.png";
import imgf4 from "../assets/4.png";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="footer">
      <div style={{padding: "5%",display: "flex",alignItems: "flex-start",justifyContent: "space-between"}} className="container">
        <div>
            <img className='footer-logo' src={logo} alt='wait' />
        </div>
        <div className='footer_nav'>
            <Link style={{color:"white",textDecoration:"none"}} to="/home"><p>Home</p></Link>
            <Link style={{color:"white",textDecoration:"none"}} to="/about"><p>About</p></Link>
            <Link style={{color:"white",textDecoration:"none"}} to="/contact"><p>Contact</p></Link>
            <Link style={{color:"white",textDecoration:"none"}} to="/services"><p>Services</p></Link>
            <Link style={{color:"white",textDecoration:"none"}} to="https://sadio.com/login"><p>Patient's Portal</p></Link>
        </div>
        <div>
            <p>Have questions &<br/> suggestions? Need<br/> assistance?</p>
            <p>Give us a call</p>
            <p>681-446-7093</p>
        </div>
        <div style={{display:"flex",gap:"10px"}}>
          <img style={{width: "45px"}} src={imgf1} alt='wait' />
          <img style={{width: "45px"}} src={imgf2} alt='wait' />
          <img style={{width: "45px"}} src={imgf3} alt='wait' />
          <img style={{width: "45px"}} src={imgf4} alt='wait' />
        </div>
      </div>
      <div>
        <p className='copy_txt'>Copyright @SanovaDigitals2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;