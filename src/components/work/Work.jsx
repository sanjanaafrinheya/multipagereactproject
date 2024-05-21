
import icon from '../../assets/icon.png'
import { Col, Container, Row } from "react-bootstrap";
import  "./Work.css"
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import Workreusable from '../reusable/workreusable/Workreusable';


 function Work() {
   
  
  return (
<section id="work">
 <Container>
    <Row>
        <Col lg={4}>
            <h3>How we work</h3>
            <p className='party'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <div className="touch">
                <button>
                <Link to="/contact">Get in touch with us <FaLongArrowAltRight /></Link>
                </button>
                </div>
        </Col>
        <Col lg={8}>
          <Row>
            <Workreusable number="01" title="Strategy"/>
            <Workreusable number="02"title="Wireframing" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
            <Workreusable  number="03" title="Design" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
            <Workreusable number="04"  title="Development" para="Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam ."/>
          </Row>
        </Col>
     
    </Row>
 </Container>
</section>
  )
}

    export default Work;
