import React from 'react';
import Header from "../Component/header.tsx";
import img2 from "../assets/Rectangle 29 (1).png";
import img3 from "../assets/Rectangle 31 (1).png";
import Footer from "../Component/footer.tsx";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Rectangle from "../assets/Rectangle 46.png";
import review from "../assets/bxs_quote-right.png";
import ServiceBanner from "../assets/service.jpg"
import DermaService1 from "../assets/skincare-flat-cartoon-composition-with-young-woman-examining-her-face-with-magnifier_1284-54555.jpg"
import DermaService2 from "../assets/flat-design-rhinoplasty-illustration_23-2149334678.jpg"
import DermaService3 from "../assets/surgeons-with-syringe-doing-facial-contouring-surgery-woman-facial-contouring-medical-face-sculpting-facial-correction-surgery-concept-pinkish-coral-bluevector-isolated-illustration_335657-1310.jpg"

function Servicess() {
    return (
        <>
            <Header />

            <section>
                <section className="u-align-center u-clearfix u-grey-5 u-section-2" id="carousel_8f14">
                    <div className="u-clearfix u-sheet u-valign-bottom-sm u-valign-bottom-xs u-sheet-1">
                        <h2 className="u-custom-font u-font-raleway u-text u-text-default u-text-1">Our Services</h2>
                        <img className="u-expanded-width u-image u-image-round u-image-1" src={ServiceBanner} alt="" data-image-width="1620" data-image-height="1080" />
                        <div className="u-list u-list-1">
                            <div className="u-repeater u-repeater-1">
                                <div className="u-align-center u-container-style u-list-item u-radius-15 u-repeater-item u-shape-round u-white u-list-item-1">
                                    <div className="u-container-layout u-similar-container u-container-layout-1"><span className="u-black u-icon u-icon-rounded u-radius-10 u-spacing-18 u-text-white u-icon-1"><img className='img-fluid' src={DermaService1}/></span>
                                        <h5 className="u-custom-font u-font-raleway u-text u-text-2">General Dermatology</h5>
                                        <p className="u-text u-text-grey-25 u-text-3 text-start" style={{color:"#1A2451"}}>
                                        We address a wide spectrum of skin conditions, from the common to the complex. Our experi-enced dermatology providers specialize in diagnosing and treating acne, eczema, psoriasis, rosacea, dermatitis, and other conditions. We strive to provide effective solutions tailored to each patient’s unique needs and concerns. Additionally, our team emphasizes patient education, em-powering individuals to understand their condition and participate actively in their care journey. Whether managing chronic conditions or promoting preventive measures, we are dedicated to optimizing skin health for every patient we serve.                                            </p>
                                    </div>
                                </div>
                                <div className="u-align-center u-container-style u-list-item u-radius-15 u-repeater-item u-shape-round u-white u-list-item-1">
                                <div className="u-container-layout u-similar-container u-container-layout-1"><span className="u-black u-icon u-icon-rounded u-radius-10 u-spacing-18 u-text-white u-icon-1"><img className='img-fluid' src={DermaService2}/></span>
                                        <h5 className="u-custom-font u-font-raleway u-text u-text-2">Surgical Dermatology</h5>
                                        <p className="u-text u-text-grey-25 u-text-3 text-start">
                                        At Charter Dermatology, we offer a wide range of surgical services. Some of our surgical der-matology services include the following: <br/>

•	Mohs Surgery  <br/>
•	Skin Cancer Surgery  <br/>
•	Atypical Mole Removal  <br/>
•	Cyst Removal  <br/>
•	Incision and Drainage  <br/>
•	Wart Removal  <br/>
•	Precancer Treatment  <br/>
•	Cosmetic removal of skin tags, seborrheic keratosis, milia, benign moles.  <br/>
                                            </p>
                                    </div>
                                </div>
                                <div className="u-align-center u-container-style u-list-item u-radius-15 u-repeater-item u-shape-round u-white u-list-item-1">
                                <div className="u-container-layout u-similar-container u-container-layout-1"><span className="u-black u-icon u-icon-rounded u-radius-10 u-spacing-18 u-text-white u-icon-1"><img className='img-fluid' src={DermaService3}/></span>
                                        <h5 className="u-custom-font u-font-raleway u-text u-text-2">Mohs Surgery</h5>
                                        <p className="u-text u-text-grey-25 u-text-3 text-start">
                                        Our Mohs Surgery department offers expertise in the treatment of skin cancer. Mohs surgery is known for its high cure rates and tissue-sparing approach, making it the gold standard for the removal of certain types of skin cancer, particularly those on the face and delicate areas. Our team is dedicated to providing comprehensive care throughout the entire Mohs procedure, from tumor removal to wound reconstruction. With meticulous precision and attention to detail, we aim to achieve complete tumor removal while preserving as much healthy tissue as possible.                                            </p>
                                    </div>
                                </div>
                               
                            </div>
                        </div>

                    </div>
                </section>
            </section>
            <Footer />
        </>
    );
}

export default Servicess;
