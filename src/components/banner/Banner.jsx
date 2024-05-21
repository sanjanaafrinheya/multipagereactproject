import bann from '../../assets/banner.png'
import { FaLongArrowAltRight } from "react-icons/fa";



import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
import { Link } from 'react-router-dom';
 function Banner() {
  return (
  <section id="banner">
    <Container>
        <Row>
            <Col lg={5}>
                <h2>Building stellar websites for early startups</h2>
 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
View our work</p>
<div className="button-part d-flex">
<div className="view-work"><Link to="/faq">View Our Work</Link></div><div className="pricing"><Link to="/pricing">View-pricing <FaLongArrowAltRight /></Link></div>
</div>

            </Col>
            <Col lg={6}className='jkgjk'>
                <img src={bann} alt="" />
            </Col>
        </Row>
    </Container>

  </section>
  )
}

    export default Banner;