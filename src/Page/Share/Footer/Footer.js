import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../image/logo.png';
import './Footer.css'
import image1 from '../../../image/footer/footer1.jpg';
import image2 from '../../../image/footer/footer2.jpg';
import image3 from '../../../image/footer/footer3.jpg';
import image4 from '../../../image/footer/footer4.jpg';



const Footer = () => {

    return (
        <div className='f-bg'>
            <Container>
                <Row>
                    <Col>
                        <div className='f-text'>
                            <img src={logo} height={30} alt="" />
                            <p>The world without photography will be meaningless to us if there is no light and color, which opens up our minds and expresses passion.</p>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <h4> <span className='fS'>L</span>atest Photos</h4>
                            <div className='f-img'>
                                <img src={image1} height={80} alt="" />
                                <img src={image2} height={80} alt="" />
                                <img src={image3} height={80} alt="" />
                                <img src={image4} height={80} alt="" />

                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='f-text'>
                            <h4><span className='fS'>C</span>ontacts</h4>
                            <p>Phone: +88 (01) 50505050</p>
                            <p>Email: raihankawer55@gmail.com</p>
                            <p>Copyright© 2022 kawser. All Rights Reserved</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;