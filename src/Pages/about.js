import React from 'react';
import Header from "../Component/header.tsx";
import img2 from "../assets/Rectangle 29 (1).png";
import img3 from "../assets/Rectangle 31 (1).png";
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
                    <h1 className='section-1-header-about'>About Us</h1>
                </div>
            </section>
            <section>
                <div className='section-2'>
                    <div>
                        <h1 className='local-p'>Our Mission</h1>
                        <p style={{textAlign:"justify"}}>
                        Our mission at Charter Dermatology is to provide comprehensive and compassionate, dermato-logic care to our patients. With a foundation built on integrity, expertise, and a deep commitment to patient well-being, we strive to exceed expectations in every aspect of our practice. We are dedicated to fostering long-term relationships with our patients, built on trust, respect, and excep-tional care.
                        </p>
                    </div>
                    <img style={{ width: "30%" }} src={img2} alt='wait' />
                </div>
            </section>
            {/* <section>
                <div className='section-2'>
                    <img style={{ width: "20%" }} src={img3} alt='wait' />
                    <div>
                        <h1 className='local-p'>Our practice</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br/>
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make<br/>
                            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,<br/><br />
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Ipsum.<br /><br />
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br/>
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make<br/><br />
                            a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,<br/>
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Ipsum.<br />
                        </p>
                    </div>
                </div>
            </section> */}
            <Footer />
        </>
    );
}

export default About;