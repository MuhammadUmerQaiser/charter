import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Header from "../Component/header.tsx";
import img2 from "../assets/Group 4.png";
import img3 from "../assets/img2.png";
import img4 from "../assets/Everything-you-need-to-know-about-acne-prone-skin_mobilehome_0 1.png";
import img5 from "../assets/Oil-Wont-Spoil-9-Steps-To-Flawless-Makeup-For-Oily-Skin_OI 1.png";
import img6 from "../assets/Oil-Wont-Spoil-9-Steps-To-Flawless-Makeup-For-Oily-Skin_OI 1 (1).png";
import Footer from "../Component/footer.tsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Rectangle from "../assets/general.avif";
import Rectangle1 from "../assets/mohs.jpg";
import Rectangle2 from "../assets/surgical.jpg";
import Rectangle3 from "../assets/Rectangle 58.png";
import review from "../assets/bxs_quote-right.png";
import mainimg from "../assets/home images.png";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

function Home() {
  const [sectionRefs, setSectionRefs] = useState([]);

  useEffect(() => {
    setSectionRefs((refs) =>
      Array(5)
        .fill()
        .map((_, i) => refs[i] || React.createRef())
    );
  }, []);

  return (
    <>
      <Header />
      <section ref={sectionRefs[0]}>
        <div className='secition-1-bg'>
          <div style={{ width: "60%" }}>
            <h1 className='section-1-header animate__animated animate__fadeInUp'>Welcome to <br /> Charter Dermatology</h1>
            <p className='sectionsubheader animate__animated animate__fadeInUp'>Personalized General and Surgical Dermatology Services</p>
          </div>
          <div style={{ width: "40%" }}>
            <Carousel autoPlay  interval={3000}>
              <img src={mainimg} alt='wait' />
              <img src={mainimg} alt='wait' />
              <img src={mainimg} alt='wait' />
            </Carousel>
          </div>
        </div>
      </section>
      <section>
        <div className='section-2'>
          <div>
            <h1 ref={sectionRefs[1]} className='animate__animated animate__fadeInUp'>By your side for all <br />of your dermatologic needs.</h1>
            <p>
              Welcome to Charter Dermatology, where expertise meets compassion in skin care. Located in Martinsburg, WV, our clinic offers comprehensive dermatologic services tailored to your unique needs. From general dermatology to surgical procedures and Mohs surgery, trust our skilled team to prioritize your skin health and well-being.
            </p>
            <Link to="/about">
            <button className='learing_btn animate__animated animate__swing'>LEARN MORE</button>
            </Link>
          </div>
          <img className='animate__animated animate__fadeIn' style={{ width: "20%" }} src={img2} alt='wait' />
        </div>
      </section>
      {/* <section ref={sectionRefs[2]}>
        <div className='section-3'>
          <div className='treat_div'>
            <p className='treat-txt animate__animated animate__fadeInLeft'>TREAT YOUR SKIN</p>
            <h1 className='featured-txt animate__animated animate__fadeInLeft'>FEATURED PROCEDURES</h1>
          </div>
          <div style={{ marginTop: "65px" }}>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div>
                  <img className='animate__animated animate__flipInY' style={{ width: "180px" }} src={img3} alt='wait' />
                  <p className='slide-header'>Kybella</p>
                  <p style={{ fontSize: "15px", marginTop: "35px", marginBottom: "35px", lineHeight: "1.6" }}>
                    Kybella is the only
                    FDA-approved <br />
                    injectable treatment
                    that destroys <br />fat
                    cells in the
                    treatment area<br />
                    under the chin to
                    improve your <br />profile.</p>
                  <button className="LMN">LEARN MORE</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img className='animate__animated animate__flipInY' style={{ width: "180px" }} src={img4} alt='wait' />
                  <p className='slide-header'>Microneedling</p>
                  <p style={{ fontSize: "15px", marginTop: "35px", marginBottom: "35px", lineHeight: "1.6" }}>
                    Also referred to as
                    collagen <br />induction
                    therapy,
                    microneedling<br /> uses
                    very fine needles to
                    create <br />equally fine
                    channels through
                    the <br />surface layer of
                    the skin.</p>
                  <button className="LMN">LEARN MORE</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img className='animate__animated animate__flipInY' style={{ width: "180px" }} src={img5} alt='wait' />
                  <p className='slide-header'>Lip Lift</p>
                  <p style={{ fontSize: "15px", marginTop: "35px", marginBottom: "35px", lineHeight: "1.6" }}>
                    A lip lift is a surgical
                    procedure <br />designed
                    to reduce the
                    amount of <br />pink lip
                    visible to others by
                    shortening <br />the
                    space between the
                    nose and the <br />top of
                    the lip.</p>
                  <button className="LMN">LEARN MORE</button>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div>
                  <img className='animate__animated animate__flipInY' style={{ width: "180px" }} src={img6} alt='wait' />
                  <p className='slide-header'>CoolSculptiog</p>
                  <p style={{ fontSize: "15px", marginTop: "35px", marginBottom: "55px", lineHeight: "1.6" }}>
                    CoolSculpting's fat-
                    freezing <br />technology
                    gives long-term<br />
                    results that make
                    trouble spots  <br />a lot
                    less troubling.</p>
                  <button className="LMN">LEARN MORE</button>
                </div>
              </SwiperSlide>
            </Swiper>

          </div>
        </div>
      </section> */}
      <section ref={sectionRefs[3]}>
        <div className='section-4'>
          <p className='section-4-title animate__animated animate__fadeInLeft' style={{ color: "#1A2451", marginBottom: "0", borderLeft: "solid 3px #1A2451", paddingLeft: "5px" }}>Our services</p>
          <h1 className='featured-txt' style={{ color: "#1A2451" }}>Our Specialties</h1>
          <div className='flex_wrap'>
            <div>
              <img style={{ width: "350px", height: "400px", objectFit:"cover" }} src={Rectangle} alt='wait' />
              <div className='image_hover animate__animated animate__zoomIn'>
                <p style={{ margin: "0", fontSize: "22px", fontWeight: "500" }}>General</p>
                <p className='hover_p'>Dermatology</p>
              </div>
            </div>
            <div>
              <img style={{ width: "350px", height: "400px", objectFit:"cover" }} src={Rectangle2} alt='wait' />
              <div className='image_hover animate__animated animate__zoomIn'>
                <p style={{ margin: "0", fontSize: "22px", fontWeight: "500" }}>Surgical</p>
                <p className='hover_p'>Dermatology</p>
              </div>
            </div>
            <div>
              <img style={{ width: "350px", height: "400px", objectFit:"cover" }} src={Rectangle1} alt='wait' />
              <div className='image_hover animate__animated animate__zoomIn'>
                <p style={{ margin: "0", fontSize: "22px", fontWeight: "500" }}>Mohs</p>
                <p className='hover_p'>Surgery</p>
              </div>
            </div>

          </div>
          <Link to="/services">
            <button style={{display:"block",margin:"0 auto"}} className='learing_btn animate__animated animate__swing'>LEARN MORE</button>
            </Link>
        </div>
      </section>
      <section ref={sectionRefs[4]}>
        <div className='bg-section-5'>
          <Carousel autoPlay infiniteLoop interval={3000}>
            <div>
              {/* <img src={review} alt='wait' /> */}
              <p>I booked my initial consult with Dr. Naga to talk about some of my skin <br />goals before my 2021 wedding. I did a lot of research and was drawn to<br /> Skin because of their natural esthetic when it comes to cosmetic <br />dermatology.</p>
              <p style={{ fontSize: "12px" }}>~Ashley Morgan~</p>
            </div>
            <div>
              {/* <img src={review} alt='wait' /> */}
              <p>I booked my initial consult with Dr. Naga to talk about some of my skin <br />goals before my 2021 wedding. I did a lot of research and was drawn to<br /> Skin because of their natural esthetic when it comes to cosmetic <br />dermatology.</p>
              <p style={{ fontSize: "12px" }}>~Ashley Morgan~</p>
            </div>
            <div>
              {/* <img src={review} alt='wait' /> */}
              <p>I booked my initial consult with Dr. Naga to talk about some of my skin <br />goals before my 2021 wedding. I did a lot of research and was drawn to<br /> Skin because of their natural esthetic when it comes to cosmetic <br />dermatology.</p>
              <p style={{ fontSize: "12px" }}>~Ashley Morgan~</p>
            </div>
          </Carousel>

        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;