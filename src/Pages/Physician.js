import React from 'react'
import Header from '../Component/header.tsx'
import Footer from '../Component/footer.tsx'
import { Col, Container, Row } from 'react-bootstrap'
import Doctor from '../assets/doctoravatar.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

const Physician = () => {
    return (
        <>
            <Header />
            <section style={{paddingBottom:"40px"}}>
                <div className='secition-1-bg-about'>
                    <h1 className='section-1-header-about'>Meet Our Physician</h1>
                </div>
            </section>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className='physician-info'>
                            <div className='text-center'>
                                <img className='doctor-img-size' src={Doctor} />
                            </div>
                            <div className='doctor-title'>Dr Suresh Memon</div>
                            <p  style={{textAlign:"justify"}}>
                                Dr. Menon was born in Westwood, NJ and moved to the Eastern Panhandle when he was 3. Raised in Charlestown, he attended local schools before graduating from Episcopal High School in Alexandria, Virginia. He received a Bachelor of Sciences in Biology from Georgetown Univer-sity.
                            </p>
                            <p  style={{textAlign:"justify"}}>
                                Dr Menon earned his Doctor of Medicine from the West Virginia University School of Medicine. He completed an internship at the Washington Hospital Center in DC, followed by residency at the University of Maryland. Dr. Menon is a Diplomate of the American Board of Family Medicine.
                            </p>
                            <p  style={{textAlign:"justify"}}>
                                Dr. Menon received his Dermatology training at Hahn Dermatology and Dermatology Associates and Surgery Center. He completed a Postgraduate Diploma in Practical Dermatology with Dis-tinction from Cardiff University and a Professional Certificate of Dermoscopy from HealthCert. He has served the Martinsburg community for over a decade providing Dermatology care.
                            </p>
                            <p style={{textAlign:"justify"}}>
                                His special interests include the early detection and treatment of skin cancers and systemic treatments of skin diseases including psoriasis, eczema, acne, hidradenitis suppurativa, and alo-pecia areata.
                            </p>
                            <p style={{textAlign:"justify"}}>
                                Beyond his medical practice, Dr. Menon cherishes time with his family/friends and enjoys all as-pects of sports.
                            </p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='physician-info'>
                            <div className='text-center'>
                                <img className='doctor-img-size' src={Doctor} />
                            </div>
                            <div className='doctor-title'>Dr. Amir Zahir, MD, FAAD </div>
                            <div className='doctor-title' style={{ fontSize: "20px", paddingTop: "0px" }}>Board-Certified Dermatologist </div>
                            <div className='doctor-title' style={{ fontSize: "20px", paddingTop: "0px" }}>Board-Certified Mohs Surgeon  </div>

                            <p style={{textAlign:"justify"}}>
                                Dr. Amir Zahir received his undergraduate degree from the University of Maryland, College Park. He completed his medical school at the University of Maryland School of Medicine and his dermatology residency training at the University of Maryland Medical Center. He received his training in Mohs Micrographic Surgery at The Toledo Clinic. He has published many articles and has presented at various national meetings. He is board-certified by the American Board of Dermatology in dermatology and Mohs Micrographic Surgery and is a member of the American Academy of Dermatology.                    </p>

                        </div>
                    </Col>
                </Row>
            </Container>
            <div className='physician-banner' style={{marginTop:"20px"}}>
                Support Providers
            </div>
            <div className='doctor-title' style={{padding:"0",textAlign:"center",paddingBottom:"30px",color:"#1A2451",fontSize:"50px"}}>Coming Soon...</div>
            <Footer />
        </>
    )
}

export default Physician