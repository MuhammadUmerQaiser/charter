import React from 'react';
import Header from "../Component/header.tsx";
import img2 from "../assets/Group 4.png";
import img3 from "../assets/img2.png";
import Footer from "../Component/footer.tsx";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Rectangle from "../assets/Rectangle 46.png";

import review from "../assets/bxs_quote-right.png";


function About() {
    return (
        <>
            <Header />
            <section>
                <div className='secition-1-bg-about'>
                    <h1 className='section-1-header-about'>Contact Us</h1>
                </div>
            </section>
            <section style={{padding:"5%"}}>
                <div className='treat_div'>
                    <p className='treat-txt'>CONTACT INFO</p>
                    <h1 className='featured-txt' style={{fontSize:"18px",fontWeight:"400"}}>Our clinic is conveniently located in the heart of Martinsburg allowing for easy accessibility and convenience.</h1>
                </div>
                <div className='iframe_sec'>
                <iframe style={{marginBottom:"60px",position: "relative",top: "25px",width: "65%"}} src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3079.7538159245796!2d-77.97135!3d39.474889999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDI4JzI5LjYiTiA3N8KwNTgnMTYuOSJX!5e0!3m2!1sen!2s!4v1715450953305!5m2!1sen!2s" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <div>
                        <p style={{fontWeight: "500",fontSize: "24px"}}>Opening Hours</p>
                        <p className='margin_btn' style={{fontWeight: "500",fontSize: "22px"}}>Monday: <span className='time text-end'>8:00 am - 4:30 pm</span></p>
                        <p className='margin_btn' style={{fontWeight: "500",fontSize: "22px"}}>Tuesday: <span className='time'>8:00 am - 4:30 pm</span></p>
                        <p className='margin_btn' style={{fontWeight: "500",fontSize: "22px"}}>Wednesday: <span className='time'>8:00 am - 4:30 pm</span></p>
                        <p className='margin_btn' style={{fontWeight: "500",fontSize: "22px"}}>Thursday: <span className='time'>8:00 am - 4:30 pm</span></p>
                        <p className='margin_btn' style={{fontWeight: "500",fontSize: "22px"}}>Friday: <span className='time'>8:00 am - 4:30 pm</span></p>
                        <p className='margin_btn' style={{fontWeight: "500",fontSize: "22px"}}>Saturday: <span className='time'>Closed</span></p>
                        <p className='margin_btn' style={{fontWeight: "500",fontSize: "22px"}}>Sunday: <span className='time'>Closed</span></p>
                        <p className='margin_btn' style={{fontWeight: "500",fontSize: "22px",marginTop:"20px"}}>Get in Touch</p>
                        <p className='margin_btn' style={{color: "#6D6D6D",fontSize: "18px"}}>Location: 1008 Tavern Road, Suite 201,<br/> Martinsburg, WV 25401</p>
                        <p className='margin_btn' style={{color: "#6D6D6D",fontSize: "18px"}}>Phone number:     681-446-7093</p>
                        <p className='margin_btn' style={{color: "#6D6D6D",fontSize: "18px"}}>Fax Number:         681-446-7094</p>
                        <p className='margin_btn' style={{color: "#6D6D6D",fontSize: "18px"}}>Practice Email:      info@charterderm.com</p>
                    </div>
                </div>
                <div>
                    <p className='contact_us'>Contact Us</p>
                    <p className='contact_us_tit'>Doctor*</p>
                    <select style={{width:"43%"}} className='selcect_design' name="cars" id="cars">
                        <option value="volvo">Dr Suresh</option>
                        <option value="saab">Dr Amir</option>
                    </select>
                    <p className='contact_us_tit'>Name*</p>
                    <input className='selcect_design' type='email' />
                    <p className='contact_us_tit'>Email*</p>
                    <input className='selcect_design' type='email' />
                    <p className='contact_us_tit'>Phone*</p>
                    <input className='selcect_design' type='email' />
                    <p className='contact_us_tit'>Message*</p>
                    <textarea rows={4} className='selcect_design' type='email' />
                    <br/>
                    <br/>
                    <br/>
                    <button className='submit_btn'>Submit</button>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default About;